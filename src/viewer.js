// Modified by PenguinEino for TR-1um GDS Viewer (2026); based on Tiny Tapeout GDS Viewer. See NOTICE and LICENSE.
import * as THREE from 'three';
import * as OrbitControls from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { WORKER_MSG_TYPE } from './defines.js';
import { GDS } from './GDS_data.js';
import { legacyProcessToPDK, PDK_LAYERS } from './pdk_layers.js';
import { summarizeGdsLayers } from './gds_layers.js';
import { createPresetBrowser } from './preset_browser.js';
import { GDS_PRESETS } from './gds_presets.js';
import { resolvePresetNodes, resolveVisibleNodes, hasVisibleBounds } from './preset_focus.js';
import { getLayerSpacingTransform } from './layer_spacing.js';
import { t, setText, setLanguage } from './i18n.js';
import {
  getLayerPattern,
  applyLayerPattern,
  setLayerPatternEnabled,
  setLayerPatternPixelRatio,
} from './layer_patterns.js';

function normalizeGdsUrl(value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new Error(t('Invalid URL'));
  }
  if (url.hostname === 'github.com') {
    const parts = url.pathname.split('/').filter(Boolean);
    if (parts.length >= 5 && parts[2] === 'blob') {
      url.hostname = 'raw.githubusercontent.com';
      url.pathname = `/${parts[0]}/${parts[1]}/${parts.slice(3).join('/')}`;
    }
  }
  if (url.protocol === 'http:' && !['localhost', '127.0.0.1', '::1'].includes(url.hostname)) {
    url.protocol = 'https:';
  }
  if (!['https:', 'http:'].includes(url.protocol)) throw new Error(t('Use an HTTP(S) GDS URL'));
  if (!/\.(gds|oas)$/i.test(url.pathname))
    throw new Error(t('URL must point to a .gds or .oas file'));
  return url.href;
}

const urlParams = new URLSearchParams(location.search);
const GDS_URL =
  urlParams.get('url') ||
  urlParams.get('model') ||
  GDS_PRESETS.find((preset) => preset.name === 'ISHI-KAI 01').url;
const GDS_PROCESS = urlParams.get('process');
const requestedPDK = urlParams.get('pdk') ?? legacyProcessToPDK[GDS_PROCESS] ?? 'TR-1um';
const PDK = PDK_LAYERS[requestedPDK] ? requestedPDK : 'TR-1um';

const OUTPUT_PROCESS_TO_CONSOLE = false;

if (GDS_URL && GDS_URL.endsWith('.gltf')) {
  location.href = `https://legacy-gltf.gds-viewer.tinytapeout.com/?model=${GDS_URL}`;
}

const gdsProcessorWorker = new Worker(new URL('./gds_processor_worker.js', import.meta.url), {
  type: 'module',
});

// THREE.js scene objects
let scene, scene_root_group, camera, renderer, cameraControls;
let raycaster;

// THREE.js scene objects for section view
let section_renderer,
  section_camera,
  section_renderer_box,
  section_renderer_box_helper,
  section_view_size;

// Hierarchical structure
// let node_graph;

let selected_object;
let selection_helper;
let isolation_history = [];
let highlighted_objects = [];
let highlighted_prev_colors = [];
let highlight_color = new THREE.Color(-1, 2, -1, -1);
let mouse, mouse_moved, mouse_down_time;

let animation_last_time = 0;

let cameraAnimmation = {
  initialized: false,
  animate: false,
  positionTarget: new THREE.Vector3(),
  upTarget: new THREE.Vector3(),
  lookAtTarget: new THREE.Vector3(),
};

// Experimental features options:
let experimental_show_section_on = false;

let experimental_bw_mode_prev_state = [];
let experimental_bw_mode_on = false;

let experimental_auto_rotation = false;
let experimental_auto_rotation_speed = 0.01;

let experimental_separate_layers_level = 0;
let experimental_separate_layers_target = 0;

// GUI dom elements
let instanceClassTitleDiv = document.querySelector('div#instanceClassTitle');
let informationDiv = document.querySelector('div#information');
let loadingStatus = document.getElementById('loadingStatus');
let crossSectionDiv = document.querySelector('div#crossSection');
const dropZone = document.getElementById('dropZone');
const urlForm = document.getElementById('urlForm');
const urlInput = document.getElementById('urlInput');
const languageSelect = document.getElementById('languageSelect');
let loadingInProgress = false;
let pendingSourceUrl = null;
let loadedSourceUrl = null;
let pendingFocusCells = [];
let focusedPresetNodes = [];
let loadedLayerSummary;
let labelTextures = new Map();

const presetBrowser = createPresetBrowser((url, cells = []) => {
  if (loadingInProgress) return;
  urlInput.value = url;
  if (loadedSourceUrl === normalizeGdsUrl(url) && GDS.root_node) {
    focusPresetCells(cells);
    presetBrowser.setActive(loadedSourceUrl, cells);
    return;
  }
  loadGDS(url, cells);
});
function setLoadingInProgress(value) {
  loadingInProgress = value;
  presetBrowser.setBusy(value);
}
const urlToggle = document.getElementById('urlToggle');
urlToggle.addEventListener('click', () => {
  urlForm.hidden = !urlForm.hidden;
  urlToggle.setAttribute('aria-expanded', String(!urlForm.hidden));
  if (!urlForm.hidden) urlInput.focus();
});
const togglePresets = document.getElementById('togglePresets');
function toggleSidebar() {
  const collapsed = document.documentElement.classList.toggle('presets-collapsed');
  togglePresets.setAttribute('aria-expanded', String(!collapsed));
  window.onresize?.();
}
togglePresets.addEventListener('click', toggleSidebar);
if (window.innerWidth <= 760) {
  document.documentElement.classList.add('presets-collapsed');
  togglePresets.setAttribute('aria-expanded', 'false');
}

urlForm.addEventListener('submit', (event) => {
  event.preventDefault();
  loadGDS(urlInput.value);
});
// Accept another file even when the import controls are collapsed.
const loadPanel = document.getElementById('loadPanel');
loadPanel.addEventListener('dragover', (e) => {
  e.preventDefault();
  loadPanel.classList.add('dragover');
});

loadPanel.addEventListener('dragleave', (e) => {
  e.preventDefault();
  loadPanel.classList.remove('dragover');
});

loadPanel.addEventListener('drop', (e) => {
  e.preventDefault();
  loadPanel.classList.remove('dragover');

  const file = e.dataTransfer.files[0];
  if (
    file &&
    (file.name.toLowerCase().endsWith('.gds') || file.name.toLowerCase().endsWith('.oas'))
  ) {
    loadLocalGDS(file);
  }
});

function chooseLocalFile() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '.gds, .oas';
  fileInput.style.display = 'none';
  fileInput.onchange = function (event) {
    const file = event.target.files[0];
    if (file) {
      loadLocalGDS(file);
    }
  };
  document.body.appendChild(fileInput);
  fileInput.click();
  fileInput.remove();
}
dropZone.addEventListener('click', chooseLocalFile);
dropZone.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    chooseLocalFile();
  }
});

// lil-gui controls
let guiLayersFolder,
  guiInstancesFolder,
  guiInstancesNamesFolder,
  guiIsolateSelectionButton,
  guiZoomSelectionButton;

let viewSettings, performanceSettings, experimentalSettings;
let keyLight;
let guiRoot;

setLanguage('ja');
languageSelect.addEventListener('change', () => {
  setLanguage(languageSelect.value);
  translateGui();
  if (!GDS.root_node) instanceClassTitleDiv.textContent = '';
});

// Debug FPS stats
let show_fps_stats = false;
let fps_stats = new Stats();
document.body.appendChild(fps_stats.dom);
fps_stats.domElement.hidden = true;

// Install vite's Hot Module Replacement (HMR) hook that listens for changes to the GLTF file
// NOTE: this only works in vite's development server mode
if (import.meta.hot) {
  import.meta.hot.on('my-gds-change', () => location.reload());
}

