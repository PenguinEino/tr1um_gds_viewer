import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolvePresetNodes } from '../src/preset_focus.js';

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
