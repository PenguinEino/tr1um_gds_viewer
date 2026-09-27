"""Retain the fork modification notice in generated JS and WASM artifacts."""
from pathlib import Path
import sys

NOTICE = ('Modified by PenguinEino for TR-1um GDS Viewer (2026). '
          'Rebuilt from modified Tiny Tapeout GDS Viewer processor sources. '
          'Viewer source: Apache-2.0; linked components retain their own licenses. '
          'See LICENSE, NOTICE, THIRD_PARTY_NOTICES.md and licenses/.')
SECTION = b'tr1um.modification-notice'

def leb(value):
    result = bytearray()
    while True:
        byte = value & 127
        value >>= 7
        result.append(byte | (128 if value else 0))
        if not value:
            return bytes(result)

def read_leb(data, pos):
    value, shift = 0, 0
    while True:
        byte = data[pos]
        pos += 1
        value |= (byte & 127) << shift
        if not byte & 128:
            return value, pos
        shift += 7

js, wasm = map(Path, sys.argv[1:3])
comment = '/*! ' + NOTICE + ' */\n'
source = js.read_text()
if not source.startswith(comment):
    js.write_text(comment + source)
data = wasm.read_bytes()
assert data[:8] == b'\0asm\x01\0\0\0', 'Not a WASM module'
result, pos = bytearray(data[:8]), 8
while pos < len(data):
    start, section_id = pos, data[pos]
    size, payload = read_leb(data, pos + 1)
    pos = payload + size
    assert pos <= len(data)
    if section_id == 0:
        name_size, name_start = read_leb(data, payload)
        if data[name_start:name_start + name_size] == SECTION:
            continue
    result.extend(data[start:pos])
payload = leb(len(SECTION)) + SECTION + NOTICE.encode()
result.extend(b'\0' + leb(len(payload)) + payload)
wasm.write_bytes(result)
