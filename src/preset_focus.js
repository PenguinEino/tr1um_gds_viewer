// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 PenguinEino.
// Match catalog targets in the rendered instance tree, including nested frames.
export function resolvePresetNodes(root, cellNames) {
  const requested = new Set(cellNames);
  const found = new Set();
  const matches = [];
  const pending = root ? [root] : [];
  while (pending.length) {
    const node = pending.pop();
    if (requested.has(node.cell_name)) {
      found.add(node.cell_name);
      matches.push(node);
    }
    pending.push(...node.children);
  }
  const selected = new Set(matches);
  return {
    nodes: matches.filter((node) => {
      for (let p = node.parent; p; p = p.parent) if (selected.has(p)) return false;
      return true;
    }),
    missing: [...requested].filter((name) => !found.has(name)),
  };
}

export function hasVisibleBounds(node) {
  const box = node?.scene_bounding_box;
  return (
    box &&
    ['x', 'y', 'z'].every(
      (axis) =>
        Number.isFinite(box.min[axis]) &&
        Number.isFinite(box.max[axis]) &&
        box.min[axis] <= box.max[axis],
    )
  );
}

// Some submitted GDS files retain circuit references after removing all their
// geometry. Focus the closest drawable ancestor instead of an infinite box.
export function resolveVisibleNodes(matches) {
  const visible = new Set();
  const emptyCells = new Set();
  for (const match of matches) {
    let node = match;
    if (!hasVisibleBounds(node)) emptyCells.add(node.cell_name);
    while (node && !hasVisibleBounds(node)) node = node.parent;
    if (node) visible.add(node);
  }
  return {
    nodes: [...visible].filter((node) => {
      for (let p = node.parent; p; p = p.parent) if (visible.has(p)) return false;
      return true;
    }),
    emptyCells: [...emptyCells],
  };
}
