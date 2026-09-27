// Coarse 3D equivalents of the TR-1um KLayout stipples. WN/AP/AN keep
// dots; M1/M2 keep the opposing hugeSlash2/hugeSlash directions.
// Built-in patterns are simplified into readable marks, not pixel replicas.
const styles = {
  dots: {
    id: 0,
    label: 'dots',
    css: 'radial-gradient(circle, #24304088 1.5px, transparent 2px)',
    size: '8px 8px',
  },
  slash: {
    id: 1,
    label: '/ hatch',
    css: 'repeating-linear-gradient(135deg, transparent 0 6px, #24304088 6px 8px)',
  },
  backslash: {
    id: 2,
    label: '\\ hatch',
    css: 'repeating-linear-gradient(45deg, transparent 0 6px, #24304088 6px 8px)',
  },
  horizontal: {
    id: 3,
    label: 'bars',
    css: 'repeating-linear-gradient(0deg, transparent 0 6px, #24304088 6px 8px)',
  },
  grid: {
    id: 4,
    label: 'grid',
    css: 'repeating-linear-gradient(0deg, transparent 0 7px, #24304066 7px 8px), repeating-linear-gradient(90deg, transparent 0 7px, #24304066 7px 8px)',
  },
  crosshatch: {
    id: 5,
    label: 'crosshatch',
    css: 'repeating-linear-gradient(45deg, transparent 0 7px, #24304066 7px 8px), repeating-linear-gradient(135deg, transparent 0 7px, #24304066 7px 8px)',
  },
  crosses: {
    id: 6,
    label: 'crosses',
    css: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Cpath d='M5 2v6M2 5h6' stroke='%23243040' stroke-opacity='.55'/%3E%3C/svg%3E\")",
    size: '10px 10px',
  },
};

const layerStyles = {
  WN: ['dots', 7, 0.5],
  AP: ['dots', 4, 0.3],
  AN: ['dots', 4, 0.3],
  AR: ['horizontal', 4, 0.26],
  AC: ['grid', 6, 0.24],
  GC: ['horizontal', 4, 0.3],
  GR: ['backslash', 4, 0.3],
  CO: ['crosses', 3, 0.26],
  V1: ['crosshatch', 3, 0.26],
  TC23: ['grid', 3.5, 0.26],
  M1: ['backslash', 6, 0.26],
  M2: ['slash', 6, 0.26],
  M3: ['crosshatch', 7, 0.26],
  PO: ['grid', 8, 0.45],
  PIN: ['crosses', 4, 0.22],
  TXM1: ['backslash', 6, 0.26],
  TXM2: ['slash', 6, 0.26],
};

export function getLayerPattern(name) {
  const spec = layerStyles[name];
  return spec && { ...styles[spec[0]], pitch: spec[1], contrast: spec[2] };
}

export function applyLayerPattern(material, pattern, enabled = true, topZ = 0) {
  if (!pattern) return;
  const uniforms = {
    layerPatternType: { value: pattern.id },
    layerPatternTopZ: { value: topZ },
    layerPatternPitch: { value: pattern.pitch },
    layerPatternContrast: { value: pattern.contrast },
    layerPatternEnabled: { value: enabled ? 1 : 0 },
  };
  material.userData.patternUniforms = uniforms;
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = 'varying vec3 vLayerPatternPosition;\n' + shader.vertexShader;
    shader.vertexShader = shader.vertexShader.replace(
      '#include <project_vertex>',
      `
      vec4 patternPosition = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
        patternPosition = instanceMatrix * patternPosition;
      #endif
      // Design coordinates keep patterns continuous between cells and attached
      // to the layout when the scene rotates. No extra geometry or UVs needed.
      vLayerPatternPosition = patternPosition.xyz;
      #include <project_vertex>
    `,
    );
    shader.fragmentShader =
      `
      varying vec3 vLayerPatternPosition;
      uniform float layerPatternType;
      uniform float layerPatternTopZ;
      uniform float layerPatternPitch;
      uniform float layerPatternContrast;
      uniform float layerPatternEnabled;
      float patternLine(float value) {
        float distanceToLine = abs(fract(value + 0.5) - 0.5);
        float aa = max(fwidth(value), 0.001);
        return 1.0 - smoothstep(0.055 - aa, 0.055 + aa, distanceToLine);
      }
    ` + shader.fragmentShader;
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <color_fragment>',
      `
      #include <color_fragment>
      vec2 patternUV = vLayerPatternPosition.xy / layerPatternPitch;
      vec2 footprint = fwidth(patternUV);
      float patternFade = 1.0 - smoothstep(0.12, 0.3, max(footprint.x, footprint.y));
      vec3 patternNormal = normalize(cross(dFdx(vLayerPatternPosition), dFdy(vLayerPatternPosition)));
      // Leave sidewalls plain so their lighting continues to express thickness.
      float topSurface = smoothstep(0.7, 0.95, abs(patternNormal.z))
        * (1.0 - smoothstep(0.001, 0.01, abs(vLayerPatternPosition.z - layerPatternTopZ)));
      // Only the upper plane is patterned: a translucent well must not show
      // two offset copies of its dots through its bottom face.
      float patternInk = 0.0;
      if (layerPatternType < 0.5) {
        vec2 dotUV = fract(patternUV + 0.5) - 0.5;
        float aa = max(length(footprint), 0.001);
        patternInk = 1.0 - smoothstep(0.12 - aa, 0.12 + aa, length(dotUV));
      } else if (layerPatternType < 1.5) {
        patternInk = patternLine((patternUV.x - patternUV.y) * 0.707107);
      } else if (layerPatternType < 2.5) {
        patternInk = patternLine((patternUV.x + patternUV.y) * 0.707107);
      } else if (layerPatternType < 3.5) {
        patternInk = patternLine(patternUV.y);
      } else if (layerPatternType < 4.5) {
        patternInk = max(patternLine(patternUV.x), patternLine(patternUV.y));
      } else if (layerPatternType < 5.5) {
        patternInk = max(patternLine((patternUV.x - patternUV.y) * 0.707107), patternLine((patternUV.x + patternUV.y) * 0.707107));
      } else {
        vec2 crossUV = abs(fract(patternUV + 0.5) - 0.5);
        float aa = max(length(footprint), 0.001);
        patternInk = (1.0 - smoothstep(0.055 - aa, 0.055 + aa, min(crossUV.x, crossUV.y)))
          * (1.0 - smoothstep(0.24 - aa, 0.24 + aa, max(crossUV.x, crossUV.y)));
      }
      diffuseColor.rgb *= 1.0 - layerPatternEnabled * layerPatternContrast * patternInk * patternFade * topSurface;
    `,
    );
  };
  material.customProgramCacheKey = () => 'tr1um-coarse-patterns-v1';
}

export function setLayerPatternEnabled(material, enabled) {
  if (material.userData.patternUniforms) {
    material.userData.patternUniforms.layerPatternEnabled.value = enabled ? 1 : 0;
  }
}
