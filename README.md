# TR-1um GDS Viewer

A browser-based 3D viewer for [OpenSUSI TR-1um](https://github.com/OpenSUSI/TR-1um) drawing-layer GDS files, forked from [Tiny Tapeout GDS Viewer](https://github.com/TinyTapeout/tinytapeout_gds_viewer). The 3D layer heights are illustrative and are not measured process thicknesses. This is a viewer, not a DRC, LVS, or MDP tool.

## Open a design

- Drop a `.gds` file on the import panel, or click the drop area to choose a local file. The GDS stays in your browser.
- Paste an HTTPS URL ending in `.gds` and choose **Load URL**. GitHub `blob` URLs are converted to `raw.githubusercontent.com` URLs. The remote server must allow browser access with CORS; if it does not, download the file and upload it locally.
- Share a direct link with `?url=<encoded GDS URL>`. The viewer also retains the upstream `?pdk=` query option; TR-1um is the default.

The viewer shows only layer types present in the loaded GDS that are in the TR-1um drawing-layer set below. It reports the number of other layer types omitted. You can load another file in the same tab after the current one finishes.

## 3D appearance

TR-1um uses a muted 3D palette inspired by the upstream viewer: neutral wells and active regions, rose gates, gold M1, blue-gray M2, cyan M3, and dark contacts. Colors intentionally differ from the KLayout 2D palette. Heights are exaggerated sixfold for readable sidewalls and contact pillars, not physical measurements. The initial view is oblique; **View angle** switches between **3D** and **Top**. **Cast shadows** can be disabled on slower devices. Layer filtering is unchanged.

## TR-1um layer set

`WN 140/0`, `AP 3/1`, `AN 3/2`, `AR 3/3`, `AC 3/4`, `GC 8/1`, `GR 8/2`, `CO 11/0`, `M1 13/0`, `V1 19/0`, `M2 20/0`, and `PO 14/0`. The current MDP script also accepts `TC23 121/0` and `M3 122/0`, which appear when present. Text and pin layers `TXM1 48/0`, `PIN 48/1`, and `TXM2 49/0` are also shown.

These mappings follow the [OpenSUSI GDSII table](https://github.com/OpenSUSI/TR-1um/blob/main/Document/TR-1um_GDSII_Table.xlsx), [KLayout layer palette](https://github.com/OpenSUSI/TR-1um/blob/main/libs.tech/klayout/tech/TR-1um.lyp), and [MDP input definitions](https://github.com/OpenSUSI/TR-1um/blob/main/libs.tech/klayout/tech/drc/run_mdp.drc). Generated masks and recognition layers, such as `NW`, `NF`, `PF`, implants, and `DLXXXX`, are excluded even if they are present in the input file. No MDP is run in the browser.

## Development

Requires Node.js 16 or newer:

```sh
npm ci
npm run start
```

Open `http://localhost:5173/`. Run `npm run build` to create the static site in `dist/`.

## Rebuild the GDS processor

The source is in `gds_processor/`; the generated `src/gds_processor.js` and `src/gds_processor.wasm` are committed. Rebuild them after C++ changes using [Emscripten SDK](https://emscripten.org/docs/getting_started/downloads.html) 4.0.2, CMake, and the repository submodules:

```sh
git submodule update --init --recursive
source /path/to/emsdk/emsdk_env.sh
embuilder build zlib
emcmake cmake -S gds_processor -B gds_processor/build_release -DCMAKE_BUILD_TYPE=Release
cmake --build gds_processor/build_release -j4
```

The included GitHub Actions workflow builds and publishes `dist/` to GitHub Pages.
