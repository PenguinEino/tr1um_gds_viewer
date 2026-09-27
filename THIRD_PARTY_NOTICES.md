# Third-party notices

The viewer's own code is licensed under Apache-2.0; see [LICENSE](LICENSE)
and [NOTICE](NOTICE). Dependencies retain the licenses below. Copies of these
notices, full license texts and the CDT source archive are shipped with the
static website. The footer license link opens the repository LICENSE; dependency
notices and texts remain available at `THIRD_PARTY_NOTICES.md` and `licenses/`.

## Viewer and process metadata

- **Tiny Tapeout GDS Viewer** — Apache-2.0, original viewer contributors.
  Source: https://github.com/TinyTapeout/tinytapeout_gds_viewer
  The original LICENSE is retained. This is PenguinEino's modified fork,
  not an official Tiny Tapeout release.
- **OpenSUSI TR-1um** — Apache-2.0.
  Copyright 2025 OpenSUSI, ISHI-KAI, TOKAI RIKA CO., LTD.
  Layer definitions and custom stipples: https://github.com/OpenSUSI/TR-1um
  License: [OpenSUSI.txt](public/licenses/OpenSUSI.txt).

## JavaScript included in the website

- **Three.js 0.161.0** — MIT; Copyright © 2010–2024 three.js authors.
  Source: https://github.com/mrdoob/three.js/tree/r161
  License: [three.txt](public/licenses/three.txt).
- **lil-gui 0.17.0** (distributed by Three.js) — MIT;
  Copyright (c) 2019 George Michael Brower.
  Source: https://github.com/georgealways/lil-gui/tree/v0.17.0
  License: [lil-gui.txt](public/licenses/lil-gui.txt).
- **stats.js** (distributed by Three.js r161) — MIT;
  Copyright (c) 2009–2016 stats.js authors.
  Source: https://github.com/mrdoob/three.js/blob/r161/examples/jsm/libs/stats.module.js
  License: [stats.js.txt](public/licenses/stats.js.txt).
- **Earcut 2.2.4** (ported in Three.js) — ISC; Copyright (c) 2016 Mapbox.
  Source: https://github.com/mapbox/earcut/tree/v2.2.4
  License: [earcut.txt](public/licenses/earcut.txt).

## GDS processor / WebAssembly

- **gdstk** — Boost Software License 1.0; Copyright 2020 Lucas Heitzmann Gabrielli.
  Source: https://github.com/heitzmann/gdstk/tree/7e5ff0395f3eeefa4552f3e9365986ef67f5e5ce
  License: [gdstk.txt](public/licenses/gdstk.txt).
- **Qhull** — Qhull license; Copyright (c) 1993–2020 C.B. Barber and
  The Geometry Center, University of Minnesota.
  This software includes Qhull from C.B. Barber and The Geometry Center.
  Original source is available at http://www.qhull.org/ and
  https://github.com/qhull/qhull/tree/c814cb78883e6bb63a3b09a8a981df61d3ecaabb
  License: [qhull.txt](public/licenses/qhull.txt). Qhull is unmodified.
- **CDT** — Mozilla Public License 2.0; its respective contributors.
  Source: https://github.com/artem-ogre/CDT/tree/7bd85e41a7b2e6e6e3bf82f36bcbc2bcec6441c5
  License: [CDT.txt](public/licenses/CDT.txt).
  CDT is unmodified. The exact Source Code Form is available under MPL-2.0
  in the submodule and in [CDT-source.tar.gz](public/licenses/CDT-source.tar.gz),
  distributed alongside the executable. You may obtain, modify and redistribute
  that source under MPL-2.0. No additional restrictions are imposed on it.
- **zlib 1.3.1** — zlib license;
  Copyright (C) 1995–2024 Jean-loup Gailly and Mark Adler.
  Source: https://github.com/madler/zlib/tree/v1.3.1
  License: [zlib.txt](public/licenses/zlib.txt).
