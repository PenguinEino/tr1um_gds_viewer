// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 PenguinEino.
// Generic periodic geometry for screen-space layer stipples. No KLayout
// bitmap arrays or implementation code are included here. The resulting
// appearance is intentionally compatible with the previous viewer; this
// is not a claim of clean-room development. See THIRD_PARTY_NOTICES.md.
// C-prefixed pattern choices originate in the Apache-2.0 TR-1um palette.

function tile(size, ink) {
  return Array.from({ length: size }, (_, y) =>
    Array.from({ length: size }, (_, x) => (ink(x, y) ? '*' : '.')).join(''),
  );
}

const mod = (value, size) => ((value % size) + size) % size;
const stripes = (size, direction, width = 1) =>
  tile(size, (x, y) => mod(x + direction * y, size) < width);
const dots = (size, pitch, rowStep, offsetX = 0, offsetY = 0) =>
  tile(
    size,
    (x, y) =>
      mod(y - offsetY, rowStep) === 0 &&
      mod(x - offsetX - ((y - offsetY) / rowStep) * (pitch / 2), pitch) === 0,
  );
const distance = (a, b, period) => Math.min(mod(a - b, period), mod(b - a, period));
const crosses = (size, centers, radius) =>
  tile(size, (x, y) =>
    centers.some(
      ([cx, cy]) =>
        (x === cx && distance(y, cy, size) <= radius) ||
        (y === cy && distance(x, cx, size) <= radius),
    ),
  );
const grid = (size, offset, width) =>
  tile(size, (x, y) => mod(x - offset, size) < width || mod(y - offset, size) < width);
const pattern = (label, rows) => ({ label, rows });

export const LAYER_STIPPLES = {
  WN: pattern(
    'well dots',
    tile(20, (x, y) => x >= 3 && x < 5 && y >= 14 && y < 16),
  ),
  AP: pattern('active dots', dots(16, 8, 4, 6, 2)),
  AN: pattern('active dots', dots(16, 8, 4, 6, 2)),
  AR: pattern('fine dots', dots(4, 4, 2)),
  AC: pattern(
    'crosses',
    crosses(
      8,
      [
        [2, 2],
        [6, 6],
      ],
      2,
    ),
  ),
  GC: pattern('fine dots', dots(4, 4, 2)),
  GR: pattern('double diagonal', stripes(8, -1, 2)),
  CO: pattern(
    'diagonal grid',
    tile(8, (x, y) => x === y || mod(x + y, 8) === 0),
  ),
  M1: pattern('metal diagonal', stripes(16, -1)),
  V1: pattern('via grid', grid(4, 1, 1)),
  M2: pattern(
    'reverse metal diagonal',
    tile(16, (x, y) => x + y === 15),
  ),
  PO: pattern(
    'clear',
    tile(1, () => false),
  ),
  TXM1: pattern('reverse fine diagonal', stripes(4, 1)),
  TXM2: pattern('fine diagonal', stripes(4, -1)),
  PIN: pattern('reverse diagonal', stripes(8, 1)),
  TC23: pattern('wide via grid', grid(8, 3, 2)),
  M3: pattern('reverse double diagonal', stripes(8, 1, 2)),
};