gdsProcessorWorker.addEventListener('error', function (event) {
  console.log('Error on worker thread', event);
});
gdsProcessorWorker.addEventListener('messageerror', (event) => {
  console.error(`Error receiving message from worker: ${event}`);
});
gdsProcessorWorker.addEventListener('message', function (event) {
  if (event.data.type == WORKER_MSG_TYPE.WORKER_READY) {
    console.log('WORKER_READY');
    init();
  } else if (event.data.type == WORKER_MSG_TYPE.LOG) {
    if (OUTPUT_PROCESS_TO_CONSOLE)
      console.log(`Message from gds_processor_worker ${event.data.text}`);
  } else if (event.data.type == WORKER_MSG_TYPE.ADD_CELL) {
    GDS.addCell(event.data.cell_name, event.data.bounds, event.data.is_top_cell);
  } else if (event.data.type == WORKER_MSG_TYPE.ADD_MESH) {
    // console.log("ADD_MESH", event.data);
    let vertices = new Float32Array(event.data.buffer, 0, event.data.positions_count);
    let indices = new Uint32Array(
      event.data.buffer,
      event.data.indices_offset * Float32Array.BYTES_PER_ELEMENT,
      event.data.indices_count,
    );

    const geometry = new THREE.BufferGeometry();
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

    // Flat face shading uses derivatives, but shadow coordinates also need
    // valid vertex normals for the world-space normal bias.
    geometry.computeVertexNormals();
    geometry.computeBoundingBox();

    const layer_id = GDS.makeLayerId(event.data.layer_number, event.data.layer_datatype);
    if (GDS.layers[layer_id] == undefined) {
      console.error(
        `ADD_MESH error: layer ${event.data.layer_number}/${event.data.layer_datatype} not found`,
      );
    }
    const material = GDS.layers[layer_id].threejs_material;
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = event.data.mesh_name;

    GDS.addMesh(
      event.data.cell_name,
      event.data.mesh_name,
      event.data.layer_number,
      event.data.layer_datatype,
      mesh,
    );
  } else if (event.data.type == WORKER_MSG_TYPE.ADD_LABEL) {
    GDS.addLabel(
      event.data.cell_name,
      event.data.layer_number,
      event.data.layer_datatype,
      event.data.text,
      event.data.origin_x,
      event.data.origin_y,
      event.data.pos_z,
    );
  } else if (event.data.type == WORKER_MSG_TYPE.ADD_REFERENCE) {
    GDS.addReference(
      event.data.parent_cell_name,
      event.data.cell_name,
      event.data.instance_name,
      event.data.origin_x,
      event.data.origin_y,
      event.data.rotation,
      event.data.x_reflection,
    );
  } else if (event.data.type == WORKER_MSG_TYPE.FINISHED_REFERENCES) {
    processCells(false);
  } else if (event.data.type == WORKER_MSG_TYPE.PROCESS_PROGRESS) {
    // console.log(event.data.progress);
    // processProgressBar.innerText = Math.round(event.data.progress) + "%";
    // processProgressBar.value = Math.round(event.data.progress);
  } else if (event.data.type == WORKER_MSG_TYPE.PROCESS_ENDED) {
    try {
      buildScene(null, true);
      updateGuiAfterLoad();
      translateGui();
      initWindowEvents();
      const pageUrl = new URL(location.href);
      pageUrl.searchParams.delete('model');
      if (pendingSourceUrl) pageUrl.searchParams.set('url', pendingSourceUrl);
      else pageUrl.searchParams.delete('url');
      history.replaceState(null, '', pageUrl);
      const sourceUrl = pendingSourceUrl ? normalizeGdsUrl(pendingSourceUrl) : null;
      loadedSourceUrl = sourceUrl;
      presetBrowser.setActive(sourceUrl, pendingFocusCells);
      setText(loadingStatus, 'blank');
      urlForm.hidden = true;
      urlToggle.setAttribute('aria-expanded', 'false');
      if (
        window.innerWidth <= 760 &&
        !document.documentElement.classList.contains('presets-collapsed')
      )
        toggleSidebar();
      if (pendingFocusCells.length) focusPresetCells(pendingFocusCells);
      pendingFocusCells = [];
    } catch (error) {
      setText(loadingStatus, 'displayError', { error: error.message });
      console.error(error);
    }
    setLoadingInProgress(false);
  } else if (event.data.type == WORKER_MSG_TYPE.PROCESS_ERROR) {
    setLoadingInProgress(false);
    setText(loadingStatus, 'processingError', { error: event.data.message });
  }
});

function init() {
  performanceSettings = {
    logarithmicDepthBuffer: false,
    antialias: true,
    'Show FPS': show_fps_stats,
  };

  experimentalSettings = {
    'Show section': experimental_show_section_on,
    'Section size': 0,
    'B&W depth colors': experimental_bw_mode_on,
    'Auto rotation': experimental_auto_rotation,
    'Rotation speed': experimental_auto_rotation_speed,
    'Separate layers': experimental_separate_layers_level,
  };

  viewSettings = {
    view_angle: '3D',
    shadows: PDK === 'TR-1um',
    layer_patterns: true,
    layer_spacing: 2,
    filler_cells: true,
    top_cell_geometry: true,
    layers: [],
    layers_visibility: [],
    instances: [],
  };

  init3D();

  setSectionViewVisibility(experimental_show_section_on);

  initGUI();
  translateGui();

  initProcessLayers();

  urlInput.value = GDS_URL;
  loadGDS(GDS_URL);
}

function initLayerVisibility() {
  for (const [layer_id, layer] of Object.entries(GDS.layers)) {
    const threejs_layer_id = getTHREEJSLayerFromGDSLayerId(layer_id);
    camera.layers.enable(threejs_layer_id);
    section_camera.layers.enable(threejs_layer_id);
    raycaster.layers.enable(threejs_layer_id);
  }
}

function loadGDS(inputURL, focusCells = []) {
  if (loadingInProgress) {
    setText(loadingStatus, 'Wait for the current file to finish loading');
    return;
  }
  let fileURL;
  try {
    fileURL = normalizeGdsUrl(inputURL);
  } catch (error) {
    setText(loadingStatus, 'detail', { error: error.message });
    return;
  }
  setLoadingInProgress(true);
  pendingSourceUrl = inputURL.trim();
  pendingFocusCells = [...focusCells];
  setText(loadingStatus, 'Loading');

  fetchWithProgressArrayBuffer(fileURL)
    .then((buffer) => {
      setText(loadingStatus, 'Processing file');

      const filename = /\.oas$/i.test(new URL(fileURL).pathname) ? 'remote.oas' : 'remote.gds';
      const data = new Uint8Array(buffer); // File content as binary data

      // Warning: 'data' is detached after calling this function
      processGDS(filename, data);
      initLayerVisibility();
    })
    .catch((err) => {
      setLoadingInProgress(false);
      setText(loadingStatus, 'fetchError', { error: err.message });
      console.error('GDS fetch failed:', err);
    });
}

/**
 * @param {File} file
 */
function loadLocalGDS(file) {
  if (loadingInProgress) {
    setText(loadingStatus, 'Wait for the current file to finish loading');
    return;
  }
  setLoadingInProgress(true);
  pendingSourceUrl = null;
  pendingFocusCells = [];
  const reader = new FileReader();
  setText(loadingStatus, 'Processing file');
  reader.onload = function (event) {
    const arrayBuffer = event.target.result;
    try {
      const file_extension = file.name.split('.').pop();
      processGDS('local.' + file_extension.toLowerCase(), new Uint8Array(arrayBuffer));
      initLayerVisibility();
    } catch (error) {
      setLoadingInProgress(false);
      setText(loadingStatus, 'Error processing file');
      console.error('Error processing file', error);
    }
  };
  reader.onerror = function (event) {
    setLoadingInProgress(false);
    setText(loadingStatus, 'Error processing file');
  };
  reader.readAsArrayBuffer(file);
}

function processGDS(filename, data) {
  resetLoadedDesign();
  loadedLayerSummary = filename.toLowerCase().endsWith('.gds')
    ? summarizeGdsLayers(data, PDK_LAYERS[PDK])
    : undefined;
  gdsProcessorWorker.postMessage(
    {
      type: WORKER_MSG_TYPE.PROCESS_GDS,
      filename: `/uploaded/${filename}`,
      opt_just_lines: false,
      data: data,
    },
    [data.buffer],
  );
}

function resetLoadedDesign() {
  loadedSourceUrl = null;
  // Isolation history belongs to the previous GDS, not the next one.
  isolation_history = [];
  cameraAnimmation.animate = false;
  cleanScene();
  if (selection_helper) {
    selection_helper.geometry.dispose();
    selection_helper.material.dispose();
    selection_helper = undefined;
  }
  for (const mesh of Object.values(GDS.meshes)) mesh.threejs_mesh.geometry.dispose();
  for (const texture of labelTextures.values()) texture.dispose();
  labelTextures = new Map();
  GDS.cells = {};
  GDS.top_cells = [];
  GDS.meshes = {};
  viewSettings.layers = [];
  viewSettings.layers_visibility = [];
  cameraAnimmation.initialized = false;
}

function processCells() {
  gdsProcessorWorker.postMessage({ type: WORKER_MSG_TYPE.PROCESS_CELLS, opt_just_lines: false });
}

function initProcessLayers() {
  const process_layers = PDK_LAYERS[PDK];
  for (const layer of Object.values(GDS.layers)) layer.threejs_material.dispose();
  GDS.layers = {};

  for (let i = 0; i < process_layers.length; i++) {
    let layer_data = process_layers[i];

    gdsProcessorWorker.postMessage({
      type: WORKER_MSG_TYPE.ADD_PROCESS_LAYER,
      layer_number: layer_data.layer_number,
      layer_datatype: layer_data.layer_datatype,
      name: layer_data.name,
      zmin: layer_data.zmin,
      zmax: layer_data.zmax,
    });

    // ToDo: Change layer_visual_order calculation (needed for Separate Layer feature) so it's not dependent on layer declaration order
    let layer_visual_order = i;
    GDS.addLayer(
      layer_data.layer_number,
      layer_data.layer_datatype,
      layer_data.name,
      layer_visual_order,
      layer_data.color,
    );
    if (PDK === 'TR-1um') {
      const layer = GDS.layers[GDS.makeLayerId(layer_data.layer_number, layer_data.layer_datatype)];
      layer.pattern = getLayerPattern(layer.name);
      applyLayerPattern(
        layer.threejs_material,
        layer.pattern,
        viewSettings.layer_patterns,
        layer_data.zmax,
        window.devicePixelRatio,
      );
    }
  }
}