- **Emscripten 4.0.2 runtime** — MIT OR NCSA, with incorporated Node.js MIT code.
  Source: https://github.com/emscripten-core/emscripten/tree/4.0.2
  License and attributions: [emscripten.txt](public/licenses/emscripten.txt).
  Bundled C/C++ runtime notices: [musl](public/licenses/musl.txt),
  [libc++](public/licenses/libcxx.txt), [libc++abi](public/licenses/libcxxabi.txt),
  [compiler-rt](public/licenses/compiler-rt.txt).

## Stipple implementation and historical provenance

`src/layer_stipples.js` generates periodic dots, straight hatching and grids
using geometric predicates. It replaces `src/klayout_patterns.js`, which
contained literal bitmap arrays, including standard patterns transcribed
from KLayout's `layDitherPattern.cc` (GPL-2.0-or-later):
https://github.com/KLayout/klayout/blob/master/src/laybasic/laybasic/layDitherPattern.cc
Copyright (C) 2006–2026 Matthias Koefferlein. The historical source license
is preserved in [KLayout-historical.txt](public/licenses/KLayout-historical.txt).

The replacement preserves the previous raster output exactly, at the user's
request. The implementation uses basic periodic geometry rather than the
KLayout code or literal bitmap arrays. This is not a claim of clean-room
independence, nor a legal determination that identical output eliminates
all possible derivative-work obligations. Source-format conversion alone
would not remove such obligations. Historical commits containing the old
arrays must not be assumed to be wholly Apache-2.0. Assess that provenance
before redistributing historical releases or asserting license clearance
for an exact reproduction. The Apache-2.0 TR-1um attribution above is retained.

## Icons, brands and external designs

- **GitHub, X and Discord SVG icons** are from Simple Icons 13.21.0, CC0-1.0.
  Source: https://github.com/simple-icons/simple-icons/tree/13.21.0
  License: [simple-icons.txt](public/licenses/simple-icons.txt).
  CC0 on the artwork does not grant trademark rights.
- **ISHI-KAI logo** is displayed from its official website:
  https://ishi-kai.org/assets/images/ishikai_icon.png
  The logo belongs to its respective owner and is not covered by this
  repository's Apache-2.0 license. It identifies the link to ISHI-KAI.
- These links and logos identify their destinations; they do not imply
  endorsement by GitHub, X, Discord, ISHI-KAI or Tiny Tapeout.
- Remote presets and uploaded GDS files retain their own authorship and licenses.
  The viewer's license does not grant rights to those designs. The bundled
  public/tinytapeout.gds sample is retained from the upstream viewer.
- README screenshot: PenguinEino's ishi_vga design, shown in this viewer.

Build-only tools (Vite, Husky, Prettier, lint-staged and their dependencies)
are not shipped as application code; their licenses remain in npm packages.

## Preset gallery

Preview images are displayed from each project's `images/all_frame.png`,
linked in the ISHI-KAI TR10-1 project index:
https://github.com/ishi-kai/ISHI-KAI_Multiple_Projects_OpenMPW_OpenSUSI-TR10-1
Circuit credits were cross-checked against that index, all 37 MPW repositories
and the submitted GDS hierarchies (2026-09-27). See
[the credit audit](https://github.com/PenguinEino/tr1um_gds_viewer/blob/main/docs/preset-credits.md) for sources, source conflicts, and
credits inferred from named GDS cells. These research notes are kept out of the
gallery UI. Unpublished identities are not invented.
Project names and credits remain in their source language.

`public/previews/sanken.png` is a top-view screenshot rendered by this viewer
from https://github.com/munetomo-maruyama/TR-1um_MPW_Sanken/blob/main/src/tr_1um_sanken.gds
It represents the actual submitted GDS; the other previews are the published
project images, which can differ from the viewer's drawing-layer-only display.
Rights in each circuit and image remain with their respective authors.

The Sanken repository distributes this design under Apache-2.0 with the
OpenSUSI / ISHI-KAI / TOKAI RIKA notices reproduced above and in
[OpenSUSI.txt](public/licenses/OpenSUSI.txt). The screenshot is a rendered
representation, made by PenguinEino for this gallery (2026).
