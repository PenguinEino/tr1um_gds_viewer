# Development

```sh
npm ci
npm start
npm run build
```

Vite serves the viewer at http://localhost:5173/ and builds the static site in
`dist/`. The build also copies LICENSE, NOTICE and THIRD_PARTY_NOTICES.md;
`public/licenses/` contains the third-party texts and CDT source archive.
Keep these with any redistributed build. If dependencies change, update the
matching texts and pinned source references.

## Rebuild the GDS processor

Using Emscripten SDK 4.0.2, CMake and Python 3:

```sh
git submodule update --init --recursive
source /path/to/emsdk/emsdk_env.sh
embuilder build zlib
emcmake cmake -S gds_processor -B gds_processor/build_release -DCMAKE_BUILD_TYPE=Release
cmake --build gds_processor/build_release -j4
```

The generated JS/WASM live in `src/`. The post-build step embeds the fork's
modification notice in both artifacts. Retain upstream source notices and
refresh `public/licenses/CDT-source.tar.gz` if the CDT submodule changes:

```sh
git -C gds_processor/external/CDT archive --format=tar.gz --prefix=CDT/ -o ../../../public/licenses/CDT-source.tar.gz HEAD
```