async function fetchWithProgressArrayBuffer(url) {
  try {
    const response = await fetch(url);

    // Check if the response status is not OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
    }

    // Get the total content length from the headers
    const contentLength = response.headers.get('content-length');
    if (!contentLength) {
      console.warn('Unable to retrieve content-length. Progress tracking will not work.');
      setText(loadingStatus, 'Loading');
      return response.arrayBuffer(); // Fallback to standard ArrayBuffer
    }

    const total = parseInt(contentLength, 10);
    let loaded = 0;

    // Create an array to store the chunks
    const chunks = [];
    const reader = response.body.getReader();

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      // Track progress
      loaded += value.length;
      const progress = ((loaded / total) * 100).toFixed(0);
      // console.log(`Progress: ${progress}%`);
      setText(loadingStatus, 'progress', { percent: progress });

      // Store the chunk
      chunks.push(value);
    }

    // Concatenate all chunks into a single ArrayBuffer
    const fullArray = new Uint8Array(loaded);
    let position = 0;

    for (const chunk of chunks) {
      fullArray.set(chunk, position);
      position += chunk.length;
    }

    return fullArray.buffer; // Return as ArrayBuffer
  } catch (error) {
    console.error('Fetch error:', error);
    throw error; // Re-throw the error to allow the caller to handle it
  }
}

function init3D() {
  scene = new THREE.Scene();

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  mouse_moved = false;

  camera = new THREE.PerspectiveCamera(50, getRenderWidth() / window.innerHeight, 0.1, 10000);

  resetRenderer();

  let section_renderer_width = 400;
  let section_renderer_height = 400;
  section_view_size = section_renderer_width / 80;
  section_camera = new THREE.OrthographicCamera(
    -section_view_size,
    section_view_size,
    section_view_size,
    -section_view_size,
    0,
    1,
  );
  section_camera.position.x = 0;
  section_camera.position.y = 0;
  section_camera.position.z = 0;
  section_camera.up.x = 0;
  section_camera.up.y = 0;
  section_camera.up.z = 1;
  section_camera.lookAt(50, 0, 0);

  section_renderer = new THREE.WebGLRenderer({
    antialias: performanceSettings.antialias,
    logarithmicDepthBuffer: performanceSettings.logarithmicDepthBuffer,
  });
  section_renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  section_renderer.domElement.id = 'SECTION_RENDERER';
  section_renderer.setSize(section_renderer_width, section_renderer_height);
  crossSectionDiv.appendChild(section_renderer.domElement);

  scene.background = new THREE.Color(0x202020);

  // TR-1um uses broad ambient illumination and a gentler key light. Keep
  // every orientation readable while retaining enough contrast for sidewalls.
  // Existing PDKs retain the upstream lighting.
  const softLighting = PDK === 'TR-1um';
  keyLight = new THREE.DirectionalLight(0xffffff, softLighting ? 1.35 : 3.2);
  keyLight.position.set(0, 0, 50);
  keyLight.castShadow = PDK === 'TR-1um';
  keyLight.shadow.mapSize.set(2048, 2048);
  // Cover the depth slope across a shadow texel to avoid self-shadow stripes
  // on wide, coplanar interconnects in large layouts.
  keyLight.shadow.bias = -0.0005;
  keyLight.shadow.normalBias = 0.06;
  scene.add(keyLight, keyLight.target);
  if (softLighting) scene.add(new THREE.AmbientLight(0xffffff, 1.6));

  const fillLights = softLighting
    ? [
        [-50, 0, 0, 0.6],
        [50, 0, 0, 0.4],
        [0, 50, 0, 0.85],
        [0, -50, 0, 0.55],
        [0, 0, -50, 0.35],
      ]
    : [
        [-50, 0, 0, 1.6],
        [0, 50, 0, 2.4],
        [0, -50, 0, 1.6],
      ];
  for (const [x, y, z, intensity] of fillLights) {
    const light = new THREE.DirectionalLight(0xffffff, intensity);
    light.position.set(x, y, z);
    scene.add(light);
  }

  section_renderer_box = new THREE.Box3();
  section_renderer_box.setFromCenterAndSize(
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(2, section_view_size * 2, section_view_size * 2),
  );
  section_renderer_box_helper = new THREE.Box3Helper(section_renderer_box, 0xdddddd);
  section_renderer_box_helper.layers.disable(1);
  scene.add(section_renderer_box_helper);

  animate();
}

function translatedFolder(parent, key, params = {}) {
  const folder = parent.addFolder(t(key, params));
  folder.translation = { key, params };
  return folder;
}

function translateGui() {
  if (!guiRoot) return;
  guiRoot.title(t('Controls'));
  for (const folder of guiRoot.foldersRecursive()) {
    if (folder.translation) folder.title(t(folder.translation.key, folder.translation.params));
  }
  const names = {
    view_angle: 'View mode',
    layer_spacing: 'Layer spacing ×',
    layer_patterns: 'Layer patterns',
    shadows: 'Cast shadows',
    filler_cells: 'Filler cells',
    top_cell_geometry: 'Top cell geometry',
    logarithmicDepthBuffer: 'Logarithmic depth buffer',
    antialias: 'Antialiasing',
    '_ ALL _': 'ALL',
    '_ SORT_BY _': 'Sort By',
  };
  for (const controller of guiRoot.controllersRecursive()) {
    const object = controller.object;
    if (
      [viewSettings, performanceSettings, experimentalSettings, viewSettings.instances].includes(
        object,
      )
    ) {
      if (['isoleate_selection_or_back', 'zoom_selection'].includes(controller.property)) continue;
      controller.name(t(names[controller.property] ?? controller.property));
      if (controller.property === '_ SORT_BY _') {
        controller
          .options({ [t('Name')]: 'Name', [t('Count')]: 'Count' })
          .onChange((value) => buildInstancesNamesFolder(value));
      }
    } else if (object === viewSettings.layers_visibility && controller.property === 'ALL') {
      controller.name(t('ALL'));
    }
  }
  const back = isolation_history[isolation_history.length - 1];
  guiIsolateSelectionButton.name(
    selected_object
      ? t('isolate', { name: selected_object.instance_name })
      : back
        ? t('back', { name: back.instance_name })
        : t('Isolate selection / Back'),
  );
  guiZoomSelectionButton.name(
    selected_object ? t('zoom', { name: selected_object.instance_name }) : t('Zoom selection'),
  );
}

