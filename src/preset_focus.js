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
