import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { LAYER_STIPPLES } from '../src/layer_stipples.js';

test('all 17 generated stipples preserve the previous displayed pixels', () => {
  const pixels = Object.entries(LAYER_STIPPLES).map(([name, p]) => [name, p.rows]);
  assert.equal(pixels.length, 17);
  const digest = createHash('sha256').update(JSON.stringify(pixels)).digest('hex');
  assert.equal(digest, '695b959e31786191ec02fbba19668a308783ecfefb8d55ec073256e2ac3b7494');
});