function initGUI() {
  const gui = new GUI({ title: t('Controls') });
  guiRoot = gui;
  if (window.innerWidth <= 1050) gui.close();

  let guiViewSettings = translatedFolder(gui, 'View Settings');
  guiViewSettings.open();

  guiLayersFolder = translatedFolder(gui, 'Layers');
  guiLayersFolder.open();

  guiInstancesFolder = translatedFolder(gui, 'Cells/Instances');
  guiInstancesFolder.close();

  let guiPerformanceSettings = translatedFolder(gui, 'Performance');
  guiPerformanceSettings.close();

  let guiExperimentalSettings = translatedFolder(gui, 'Experimental');
  guiExperimentalSettings.close();

  // View Settings
  guiViewSettings
    .add(viewSettings, 'view_angle', ['3D', '2D'])
    .name(t('View mode'))
    .onChange(setViewMode);
  if (PDK === 'TR-1um') {
    guiViewSettings
      .add(viewSettings, 'layer_spacing', 0.25, 3, 0.05)
      .name(t('Layer spacing ×'))
      .onChange(updateLayerSpacing);
    guiViewSettings
      .add(viewSettings, 'layer_patterns')
      .name(t('Layer patterns'))
      .onChange((enabled) => {
        for (const layer of Object.values(GDS.layers))
          setLayerPatternEnabled(layer.threejs_material, enabled);
      });
    guiViewSettings.add(viewSettings, 'shadows').name(t('Cast shadows')).onChange(updateShadows);
  }
  viewSettings['isoleate_selection_or_back'] = function () {
    isolateSelectionOrGoBack();
  };
  guiIsolateSelectionButton = guiViewSettings.add(viewSettings, 'isoleate_selection_or_back');
  guiIsolateSelectionButton.name(t('Isolate selection / Back'));
  guiIsolateSelectionButton.disable();

  viewSettings['zoom_selection'] = function () {
    zoomSelection();
  };
  guiZoomSelectionButton = guiViewSettings.add(viewSettings, 'zoom_selection');
  guiZoomSelectionButton.name(t('Zoom selection'));
  guiZoomSelectionButton.disable();

  guiViewSettings
    .add(viewSettings, 'filler_cells')
    .name(t('Filler cells'))
    .listen()
    .onChange(function (new_value) {
      setFillerCellsVisibility(new_value);
    });
  guiViewSettings
    .add(viewSettings, 'top_cell_geometry')
    .name(t('Top cell geometry'))
    .listen()
    .onChange(function (new_value) {
      setTopCellGeometryVisibility(new_value);
    });

  // List instances
  viewSettings.instances['_ ALL _'] = true;
  viewSettings.instances['_ SORT_BY _'] = 'Name';
  viewSettings.instances['list'] = [];
  guiInstancesFolder
    .add(viewSettings.instances, '_ ALL _')
    .name(t('ALL'))
    .onChange(function (new_value) {
      for (let cell_name in GDS.view_stats.instances) {
        viewSettings.instances.list[cell_name] = new_value;
        setCellVisibility(cell_name, new_value);
      }
    });
  guiInstancesFolder
    .add(viewSettings.instances, '_ SORT_BY _')
    .options({ [t('Name')]: 'Name', [t('Count')]: 'Count' })
    .name(t('Sort By'))
    .onChange(function (new_value) {
      buildInstancesNamesFolder(new_value);
    });

  // Performance Settings
  guiPerformanceSettings
    .add(performanceSettings, 'logarithmicDepthBuffer')
    .onChange(function (new_value) {
      resetRenderer(performanceSettings.antialias, performanceSettings.logarithmicDepthBuffer);
    });
  guiPerformanceSettings.add(performanceSettings, 'antialias').onChange(function (new_value) {
    resetRenderer(performanceSettings.antialias, performanceSettings.logarithmicDepthBuffer);
  });
  guiPerformanceSettings.add(performanceSettings, 'Show FPS').onChange(function (new_value) {
    show_fps_stats = new_value;
    fps_stats.domElement.hidden = !show_fps_stats;
  });

  // Experimental Settings
  guiExperimentalSettings.add(experimentalSettings, 'Show section').onChange(function (new_value) {
    setSectionViewVisibility(new_value);
  });
  experimentalSettings['Section size'] = section_view_size;
  guiExperimentalSettings
    .add(experimentalSettings, 'Section size', 3, 20, 0.1)
    .onChange(function (new_value) {
      section_view_size = new_value;
      updateSectionCamera();
    });
  guiExperimentalSettings
    .add(experimentalSettings, 'B&W depth colors')
    .onChange(function (new_value) {
      setBWModeOn(new_value);
    });
  guiExperimentalSettings.add(experimentalSettings, 'Auto rotation').onChange(function (new_value) {
    experimental_auto_rotation = new_value;
  });
  guiExperimentalSettings
    .add(experimentalSettings, 'Rotation speed', 0.0001, 0.05, 0.0005)
    .onChange(function (new_value) {
      experimental_auto_rotation_speed = new_value;
    });
  if (PDK !== 'TR-1um') {
    guiExperimentalSettings
      .add(experimentalSettings, 'Separate layers', 0, 10, 0.01)
      .onChange(function (new_value) {
        experimental_separate_layers_target = new_value;
      });
  }
}

function updateGuiAfterLoad() {
  for (const child of [...guiLayersFolder.children]) child.destroy();
  viewSettings.layers = [];
  viewSettings.layers_visibility = [];
  viewSettings.layers_visibility['ALL'] = true;

  const usedLayers =
    loadedLayerSummary?.visible ??
    new Set([
      ...Object.values(GDS.meshes).map((mesh) =>
        GDS.makeLayerId(mesh.layer_number, mesh.layer_datatype),
      ),
      ...Object.values(GDS.cells).flatMap((cell) =>
        cell.labels.map((label) => GDS.makeLayerId(label.layer_number, label.layer_datatype)),
      ),
    ]);
  const visibleLayers = Object.entries(GDS.layers).filter(([layer_id]) => usedLayers.has(layer_id));
  const layerControllers = [];

  // Layers visibility
  guiLayersFolder.add(viewSettings.layers_visibility, 'ALL').onChange(function (new_value) {
    for (const controller of layerControllers) controller.setValue(new_value);
  });

  for (const [layer_id, layer] of visibleLayers) {
    viewSettings.layers[layer.name] = layer;
    viewSettings.layers_visibility[layer.name] = true;
    let widget = guiLayersFolder
      .add(viewSettings.layers_visibility, layer.name)
      .onChange(function (new_value) {
        if (new_value) {
          camera.layers.enable(getTHREEJSLayerFromGDSLayer(viewSettings.layers[this._name]));
          section_camera.layers.enable(
            getTHREEJSLayerFromGDSLayer(viewSettings.layers[this._name]),
          );
          raycaster.layers.enable(getTHREEJSLayerFromGDSLayer(viewSettings.layers[this._name]));
        } else {
          camera.layers.disable(getTHREEJSLayerFromGDSLayer(viewSettings.layers[this._name]));
          section_camera.layers.disable(
            getTHREEJSLayerFromGDSLayer(viewSettings.layers[this._name]),
          );
          raycaster.layers.disable(getTHREEJSLayerFromGDSLayer(viewSettings.layers[this._name]));
        }
      });
    layerControllers.push(widget);
    widget.domElement.style =
      'border-left: 5px solid #' +
      layer.threejs_material.color.getHexString(THREE.LinearSRGBColorSpace) +
      ';';
    if (layer.pattern) {
      const swatch = document.createElement('span');
      swatch.className = 'layer-pattern-swatch';
      swatch.title = `${layer.name}: ${layer.pattern.label}`;
      swatch.setAttribute('aria-hidden', 'true');
      swatch.style.backgroundColor =
        '#' + layer.threejs_material.color.getHexString(THREE.LinearSRGBColorSpace);
      swatch.style.backgroundImage = layer.pattern.css;
      if (layer.pattern.size) swatch.style.backgroundSize = layer.pattern.size;
      widget.$name.prepend(swatch);
    }
  }

  // Expose only translucent guide layers actually present in this design.
  // Keep conductors opaque by default to preserve clear interconnect tracing.
  const guides = visibleLayers.filter(([, layer]) => layer.default_opacity < 1);
  if (guides.length) {
    const opacityFolder = translatedFolder(guiLayersFolder, 'Guide opacity');
    opacityFolder.close();
    for (const [, layer] of guides) {
      const material = layer.threejs_material;
      opacityFolder
        .add(material, 'opacity', 0, 1, 0.01)
        .name(layer.name)
        .onChange((opacity) => {
          material.transparent = opacity < 1;
          material.depthWrite = opacity >= 1;
          material.needsUpdate = true;
        });
    }
  }

  // buildInstancesNamesFolder(viewSettings.instances['_ SORT_BY _']);
}

function buildInstancesNamesFolder(sorted_by, rebuild = false) {
  if (guiInstancesNamesFolder) {
    guiInstancesNamesFolder.destroy();
  }

  let sorted_cell_names = Object.keys(GDS.view_stats.instances);

  guiInstancesNamesFolder = translatedFolder(guiInstancesFolder, 'cellCounts', {
    types: sorted_cell_names.length,
    count: GDS.view_stats.total_instances,
  });

  if (sorted_by == 'Name') {
    sorted_cell_names.sort();
  } else {
    sorted_cell_names.sort(function (a, b) {
      return GDS.view_stats.instances[b] - GDS.view_stats.instances[a];
    });
  }

  for (let i in sorted_cell_names) {
    const cell_name = sorted_cell_names[i];
    if (rebuild) viewSettings.instances.list[cell_name] = true;
    guiInstancesNamesFolder
      .add(viewSettings.instances.list, cell_name)
      .name(cell_name + ' (x' + GDS.view_stats.instances[cell_name] + ')')
      .listen()
      .onChange(function (new_value) {
        setCellVisibility(cell_name, new_value);
      });
  }
}

function animate() {
  requestAnimationFrame(animate);

  // Elapsed time for framerate independent animation
  let elapsed_time_ms = performance.now() - animation_last_time;
  animation_last_time = performance.now();

  // Camera animation
  if (cameraAnimmation.animate) {
    let lerp = 0.2;
    let test_stop_distance = 0.25;

    if (camera.position.distanceTo(cameraAnimmation.positionTarget) < test_stop_distance) {
      cameraAnimmation.animate = false;
      lerp = 1.0;
    }
    camera.position.lerp(cameraAnimmation.positionTarget, lerp);
    camera.up.lerp(cameraAnimmation.upTarget, lerp);

    let target = new THREE.Vector3();
    target.copy(cameraControls.target);
    target.lerp(cameraAnimmation.lookAtTarget, lerp);

    camera.lookAt(target.x, target.y, target.z);
    camera.updateProjectionMatrix();

    if (cameraControls) cameraControls.dispose();
    createCameraControls(target);
  }

  // Auto rotation
  if (experimental_auto_rotation && scene_root_group && viewSettings.view_angle === '3D') {
    let scene_center = new THREE.Vector3();
    GDS.root_node.scene_bounding_box.getCenter(scene_center);
    let mov_x = scene_center.x;
    let mov_y = scene_center.y;
    scene_root_group.translateX(mov_x);
    scene_root_group.translateY(mov_y);
    scene_root_group.rotateZ(experimental_auto_rotation_speed * (elapsed_time_ms / 60));
    scene_root_group.translateX(-mov_x);
    scene_root_group.translateY(-mov_y);
  }

  // Separate Layers
  if (experimental_separate_layers_level != experimental_separate_layers_target) {
    const ease_ratio = 0.2;
    experimental_separate_layers_level =
      experimental_separate_layers_level * (1 - ease_ratio) +
      ease_ratio * experimental_separate_layers_target;
    if (Math.abs(experimental_separate_layers_level - experimental_separate_layers_target) < 0.01) {
      experimental_separate_layers_level = experimental_separate_layers_target;
    }

    for (let mesh_name in GDS.meshes) {
      const mesh = GDS.meshes[mesh_name];
      const layer_order =
        GDS.layers[GDS.makeLayerId(mesh.layer_number, mesh.layer_datatype)].visual_order;
      mesh.threejs_instanced_mesh.position.z = experimental_separate_layers_level * layer_order;
    }
  }

  // B&W mode
  if (!experimental_bw_mode_on) {
    scene.background = new THREE.Color(0x606060);
  } else {
    scene.background = new THREE.Color(0);
  }

  // Hidden layers must not cast invisible shadows.
  keyLight.shadow.camera.layers.mask = camera.layers.mask;

  // Main render
  renderer.render(scene, camera);

  // Section view
  if (experimental_show_section_on) {
    scene.background = new THREE.Color(0);
    section_renderer.render(scene, section_camera);
  }

  // Debug FPS
  if (show_fps_stats) fps_stats.update();
}

