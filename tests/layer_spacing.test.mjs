import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PDK_LAYERS } from '../src/pdk_layers.js';
import { getLayerSpacingTransform } from '../src/layer_spacing.js';

const layers = Object.fromEntries(PDK_LAYERS['TR-1um'].map((layer) => [layer.name, layer]));
function bounds(name, factor) {
  const { scale, offset } = getLayerSpacingTransform(name, factor);
  return [layers[name].zmin * scale + offset, layers[name].zmax * scale + offset];
}
const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-10, `${a} != ${b}`);

for (const factor of [0.25, 0.5, 1, 2, 3]) {
  test(`contacts remain joined and slabs keep their thickness at ${factor}x`, () => {
    for (const [lower, upper] of [
      ['CO', 'M1'],
      ['M1', 'V1'],
      ['V1', 'M2'],
      ['M2', 'TC23'],
      ['TC23', 'M3'],
    ]) {
      near(bounds(lower, factor)[1], bounds(upper, factor)[0]);
    }
    near(bounds('CO', factor)[0], layers.CO.zmin);
    for (const name of ['WN', 'AP', 'AN', 'AR', 'AC', 'GC', 'GR']) {
      assert.deepEqual(bounds(name, factor), [layers[name].zmin, layers[name].zmax]);
    }
    for (const name of ['M1', 'M2', 'M3', 'PIN', 'PO']) {
      const [bottom, top] = bounds(name, factor);
      near(top - bottom, layers[name].zmax - layers[name].zmin);
    }
    for (const [marker, metal] of [
      ['TXM1', 'M1'],
      ['PIN', 'M1'],
      ['TXM2', 'M2'],
      ['PO', 'M2'],
    ]) {
      near(
        bounds(marker, factor)[0] - bounds(metal, factor)[1],
        layers[marker].zmin - layers[metal].zmax,
      );
    }
    near(
      bounds('M1', factor)[0] - bounds('GC', factor)[1],
      (layers.M1.zmin - layers.GC.zmax) * factor,
    );
    assert.ok(bounds('CO', factor)[1] > bounds('GC', factor)[1]);
  });
}

test('1x restores the original stack for every layer', () => {
  for (const layer of Object.values(layers)) {
    assert.deepEqual(bounds(layer.name, 1), [layer.zmin, layer.zmax]);
  }
});
