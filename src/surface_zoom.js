// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 PenguinEino.

// Compensate OrbitControls' distance-proportional dolly near a surface.
// The cap keeps the final few model units gradual instead of crossing the face.
export function surfaceZoomSpeed(distance) {
  if (!Number.isFinite(distance) || distance <= 0) return 1;
  return Math.min(12, Math.max(1, 75 / distance));
}