function setCellVisibility(cell_name, visible) {
  const meshes_names = GDS.cells[cell_name].meshes_names;

  for (let i = 0; i < meshes_names.length; i++) {
    if (GDS.meshes[meshes_names[i]].threejs_instanced_mesh != null)
      GDS.meshes[meshes_names[i]].threejs_instanced_mesh.visible = visible;
  }
}

function setSectionViewVisibility(sectionViewEnabled) {
  experimental_show_section_on = sectionViewEnabled;
  section_renderer.domElement.parentElement.hidden = !sectionViewEnabled;
  section_renderer_box_helper.visible = sectionViewEnabled;
}

function isFillerCell(name) {
  // IHP sg13g2 / sg13cmos5l
  if (
    (name.startsWith('sg13g2_') || name.startsWith('sg13cmos5l_')) &&
    (name.includes('_fill_') || name.includes('_decap_'))
  ) {
    return true;
  }

  // Skywater 130 and GF180MCU:
  return (
    name.indexOf('__fill') != -1 || name.indexOf('__decap') != -1 || name.indexOf('__tap') != -1
  );
}

function setFillerCellsVisibility(visible) {
  const instances_changed = [];

  viewSettings.filler_cells = visible;

  // ToDo: Maintaing a list of cells used in current view. Use GDS.view_stats?
  for (let cell_name in GDS.cells) {
    if (isFillerCell(cell_name)) {
      setCellVisibility(cell_name, visible);

      viewSettings.instances.list[cell_name] = visible; //instances_changed[instance_name];
    }
  }
}

function setTopCellGeometryVisibility(visible) {
  viewSettings.top_cell_geometry = visible;

  const cell = GDS.cells[GDS.root_node.cell_name];

  for (let i = 0; i < cell.meshes_names.length; i++) {
    const mesh = GDS.meshes[cell.meshes_names[i]];
    const layer_name = GDS.layers[GDS.makeLayerId(mesh.layer_number, mesh.layer_datatype)].name;
    if (layer_name != 'substrate') mesh.threejs_instanced_mesh.visible = visible;
  }

  // for (var i = 0; i < GDS.root_node.children.length; i++) {
  //   const node = GDS.root_node.children[i];
  //   if (node.mesh != undefined) {
  //     if (parser.instancedMeshes[node.mesh].material.name != 'substrate')
  //       parser.instancedMeshes[node.mesh].visible = visile;
  //   }
  // }
}

function setBWModeOn(bw_mode_on) {
  experimental_bw_mode_on = bw_mode_on;

  let index = 0;
  for (let layer_id in GDS.layers) {
    const material = GDS.layers[layer_id].threejs_material;
    if (bw_mode_on) {
      experimental_bw_mode_prev_state.push({
        metalness: material.metalness,
        roughness: material.roughness,
        color: material.color.clone(),
      });
      material.metalness = 0;
      material.roughness = 1;
      material.color.r = material.color.g = material.color.b = 0.06 + 0.04 * index;
    } else {
      material.metalness = experimental_bw_mode_prev_state[index].metalness;
      material.roughness = experimental_bw_mode_prev_state[index].roughness;
      material.color = experimental_bw_mode_prev_state[index].color.clone();
    }

    index++;
  }
}

function clearSelection() {
  focusedPresetNodes = [];
  turnOffHighlight();
  informationDiv.innerHTML = '';
  if (isolation_history && isolation_history.length > 0) {
    const back_node = isolation_history[isolation_history.length - 1];
    const item = document.createElement('div');
    setText(item, 'back', { name: `${back_node.instance_name} (${back_node.cell_name})` });
    item.className = 'selection_link';
    item.onmousedown = function () {
      isolation_history.pop();
      buildScene(back_node);
    };
    informationDiv.appendChild(item);

    guiIsolateSelectionButton.enable();
    guiIsolateSelectionButton.name(t('back', { name: back_node.instance_name }));
  } else {
    guiIsolateSelectionButton.name(t('Isolate selection / Back'));
    guiIsolateSelectionButton.disable();
  }
  guiZoomSelectionButton.name(t('Zoom selection'));
  guiZoomSelectionButton.disable();

  selected_object = undefined;
  if (selection_helper) {
    // cleanScene runs both when an import starts and when its meshes arrive.
    // The old root may already be gone on the second call.
    selection_helper.removeFromParent();
  }
}

function selectNode(graph_node) {
  // Display selection info:
  const heading = document.createElement('div');
  setText(heading, 'SELECTION:');
  informationDiv.appendChild(heading);
  let tree_list = [];
  let current_node = graph_node;
  while (current_node != undefined) {
    tree_list.push(current_node);
    current_node = current_node.parent;
  }
  let padding = 0;
  for (let j = tree_list.length - 1; j >= 0; j--) {
    const item = document.createElement('div');
    const tree_node = tree_list[j];
    // const class_text = tree_node.instance_name ? '( ' + tree_node.cell_name + ' )' : '';
    // item.innerHTML = "<a href='#'>" + tree_node.instance_name + ' </a>' + class_text;

    item.textContent = tree_node.instance_name
      ? `${tree_node.instance_name} (${tree_node.cell_name})`
      : tree_node.cell_name;

    item.className = 'selection_link';
    item.style.paddingLeft = padding + 'px';
    item.onmousedown = function () {
      isolation_history.push(GDS.root_node);
      buildScene(tree_node);
    };
    informationDiv.appendChild(item);
    padding += 5;
  }
  // informationDiv.innerHTML = infoHTML;

  selected_object = graph_node;
  highlightObject(graph_node);

  if (selection_helper == undefined) {
    selection_helper = new THREE.Box3Helper(selected_object.scene_bounding_box);
  } else {
    selection_helper.box = selected_object.scene_bounding_box;
  }

  scene_root_group.add(selection_helper);

  guiIsolateSelectionButton.enable();
  guiIsolateSelectionButton.name(t('isolate', { name: graph_node.instance_name }));

  guiZoomSelectionButton.enable();
  guiZoomSelectionButton.name(t('zoom', { name: graph_node.instance_name }));
}

function focusPresetCells(cellNames) {
  // Restore the whole MPW if the user previously isolated a cell.
  if (GDS.root_node.cell_name !== GDS.primaryTopCell()) {
    isolation_history = [];
    buildScene(null, false);
  }
  clearSelection();
  if (!cellNames.length) {
    setText(loadingStatus, 'blank');
    zoomNode(GDS.root_node);
    return;
  }
  const { nodes: matchedNodes, missing } = resolvePresetNodes(GDS.root_node, cellNames);
  const { nodes, emptyCells } = resolveVisibleNodes(matchedNodes);
  if (missing.length) {
    setText(loadingStatus, 'Circuit not found', { cells: missing.join(', ') });
    return;
  }
  if (!nodes.length) {
    setText(loadingStatus, 'No circuit geometry', { cells: cellNames.join(', ') });
    return;
  }
  if (emptyCells.length) {
    setText(loadingStatus, 'Empty circuit fallback', { cells: emptyCells.join(', ') });
  } else setText(loadingStatus, 'blank');
  if (nodes.length === 1) {
    selectNode(nodes[0]);
    zoomNode(nodes[0]);
    return;
  }
  // A logical circuit can occupy several sibling cells. Fit their combined
  // world-space bounds without including unrelated circuits in their parent.
  focusedPresetNodes = nodes;
  const bounds = new THREE.Box3();
  for (const node of nodes) {
    bounds.union(node.scene_bounding_box);
    highlightObject(node);
    const item = document.createElement('div');
    item.className = 'selection_link';
    item.textContent = node.cell_name;
    item.onmousedown = () => {
      clearSelection();
      selectNode(node);
      zoomNode(node);
    };
    informationDiv.append(item);
  }
  if (!selection_helper) selection_helper = new THREE.Box3Helper(bounds);
  else selection_helper.box = bounds;
  scene_root_group.add(selection_helper);
  zoomNode({ scene_bounding_box: bounds });
}

