// Read only the layer and datatype records needed for the import summary.
// Geometry and hierarchy remain the responsibility of the GDSTK worker.
export function readGdsLayerPairs(bytes) {
  const pairs = new Set();
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let offset = 0;
  let layer = null;
  let datatype = null;

  while (offset + 4 <= view.byteLength) {
    const length = view.getUint16(offset);
    if (length < 4 || offset + length > view.byteLength) {
      throw new Error('Invalid GDS record length');
    }
    const record = view.getUint8(offset + 2);
    if ([0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x15, 0x2d].includes(record)) {
      layer = null;
      datatype = null;
    } else if (record === 0x0d && length >= 6) {
      layer = view.getInt16(offset + 4);
    } else if ((record === 0x0e || record === 0x16) && length >= 6) {
      datatype = view.getInt16(offset + 4);
    } else if (record === 0x11 && layer !== null) {
      pairs.add(`${layer}/${datatype ?? 0}`);
    }
    offset += length;
  }

  if (offset !== view.byteLength) throw new Error('Incomplete GDS record');
  return pairs;
}

export function summarizeGdsLayers(bytes, configuredLayers) {
  const present = readGdsLayerPairs(bytes);
  const supported = new Set(
    configuredLayers.map((layer) => `${layer.layer_number}/${layer.layer_datatype}`),
  );
  return {
    present,
    visible: new Set([...present].filter((pair) => supported.has(pair))),
    excluded: [...present].filter((pair) => !supported.has(pair)),
  };
}
