import * as THREE from 'three';
import { KLAYOUT_PATTERNS } from './klayout_patterns.js';

export function getLayerPattern(name) {
  const pattern = KLAYOUT_PATTERNS[name];
  if (!pattern) return;
  const width = pattern.rows[0].length;
  const height = pattern.rows.length;
  let pixels = '';
  pattern.rows.forEach((row, y) => {
    [...row].forEach((pixel, x) => {
      if (pixel === '*') pixels += `<rect x="${x}" y="${y}" width="1" height="1"/>`;
    });
  });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" fill="#243040" fill-opacity=".55">${pixels}</svg>`;
  return {
    ...pattern,
    width,
    height,
    contrast: name === 'WN' ? 0.7 : 0.4,
    css: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
    size: `${width}px ${height}px`,
  };
}

export function applyLayerPattern(material, pattern, enabled = true, topZ = 0, pixelRatio = 1) {
  if (!pattern) return;
  const data = new Uint8Array(pattern.width * pattern.height * 4);
  pattern.rows.forEach((row, y) => {
    [...row].forEach((pixel, x) => {
      const offset = (y * pattern.width + x) * 4;
      data[offset] = data[offset + 1] = data[offset + 2] = pixel === '*' ? 255 : 0;
      data[offset + 3] = 255;
    });
  });
  const texture = new THREE.DataTexture(data, pattern.width, pattern.height);
  texture.magFilter = texture.minFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  texture.needsUpdate = true;
  material.addEventListener('dispose', () => texture.dispose());
  const uniforms = {
    layerPatternBitmap: { value: texture },
    layerPatternSize: { value: new THREE.Vector2(pattern.width, pattern.height) },
    layerPatternPixelRatio: { value: pixelRatio },
    layerPatternTopZ: { value: topZ },
    layerPatternContrast: { value: pattern.contrast },
    layerPatternEnabled: { value: enabled ? 1 : 0 },
  };
  material.userData.patternUniforms = uniforms;
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = 'varying vec3 vLayerPatternPosition;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <project_vertex>',
      `
      vec4 patternPosition = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        patternPosition = instanceMatrix * patternPosition;
      #endif
      vLayerPatternPosition = patternPosition.xyz;
      #include <project_vertex>
    `,
    );
    shader.fragmentShader =
      `
      varying vec3 vLayerPatternPosition;
      uniform sampler2D layerPatternBitmap;
      uniform vec2 layerPatternSize;
      uniform float layerPatternPixelRatio;
      uniform float layerPatternTopZ;
      uniform float layerPatternContrast;
      uniform float layerPatternEnabled;
    ` + shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <color_fragment>',
      `
      #include <color_fragment>
      // KLayout stipples are screen-space bitmaps. One bitmap pixel is one
      // CSS pixel, including on Retina displays; zoom never makes giant dots.
      vec2 screenPixel = floor(gl_FragCoord.xy / layerPatternPixelRatio);
      vec2 bitmapUV = (mod(vec2(screenPixel.x, -screenPixel.y), layerPatternSize) + 0.5) / layerPatternSize;
      float patternInk = texture2D(layerPatternBitmap, bitmapUV).r;
      vec3 patternNormal = normalize(cross(dFdx(vLayerPatternPosition), dFdy(vLayerPatternPosition)));
      // Preserve shaded sidewalls and avoid a second stipple through a
      // translucent volume's bottom face.
      float topSurface = smoothstep(0.7, 0.95, abs(patternNormal.z))
        * (1.0 - smoothstep(0.001, 0.01, abs(vLayerPatternPosition.z - layerPatternTopZ)));
      diffuseColor.rgb *= 1.0 - layerPatternEnabled * layerPatternContrast * patternInk * topSurface;
    `,
    );
  };
  material.customProgramCacheKey = () => 'tr1um-klayout-bitmap-v2';
}

export function setLayerPatternEnabled(material, enabled) {
  if (material.userData.patternUniforms) {
    material.userData.patternUniforms.layerPatternEnabled.value = enabled ? 1 : 0;
  }
}

export function setLayerPatternPixelRatio(material, pixelRatio) {
  if (material.userData.patternUniforms) {
    material.userData.patternUniforms.layerPatternPixelRatio.value = pixelRatio;
  }
}