function selectParent() {
  if (selected_object != null) {
    if (selected_object == GDS.root_node) return;
    const parent = selected_object.parent;
    if (parent != null) {
      clearSelection();
      selectNode(parent);
      zoomSelection();
    }
  }
}

function selectFirstChild() {
  if (selected_object != null) {
    if (selected_object.children.length > 0) {
      const first_child = selected_object.children[0];
      clearSelection();
      selectNode(first_child);
      zoomSelection();
    }
  }
}

function selectNextSibling() {
  // Select next sibling
  if (selected_object != null) {
    const parent = selected_object.parent;
    if (parent != null) {
      // selectNode(parent);
      for (let i = 0; i < parent.children.length; i++) {
        if (parent.children[i] == selected_object) {
          if (i < parent.children.length - 1) {
            clearSelection();
            selectNode(parent.children[i + 1]);
            // zoomSelection();
            moveCameraToNode(selected_object);
          }
          break;
        }
      }
    }
  }
}

function selectPrevSibling() {
  // Select prev sibling
  if (selected_object != null) {
    const parent = selected_object.parent;
    if (parent != null) {
      // selectNode(parent);
      for (let i = 0; i < parent.children.length; i++) {
        if (parent.children[i] == selected_object) {
          if (i > 0) {
            clearSelection();
            selectNode(parent.children[i - 1]);
            // zoomSelection();
            moveCameraToNode(selected_object);
          }
          break;
        }
      }
    }
  }
}

function isolateSelectionOrGoBack() {
  if (selected_object) {
    if (selected_object != GDS.root_node) {
      isolation_history.push(GDS.root_node);
      buildScene(selected_object);
    }
  } else {
    if (isolation_history.length > 0) {
      buildScene(isolation_history.pop());
    }
  }
}

function setCameraInitialPosition(node) {
  if (node) {
    const bbox = node.scene_bounding_box;
    let center = new THREE.Vector3();

    bbox.getCenter(center);

    let positionTarget = new THREE.Vector3();
    getCameraPositionForFitInView(bbox, positionTarget);
    positionTarget.z = positionTarget.z * 5;
    camera.position.copy(positionTarget);
    camera.lookAt(center);
    camera.up.x = 0;
    camera.up.y = 1;
    camera.up.z = 0;
    // camera.updateProjectionMatrix();
  }
}

function zoomNode(node) {
  // Empty GDS hierarchies have infinite Box3 limits; never send them to the camera.
  if (node && hasVisibleBounds(node)) {
    const bbox = node.scene_bounding_box;
    let center = new THREE.Vector3();

    bbox.getCenter(center);

    // setCameraPositionForFitInView(bbox, camera);
    getCameraPositionForFitInView(bbox, cameraAnimmation.positionTarget);
    if (camera.isOrthographicCamera) {
      cameraAnimmation.animate = false;
      camera.position.copy(cameraAnimmation.positionTarget);
      camera.up.set(0, 1, 0);
      camera.lookAt(center);
      cameraControls.dispose();
      createCameraControls(center);
      return;
    }
    cameraAnimmation.upTarget.x = 0;
    cameraAnimmation.upTarget.y = 1;
    cameraAnimmation.upTarget.z = 0;
    cameraAnimmation.lookAtTarget.x = center.x;
    cameraAnimmation.lookAtTarget.y = center.y;
    cameraAnimmation.lookAtTarget.z = center.z;
    cameraAnimmation.animate = true;

    // camera.up.x = 0;
    // camera.up.y = 1;
    // camera.up.z = 0;
    // camera.lookAt(center.x, center.y, 0);
    // camera.updateProjectionMatrix();

    // if (cameraControls) cameraControls.dispose();
    // createCameraControls(new THREE.Vector3(center.x, center.y, 0))
  }
}

function moveCameraToNode(node) {
  if (node) {
    const bbox = node.scene_bounding_box;
    let center = new THREE.Vector3();

    bbox.getCenter(center);

    cameraAnimmation.lookAtTarget.x = center.x; //camera.lookAt.x - (camera.position.x - center.x);
    cameraAnimmation.lookAtTarget.y = center.y; // camera.lookAt.y - (camera.position.y - center.y);
    cameraAnimmation.lookAtTarget.z = 0;

    cameraAnimmation.positionTarget.x = center.x;
    cameraAnimmation.positionTarget.y = center.y;
    cameraAnimmation.positionTarget.z = camera.position.z;

    cameraAnimmation.animate = true;
  }
}

function createCameraControls(target) {
  cameraControls = new OrbitControls.OrbitControls(camera, renderer.domElement);
  cameraControls.enableRotate = viewSettings.view_angle === '3D';
  cameraControls.mouseButtons.MIDDLE = THREE.MOUSE.PAN;
  if (viewSettings.view_angle === '2D') {
    cameraControls.mouseButtons.LEFT = THREE.MOUSE.PAN;
    cameraControls.touches.ONE = THREE.TOUCH.PAN;
    cameraControls.touches.TWO = THREE.TOUCH.DOLLY_PAN;
  }
  cameraControls.target.copy(target);
  cameraControls.update();
  // cameraControls.enableDamping = true;
  // cameraControls.dampingFactor = 0.2;
}

function zoomSelection() {
  if (selected_object) {
    zoomNode(selected_object);
  }
}

function highlightObject(graph_node) {
  highlighted_objects.push(graph_node);

  const cell = GDS.cells[graph_node.cell_name];

  for (let i = 0; i < cell.meshes_names.length; i++) {
    const color = new THREE.Color();
    const instancedMesh = GDS.meshes[cell.meshes_names[i]].threejs_instanced_mesh;

    instancedMesh.getColorAt(graph_node.instanced_mesh_idx, color);
    highlighted_prev_colors.push(color.clone());

    instancedMesh.setColorAt(graph_node.instanced_mesh_idx, highlight_color);
    instancedMesh.instanceColor.needsUpdate = true;
  }
}

function turnOffHighlight() {
  let colorIndex = 0;
  for (let i = 0; i < highlighted_objects.length; i++) {
    const graph_node = highlighted_objects[i];

    const cell = GDS.cells[graph_node.cell_name];
    for (let i = 0; i < cell.meshes_names.length; i++) {
      const instancedMesh = GDS.meshes[cell.meshes_names[i]].threejs_instanced_mesh;
      instancedMesh.setColorAt(
        graph_node.instanced_mesh_idx,
        highlighted_prev_colors[colorIndex++].clone(),
      );
      instancedMesh.instanceColor.needsUpdate = true;
    }
  }
  highlighted_objects = [];
  highlighted_prev_colors = [];
}

function getCameraPositionForFitInView(bounding_box, new_position) {
  const center = bounding_box.getCenter(new THREE.Vector3());
  // Both modes start in the original Top orientation (+Y up, looking down Z).
  const direction = new THREE.Vector3(0, 0, 1);
  if (camera.isOrthographicCamera) {
    const size = bounding_box.getSize(new THREE.Vector3());
    const aspect = getRenderWidth() / window.innerHeight;
    const halfHeight = Math.max(1, size.y, size.x / aspect) * 0.575;
    Object.assign(camera, {
      left: -halfHeight * aspect,
      right: halfHeight * aspect,
      top: halfHeight,
      bottom: -halfHeight,
      zoom: 1,
      far: Math.max(10000, size.z * 4 + 100),
    });
    new_position.set(center.x, center.y, bounding_box.max.z + Math.max(100, size.z));
    camera.updateProjectionMatrix();
    return;
  }
  const right = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), direction).normalize();
  const up = new THREE.Vector3().crossVectors(direction, right);
  const tanY = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
  const tanX = tanY * camera.aspect;
  let distance = 1;
  // Fit every corner in the chosen camera basis, including the stack height.
  for (const x of [bounding_box.min.x, bounding_box.max.x]) {
    for (const y of [bounding_box.min.y, bounding_box.max.y]) {
      for (const z of [bounding_box.min.z, bounding_box.max.z]) {
        const corner = new THREE.Vector3(x, y, z).sub(center);
        distance = Math.max(
          distance,
          corner.dot(direction) +
            Math.max(Math.abs(corner.dot(right)) / tanX, Math.abs(corner.dot(up)) / tanY),
        );
      }
    }
  }
  new_position.copy(center).addScaledVector(direction, distance * 1.15);
  camera.far = Math.max(10000, distance * 4);
  camera.updateProjectionMatrix();
}
function setCameraPositionForFitInView(bounding_box, target_camera) {
  getCameraPositionForFitInView(bounding_box, target_camera.position);
}

function getSidebarWidth() {
  return window.innerWidth > 760 &&
    !document.documentElement.classList.contains('presets-collapsed')
    ? document.getElementById('loadPanel').getBoundingClientRect().width
    : 0;
}
function getRenderWidth() {
  return Math.max(1, window.innerWidth - getSidebarWidth() - (window.innerWidth > 1050 ? 310 : 0));
}
function setPointerFromEvent(pointer, event) {
  const rect = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
}

