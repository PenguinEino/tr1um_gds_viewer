export { GDS };

import * as THREE from 'three';

// GDS/Model
let GDS = {
  cells: {},
  top_cells: [],
  meshes: {},
  layers: {},

  // CURRENT VIEW
  root_node: null,
  nodes: [],
  view_stats: {},

  // Utils
  makeLayerId: function (layer_number, layer_datatype) {
    return `${layer_number}/${layer_datatype}`;
  },

  // Main functions
  addLayer: function (layer_number, layer_datatype, name, visual_order, color) {
    let layer_id = this.makeLayerId(layer_number, layer_datatype);
    if (this.layers[layer_id] != undefined) {
      console.error(`Layer ${layer_id} already added!`);
      return;
    }

    const materialParams = {};
    materialParams.color = new THREE.Color().setRGB(
      color[0],
      color[1],
      color[2],
      THREE.LinearSRGBColorSpace,
    );
    materialParams.opacity = color[3];

    const material = new THREE.MeshPhysicalMaterial();
    material.setValues(materialParams);
    material.side = THREE.DoubleSide; //THREE.FrontSide;
    material.flatShading = true;
    material.roughness = 0.9;
    material.metalness = 0.0;
    material.shadowSide = THREE.FrontSide;
    material.name = name;

    const layer = {
      layer_number: layer_number,
      layer_datatype: layer_datatype,
      name: name,
      threejs_material: material,
      visual_order: visual_order,
    };
    this.layers[layer_id] = layer;
  },

  addCell: function (cell_name, bounds, is_top_cell) {
    this.cells[cell_name] = {
      name: cell_name,
      bounds: bounds,
      is_top_cell: is_top_cell == 1,
      meshes_names: [],
      references: [],
      labels: [],
    };
    if (is_top_cell == 1) this.top_cells.push(cell_name);
  },

  addReference: function (
    parent_cell_name,
    cell_name,
    instance_name,
    ref_origin_x,
    ref_origin_y,
    ref_rotation,
    ref_x_reflection,
  ) {
    if (!this.cells[parent_cell_name] || !this.cells[cell_name]) return;
    const matrix = new THREE.Matrix4();
    const translation = new THREE.Vector3(ref_origin_x, ref_origin_y, 0);
    const rotation = new THREE.Quaternion(
      0,
      0,
      Math.sin(ref_rotation / 2.0),
      Math.cos(ref_rotation / 2.0),
    );
    const scale = new THREE.Vector3(1, ref_x_reflection ? -1 : 1, 1);
    matrix.compose(translation, rotation, scale);

    let reference = {
      instance_name: instance_name,
      cell_name: cell_name,
      matrix: matrix,
    };

    this.cells[parent_cell_name].references.push(reference);
  },

  addMesh: function (cell_name, mesh_name, layer_number, layer_datatype, threejs_mesh) {
    if (!this.cells[cell_name]) {
      threejs_mesh.geometry.dispose();
      return;
    }
    this.meshes[mesh_name] = {
      layer_number: layer_number,
      layer_datatype: layer_datatype,
      threejs_mesh: threejs_mesh,
      threejs_lines: null,
      threejs_instanced_mesh: null,
      instances: [],
    };
    this.cells[cell_name].meshes_names.push(mesh_name);
  },

  addLabel: function (cell_name, layer_number, layer_datatype, text, x, y, z) {
    if (!this.cells[cell_name]) return;
    this.cells[cell_name].labels.push({ layer_number, layer_datatype, text, x, y, z });
  },

  addNode: function (cell_name, instance_name, matrix, parent) {
    let node = {
      cell_name: cell_name,
      instance_name: instance_name,
      matrix: matrix,
      scene_bounding_box: null,
      children: [],
      parent: parent,
      instanced_mesh_idx: null,
    };

    this.nodes.push(node);
    return node;
  },

  primaryTopCell: function () {
    return this.top_cells.reduce((best, name) => {
      const area = (bounds) =>
        Math.max(0, bounds.max_x - bounds.min_x) * Math.max(0, bounds.max_y - bounds.min_y);
      return !best || area(this.cells[name].bounds) > area(this.cells[best].bounds) ? name : best;
    }, null);
  },
};
