# Modified by PenguinEino for TR-1um GDS Viewer (2026); based on Tiny Tapeout GDS Viewer. See NOTICE and LICENSE.
cmake_minimum_required(VERSION 3.24)
project(GDS_wasm)



# QHULL
set(BUILD_SHARED_LIBS OFF)
set(BUILD_APPLICATIONS OFF)
set(QHULL_ENABLE_TESTING OFF)
# qhull declares unused shared targets even when BUILD_SHARED_LIBS is OFF.
# Allow configuration on Emscripten, then link only its static reentrant target.
set_property(GLOBAL PROPERTY TARGET_SUPPORTS_SHARED_LIBS TRUE)
add_subdirectory(./external/qhull)


# GDSTK
# Had to add this two lines because I was having problems with the "find_package(Qhull 8 REQUIRED)" defined in the gdtsk repo
set(QHULL_INCLUDE_DIRS "${CMAKE_SOURCE_DIR}/external/qhull/src")
add_library(QHULL::QHULL ALIAS qhullstatic_r)

if(EMSCRIPTEN)
    set(EMSCRIPTEN_SYSROOT "$ENV{EMSDK}/upstream/emscripten/cache/sysroot")
    set(ENV{ZLIB_INCLUDE_DIRS} "${EMSCRIPTEN_SYSROOT}/include")
    set(ENV{ZLIB_LIBRARIES} "${EMSCRIPTEN_SYSROOT}/lib/wasm32-emscripten/libz.a")
endif()

add_subdirectory(./external/gdstk)
add_subdirectory(./external/CDT/CDT CDT)

add_subdirectory(src)
set_target_properties(gds_processor PROPERTIES 
    # RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}
    RUNTIME_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/../src
)
# install(TARGETS gds_processor RUNTIME DESTINATION ${CMAKE_SOURCE_DIR}/public/gds_explorer)
