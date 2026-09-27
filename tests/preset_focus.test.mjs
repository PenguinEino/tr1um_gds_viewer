import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolvePresetNodes, resolveVisibleNodes, hasVisibleBounds } from '../src/preset_focus.js';

function add(parent, cell_name) {
  const node = { cell_name, parent, children: [] };
  parent?.children.push(node);
  return node;
}

test('finds circuit inside a nested MPW frame without selecting the frame', () => {
  const root = add(null, 'tr_1um_AUDIO_OPAMP01');
  const frame = add(root, 'AUDIO_OPAMP01');
  const circuit = add(frame, 'opamp_r2r_Miyazaki');
  add(root, 'unrelated_circuit');
  assert.deepEqual(resolvePresetNodes(root, ['opamp_r2r_Miyazaki']), {
    nodes: [circuit],
    missing: [],
  });
});

test('keeps separate instances but does not double-select nested target cells', () => {
  const root = add(null, 'chip');
  const one = add(root, 'amplifier');
  const two = add(root, 'amplifier');
  add(one, 'bias');
  const result = resolvePresetNodes(root, ['amplifier', 'bias']);
  assert.equal(result.nodes.length, 2);
  assert.ok(result.nodes.includes(one) && result.nodes.includes(two));
  assert.deepEqual(result.missing, []);
});

test('reports missing targets rather than focusing a similarly named circuit', () => {
  const root = add(null, 'chip');
  add(root, 'opamp_other');
  assert.deepEqual(resolvePresetNodes(root, ['opamp']), { nodes: [], missing: ['opamp'] });
});

function bounds(node, min = 0, max = 10) {
  node.scene_bounding_box = {
    min: { x: min, y: min, z: min },
    max: { x: max, y: max, z: max },
  };
  return node;
}

test('OpenSUSI 05 empty OPAMP falls back to the whole chip, preserving valid targets', () => {
  const root = bounds(add(null, 'tr_1um_OpenSUSI05'));
  const frame = bounds(add(root, 'AUDIO_OPAMP01'));
  const empty = bounds(add(frame, 'opamp_r2r_saito'), Infinity, -Infinity);
  const amplifier = bounds(add(frame, 'opamp_3zki_ina_first'));
  const selected = resolvePresetNodes(root, ['opamp_r2r_saito']).nodes;
  assert.deepEqual(resolveVisibleNodes(selected), {
    nodes: [root],
    emptyCells: ['opamp_r2r_saito'],
  });
  assert.deepEqual(resolveVisibleNodes([amplifier]), { nodes: [amplifier], emptyCells: [] });
  assert.deepEqual(resolveVisibleNodes([empty, amplifier]).nodes, [root]);
  assert.equal(hasVisibleBounds(empty), false);
});

test('empty or nonfinite hierarchies never supply a camera destination', () => {
  const root = bounds(add(null, 'empty_chip'), Infinity, -Infinity);
  const empty = bounds(add(root, 'empty_cell'), NaN, NaN);
  assert.deepEqual(resolveVisibleNodes([empty]), { nodes: [], emptyCells: ['empty_cell'] });
  assert.equal(hasVisibleBounds(empty), false);
});
