import { test } from 'node:test';
import assert from 'node:assert/strict';
import { surfaceZoomSpeed } from '../src/surface_zoom.js';

const step = (distance, delta = 100) =>
  distance * (1 - Math.pow(0.95, (surfaceZoomSpeed(distance) * delta) / 100));

test('preserves whole-chip wheel speed', () => {
  assert.equal(surfaceZoomSpeed(1000), 1);
  assert.equal(surfaceZoomSpeed(75), 1);
});

test('keeps approach steps roughly constant until close to the surface', () => {
  // Previously a wheel notch fell from 3.75 units to 0.5 units in this range.
  assert.ok(step(75) / step(10) < 1.25);
  assert.ok(step(10) > 3);
});

test('slows at the surface and never steps through it, including large wheel deltas', () => {
  assert.ok(step(1) < step(5));
  for (const distance of [75, 10, 5, 1, 0.1]) {
    for (const delta of [1, 100, 500]) {
      assert.ok(step(distance, delta) > 0);
      assert.ok(step(distance, delta) < distance);
    }
  }
  assert.equal(surfaceZoomSpeed(NaN), 1);
  assert.equal(surfaceZoomSpeed(0), 1);
});