function updateShadows() {
  renderer.shadowMap.enabled = viewSettings.shadows && viewSettings.view_angle === '3D';
  for (const layer of Object.values(GDS.layers)) layer.threejs_material.needsUpdate = true;
}

function setViewMode() {
  cameraAnimmation.animate = false;
  const previousCamera = camera;
  const target = cameraControls.target.clone();
  cameraControls.dispose();
  const aspect = getRenderWidth() / window.innerHeight;
  camera =
    viewSettings.view_angle === '2D'
      ? new THREE.OrthographicCamera(-100 * aspect, 100 * aspect, 100, -100, 0.1, 10000)
      : new THREE.PerspectiveCamera(50, aspect, 0.1, 10000);
  camera.layers.mask = previousCamera.layers.mask;
  camera.position.set(target.x, target.y, target.z + 100);
  camera.lookAt(target);
  createCameraControls(target);
  updateShadows();
  zoomNode(GDS.root_node);
}

function resetRenderer() {
  if (renderer != undefined) {
    document.body.removeChild(document.getElementById('MAIN_RENDERER'));
    renderer.dispose();
  }

  renderer = new THREE.WebGLRenderer({
    antialias: performanceSettings.antialias,
    logarithmicDepthBuffer: performanceSettings.logarithmicDepthBuffer,
  });
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  renderer.shadowMap.enabled = viewSettings.shadows && viewSettings.view_angle === '3D';
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.id = 'MAIN_RENDERER';
  renderer.setSize(getRenderWidth(), window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  document.body.appendChild(renderer.domElement);

  let target = new THREE.Vector3();
  if (cameraControls) {
    target = cameraControls.target.clone();
    cameraControls.dispose();
  }
  createCameraControls(target);
}

window.onresize = function () {
  if (window.innerWidth <= 1050) guiRoot?.close();
  if (!camera || !renderer) return;
  const aspect = getRenderWidth() / window.innerHeight;
  if (camera.isOrthographicCamera) {
    camera.left = -camera.top * aspect;
    camera.right = camera.top * aspect;
  } else camera.aspect = aspect;
  camera.updateProjectionMatrix();
  renderer.setSize(getRenderWidth(), window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  for (const layer of Object.values(GDS.layers)) {
    setLayerPatternPixelRatio(layer.threejs_material, window.devicePixelRatio);
  }
};

function initWindowEvents() {
  window.onkeyup = function (event) {
    if (event.target.closest('input, select, textarea, button, a')) return;
    switch (event.key) {
      case '1':
        setFillerCellsVisibility(!viewSettings.filler_cells);
        break;
      case '2':
        setTopCellGeometryVisibility(!viewSettings.top_cell_geometry);
        break;
      case '3':
        isolateSelectionOrGoBack();
        break;
      case '4':
        zoomSelection();
        break;
      case 'Escape':
        clearSelection();
        break;
      case 'ArrowUp':
        selectParent();
        break;
      case 'ArrowDown':
        selectFirstChild();
        break;
      case 'ArrowRight':
        selectNextSibling();
        break;
      case 'ArrowLeft':
        selectPrevSibling();
        break;
    }
  };

  window.onmousemove = function (event) {
    mouse_moved = true;

    if (event.target != renderer.domElement) return;

    if (experimental_show_section_on) {
      let mouse = new THREE.Vector2();

      setPointerFromEvent(mouse, event);
      const sectionRaycaster = new THREE.Raycaster();
      sectionRaycaster.setFromCamera(mouse, camera);
      let ray = sectionRaycaster.ray;
      let plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -2);
      let point = new THREE.Vector3();
      ray.intersectPlane(plane, point);

      // section_camera.position.x = point.x;
      section_camera.position.x = point.x;
      section_camera.position.y = point.y;
      section_camera.near = -1;
      section_camera.far = 1;
      section_camera.updateProjectionMatrix();

      let camera_width = section_camera.right - section_camera.left;
      let camera_height = section_camera.top - section_camera.bottom;
      section_renderer_box.set(
        new THREE.Vector3(
          section_camera.position.x + section_camera.near,
          section_camera.position.y - camera_width / 2,
          section_camera.position.z - camera_height / 2,
        ),
        new THREE.Vector3(
          section_camera.position.x + section_camera.far,
          section_camera.position.y + camera_width / 2,
          section_camera.position.z + camera_height / 2,
        ),
      );
    }
  };

  window.onmousedown = function (event) {
    if (event.target != renderer.domElement) return;
    mouse_down_time = performance.now();
    mouse_moved = false;
  };

  window.onmouseup = function (event) {
    if (event.target != renderer.domElement) return;

    const elapsed_time_ms = performance.now() - mouse_down_time;
    if (event.button != 0 || (elapsed_time_ms > 100 && mouse_moved)) return;

    clearSelection();

    setPointerFromEvent(mouse, event);
    raycaster.setFromCamera(mouse, camera);

    const intersections = raycaster.intersectObject(scene, true);

    // console.log("Raycast intersections:");
    if (intersections.length > 0) {
      for (var i = 0; i < intersections.length; i++) {
        // console.log(intersections[i].object);

        if (intersections[i].object.isInstancedMesh && intersections[i].object.visible) {
          let mesh = intersections[i].object;
          let instanceId = intersections[i].instanceId;

          let clicked_node = GDS.meshes[mesh.name].instances[instanceId].node;

          selectNode(clicked_node);

          // Just first intersection
          break;
        }
      }
    }
  };
}

function getTHREEJSLayerFromGDSLayer(gds_layer) {
  return getTHREEJSLayerFromGDSLayerId(
    GDS.makeLayerId(gds_layer.layer_number, gds_layer.layer_datatype),
  );
}

function getTHREEJSLayerFromGDSLayerId(gds_layer_id) {
  return Object.keys(GDS.layers).indexOf(gds_layer_id) + 1;
}

function updateSectionCamera() {
  section_camera.left = -section_view_size;
  section_camera.right = section_view_size;
  section_camera.top = section_view_size;
  section_camera.bottom = -section_view_size;
}

function cleanScene() {
  clearSelection();

  for (const mesh_name in GDS.meshes) {
    let mesh = GDS.meshes[mesh_name];
    if (mesh.instances.length == 0) continue;

    if (mesh.threejs_lines != null) mesh.threejs_lines.geometry.dispose();

    if (mesh.threejs_instanced_mesh != null) mesh.threejs_instanced_mesh.dispose();

    mesh.instances = [];
  }

  if (scene_root_group != undefined) {
    scene_root_group.traverse((object) => {
      if (object.isSprite) object.material.dispose();
    });
    scene.remove(scene_root_group);
    scene_root_group = undefined;
  }

  GDS.root_node = null;
  GDS.nodes = [];

  // Stats
  GDS.view_stats = {};
  GDS.view_stats.instances = {};
  GDS.view_stats.total_instances = 0;

  instanceClassTitleDiv.innerHTML = '';
}

function spacingTransform(name) {
  return PDK === 'TR-1um'
    ? getLayerSpacingTransform(name, viewSettings.layer_spacing)
    : { scale: 1, offset: 0 };
}

function meshBoundsAtNode(mesh, matrix) {
  const bounds = mesh.threejs_mesh.geometry.boundingBox.clone();
  const layer = GDS.layers[GDS.makeLayerId(mesh.layer_number, mesh.layer_datatype)];
  const { scale, offset } = spacingTransform(layer.name);
  bounds.min.z = bounds.min.z * scale + offset;
  bounds.max.z = bounds.max.z * scale + offset;
  return bounds.applyMatrix4(matrix);
}

function updateLayerSpacing() {
  if (!GDS.root_node || loadingInProgress) return;
  for (const mesh of Object.values(GDS.meshes)) {
    if (!mesh.instances.length) continue;
    const layer = GDS.layers[GDS.makeLayerId(mesh.layer_number, mesh.layer_datatype)];
    const { scale, offset } = spacingTransform(layer.name);
    mesh.threejs_instanced_mesh.scale.z = scale;
    mesh.threejs_instanced_mesh.position.z = offset;
  }
  scene_root_group.traverse((object) => {
    if (!object.isSprite) return;
    const { layerName, baseZ } = object.userData;
    const { scale, offset } = spacingTransform(layerName);
    object.position.z = baseZ * scale + offset;
  });
  // Keep selection boxes, zoom-to-cell and shadow coverage in sync without
  // rebuilding instances or changing the current camera and visibility.
  function refreshBounds(node) {
    node.scene_bounding_box.makeEmpty();
    for (const name of GDS.cells[node.cell_name].meshes_names) {
      node.scene_bounding_box.union(meshBoundsAtNode(GDS.meshes[name], node.world_matrix));
    }
    for (const child of node.children) {
      refreshBounds(child);
      node.scene_bounding_box.union(child.scene_bounding_box);
    }
  }
  refreshBounds(GDS.root_node);
  if (focusedPresetNodes.length && selection_helper) {
    selection_helper.box.makeEmpty();
    for (const node of focusedPresetNodes) selection_helper.box.union(node.scene_bounding_box);
  }
  updateSceneLighting();
}

function buildSceneDoNodeCalcs(node, parent_matrix) {
  const node_matrix = node.matrix.clone();
  node_matrix.premultiply(parent_matrix);
  node.world_matrix = node_matrix;

  const cell = GDS.cells[node.cell_name];
  // An isolated node can be reused; keep only children of the current scene.
  node.children = [];

  // Stats
  if (GDS.view_stats.instances[node.cell_name] == undefined) {
    GDS.view_stats.instances[node.cell_name] = 1;
  } else {
    GDS.view_stats.instances[node.cell_name]++;
  }
  GDS.view_stats.total_instances++;

  for (let j = 0; j < cell.meshes_names.length; j++) {
    let mesh_bounding_box;
    const mesh_name = cell.meshes_names[j];

    let instance_data = {
      name: mesh_name,
      matrix: node_matrix,
      node: node,
    };

    GDS.meshes[mesh_name].instances.push(instance_data);

    mesh_bounding_box = meshBoundsAtNode(GDS.meshes[mesh_name], node_matrix);

    if (node.scene_bounding_box == null) {
      node.scene_bounding_box = mesh_bounding_box.clone();
    } else {
      node.scene_bounding_box.union(mesh_bounding_box);
    }
  }

  for (let i = 0; i < GDS.cells[node.cell_name].references.length; i++) {
    const child_ref = GDS.cells[node.cell_name].references[i];
    const child_node = GDS.addNode(
      child_ref.cell_name,
      child_ref.instance_name,
      child_ref.matrix,
      node,
    );

    // const matrix = child_node.matrix.clone();
    // matrix.premultiply(node_matrix);

    // if (child_node.children.length > 0) {
    buildSceneDoNodeCalcs(child_node, node_matrix);
    if (node.scene_bounding_box == null) {
      node.scene_bounding_box = child_node.scene_bounding_box.clone();
    } else {
      node.scene_bounding_box.union(child_node.scene_bounding_box);
    }
    // }
    node.children.push(child_node);
  }

  if (node.scene_bounding_box == null) {
    node.scene_bounding_box = new THREE.Box3();
  }

  // node.scene_bounding_box = node_bounding_box;
}

function buildMeshesScene(top_node, main_matrix) {
  let main_bounding_box = undefined;

  for (const mesh_name in GDS.meshes) {
    let mesh = GDS.meshes[mesh_name];
    if (mesh.instances.length == 0) continue;

    let reference_mesh = mesh.threejs_mesh;

    // Create Instanced Mesh
    let instanced_mesh = new THREE.InstancedMesh(
      reference_mesh.geometry,
      reference_mesh.material,
      mesh.instances.length,
    );

    instanced_mesh.layers.set(
      getTHREEJSLayerFromGDSLayerId(GDS.makeLayerId(mesh.layer_number, mesh.layer_datatype)),
    );

    instanced_mesh.name = reference_mesh.name;
    const layer = GDS.layers[GDS.makeLayerId(mesh.layer_number, mesh.layer_datatype)];
    const { scale, offset } = spacingTransform(layer.name);
    instanced_mesh.scale.z = scale;
    instanced_mesh.position.z = offset;
    instanced_mesh.castShadow = !['WN', 'PO', 'PIN', 'TXM1', 'TXM2'].includes(layer.name);
    // A translucent guide volume has two surfaces; shadowing both creates
    // doubled dark silhouettes that obscure the structures being explained.
    instanced_mesh.receiveShadow = layer.default_opacity >= 1;

    let color = new THREE.Color(1, 1, 1);
    for (let j = 0; j < mesh.instances.length; j++) {
      const matrix = mesh.instances[j].matrix;
      const instances_bounding_box = instanced_mesh.geometry.boundingBox.clone();

      instances_bounding_box.applyMatrix4(matrix);
      instanced_mesh.setMatrixAt(j, matrix);
      instanced_mesh.setColorAt(j, color);

      if (main_bounding_box == undefined) {
        main_bounding_box = instances_bounding_box.clone();
      } else {
        main_bounding_box.union(instances_bounding_box);
      }

      // ToDo: this gets assigned several times? Can it get different numbers? Review.
      mesh.instances[j].node.instanced_mesh_idx = j;
    }

    scene_root_group.add(instanced_mesh);
    mesh.threejs_instanced_mesh = instanced_mesh;
  }

  scene.add(scene_root_group);
}

function getLabelTexture(text, color) {
  const key = `${text}|${color}`;
  if (labelTextures.has(key)) return labelTextures.get(key);
  const canvas = document.createElement('canvas');
  canvas.width = Math.min(2048, Math.max(128, text.length * 34 + 20));
  canvas.height = 80;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = `#${color}`;
  ctx.font = 'bold 52px sans-serif';
  ctx.textBaseline = 'middle';
  ctx.strokeStyle = '#20242a';
  ctx.lineWidth = 5;
  ctx.lineJoin = 'round';
  ctx.strokeText(text, 8, 40);
  ctx.fillText(text, 8, 40);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  labelTextures.set(key, texture);
  return texture;
}

function buildLabelsScene() {
  for (const node of GDS.nodes) {
    for (const label of GDS.cells[node.cell_name].labels) {
      if (!label.text) continue;
      const layerId = GDS.makeLayerId(label.layer_number, label.layer_datatype);
      const layer = GDS.layers[layerId];
      if (!layer) continue;
      const color =
        PDK === 'TR-1um'
          ? 'f2ece1'
          : layer.threejs_material.color.getHexString(THREE.LinearSRGBColorSpace);
      const material = new THREE.SpriteMaterial({
        map: getLabelTexture(label.text, color),
        transparent: true,
        depthTest: false,
      });
      const sprite = new THREE.Sprite(material);
      sprite.position.set(label.x, label.y, label.z).applyMatrix4(node.world_matrix);
      sprite.userData = { layerName: layer.name, baseZ: sprite.position.z };
      const { scale, offset } = spacingTransform(layer.name);
      sprite.position.z = sprite.userData.baseZ * scale + offset;
      sprite.scale.set(Math.max(2, label.text.length * 1.1), 2, 1);
      sprite.layers.set(getTHREEJSLayerFromGDSLayerId(layerId));
      sprite.raycast = () => {};
      // Draw labels after translucent guide volumes, preserving legibility.
      sprite.renderOrder = 100;
      scene_root_group.add(sprite);
    }
  }
}

function buildScene(node, reset_camera = true) {
  cleanScene();

  scene_root_group = new THREE.Group();

  let main_matrix = new THREE.Matrix4();

  if (node == null) {
    const topCell = GDS.primaryTopCell();
    if (!topCell) throw new Error(t('No displayable top cell in GDS'));
    GDS.root_node = GDS.addNode(topCell, topCell, new THREE.Matrix4(), null);
  } else {
    node.scene_bounding_box = null;
    GDS.root_node = node;
  }

  buildSceneDoNodeCalcs(GDS.root_node, main_matrix);

  buildMeshesScene(GDS.root_node, main_matrix);
  buildLabelsScene();
  updateSceneLighting();

  // // Test for checking nodes bounding boxes
  // // Those bounding boxes could then be used to filter objects for raycasting
  // let bbox_root_group = new THREE.Group();
  // const parent_node = GDS.root_node;
  // for (let i = 0; parent_node.children && i < parent_node.children.length; i++) {
  //   const child_node = parent_node.children[i];
  //   if(child_node.scene_bounding_box) {
  //     const box = new THREE.Box3Helper(child_node.scene_bounding_box);
  //     box.name = "BBBOX_" + child_node.instance_name;
  //     box.visible = false;
  //     bbox_root_group.add(box);
  //   }
  // }
  // scene.add(bbox_root_group);

  if (reset_camera) {
    // Set the position for the first time we use the camera
    if (!cameraAnimmation.initialized) {
      cameraAnimmation.initialized = true;
      setCameraInitialPosition(GDS.root_node);
    }

    zoomNode(GDS.root_node);
  }

  if (GDS.root_node.instance_name) {
    instanceClassTitleDiv.textContent =
      GDS.root_node.instance_name + ' (' + GDS.root_node.cell_name + ')';
  } else {
    instanceClassTitleDiv.textContent = GDS.root_node.cell_name;
  }

  viewSettings.filler_cells = true;
  viewSettings.top_cell_geometry = true;
  buildInstancesNamesFolder(viewSettings.instances['_ SORT_BY _'], true);
  translateGui();
}

function updateSceneLighting() {
  if (PDK !== 'TR-1um') return;
  const bounds = GDS.root_node.scene_bounding_box;
  const center = bounds.getCenter(new THREE.Vector3());
  const radius = Math.max(1, bounds.getSize(new THREE.Vector3()).length() / 2);
  keyLight.target.position.copy(center);
  keyLight.position.copy(center).add(new THREE.Vector3(-0.35, -0.5, 1).multiplyScalar(radius * 2));
  Object.assign(keyLight.shadow.camera, {
    left: -radius,
    right: radius,
    top: radius,
    bottom: -radius,
    near: 0.1,
    far: radius * 5,
  });
  keyLight.shadow.camera.updateProjectionMatrix();
}
