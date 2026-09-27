import { PDK_LAYERS } from './pdk_layers.js';

const layers = Object.fromEntries(PDK_LAYERS['TR-1um'].map((layer) => [layer.name, layer]));

// Change dielectric spans, preserving slab thicknesses and conductor endpoints.
// These remain illustrative viewer heights, not calibrated process dimensions.
export function getLayerSpacingTransform(name, factor) {
  const m1Shift = (layers.M1.zmin - layers.GC.zmax) * (factor - 1);
  const m2Shift = m1Shift + (layers.M2.zmin - layers.M1.zmax) * (factor - 1);
  const m3Shift = m2Shift + (layers.M3.zmin - layers.M2.zmax) * (factor - 1);
  if (name === 'CO') {
    const scale = (layers.CO.zmax + m1Shift - layers.CO.zmin) / (layers.CO.zmax - layers.CO.zmin);
    return { scale, offset: layers.CO.zmin * (1 - scale) };
  }
  if (name === 'V1' || name === 'TC23') {
    const shift = name === 'V1' ? m1Shift : m2Shift;
    return { scale: factor, offset: shift + layers[name].zmin * (1 - factor) };
  }
  const offset = ['M1', 'TXM1', 'PIN'].includes(name)
    ? m1Shift
    : ['M2', 'TXM2', 'PO'].includes(name)
      ? m2Shift
      : name === 'M3'
        ? m3Shift
        : 0;
  return { scale: 1, offset };
}
