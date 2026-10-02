import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { Worker } from 'node:worker_threads';
import { Box3, Matrix4, Vector3 } from 'three';
import { GDS } from '../src/GDS_data.js';

// Fixture created with gdstk: a 2 x 1 rectangle, scaled/reflected/rotated SREF,
// scaled 2 x 2 AREF, and a nested 4 x 0.5 magnification. No external artwork.
test('shipped WASM preserves MAG through the worker and rendered reference matrices', async () => {
  const bytes = await readFile(new URL('./fixtures/reference-magnification.gds', import.meta.url));
  const worker = new Worker(new URL('./fixtures/processor-worker.mjs', import.meta.url));
  GDS.cells = {};
  GDS.top_cells = [];
  const references = [];
  try {
    await new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error('GDS worker timed out')), 10000);
      worker.on('error', (error) => {
        clearTimeout(timeout);
        reject(error);
      });
      worker.on('message', (m) => {
        if (m.type === 'worker_ready')
          worker.postMessage({ type: 'process_gds', filename: '/uploaded/test.gds', data: bytes });
        if (m.type === 'add_cell') GDS.addCell(m.cell_name, m.bounds, m.is_top_cell);
        if (m.type === 'add_reference') {
          references.push(m);
          GDS.addReference(
            m.parent_cell_name,
            m.cell_name,
            m.instance_name,
            m.origin_x,
            m.origin_y,
            m.rotation,
            m.x_reflection,
            m.magnification,
          );
        }
        if (m.type === 'finished_references') {
          clearTimeout(timeout);
          resolve();
        }
        if (m.type === 'process_error') {
          clearTimeout(timeout);
          reject(new Error(m.message));
        }
      });
    });
    assert.deepEqual(
      references.map((r) => r.magnification).sort((a, b) => a - b),
      [0.5, 2, 2, 2, 2, 3, 4],
    );
    const tile = new Box3(new Vector3(0, 0, 5), new Vector3(2, 1, 8));
    function bounds(name, matrix = new Matrix4()) {
      if (name === 'tile') return tile.clone().applyMatrix4(matrix);
      const result = new Box3();
      for (const ref of GDS.cells[name].references)
        result.union(bounds(ref.cell_name, matrix.clone().multiply(ref.matrix)));
      return result;
    }
    function check(box, expected) {
      [...box.min.toArray(), ...box.max.toArray()].forEach((value, i) =>
        assert.ok(Math.abs(value - expected[i]) < 1e-8),
      );
    }
    const refs = GDS.cells.top.references;
    const rotated = refs.find((r) => r.matrix.elements[12] === 10);
    check(bounds('tile', rotated.matrix), [10, 20, 5, 13, 26, 8]);
    const arrayBounds = new Box3();
    for (const ref of refs.filter((r) => r.matrix.elements[12] < 0))
      arrayBounds.union(bounds('tile', ref.matrix));
    check(arrayBounds, [-20, 0, 5, -6, 9, 8]);
    check(
      bounds('nested', refs.find((r) => r.cell_name === 'nested').matrix),
      [90, 54, 5, 92, 58, 8],
    );
    // Reference MAG must not change the illustrative metal layer height.
    check(bounds('top'), [-20, 0, 5, 92, 58, 8]);
  } finally {
    await worker.terminate();
  }
});
