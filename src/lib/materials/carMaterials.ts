import * as THREE from 'three';
import { PPFFinish, PaintColor, PanelProtectionState } from '@/lib/car-config/types';

export function getAutomotiveMaterialProps({
  paint,
  protection,
  isHovered,
  isSelected,
  showDiagnostic
}: {
  paint: PaintColor;
  protection?: PanelProtectionState;
  isHovered: boolean;
  isSelected: boolean;
  showDiagnostic?: boolean;
}) {
  const colorHex = protection?.customColorHex || paint.hex;
  const hasPPF = protection?.hasPPF ?? false;
  const finish: PPFFinish = protection?.finish || 'gloss';

  let roughness = paint.roughness ?? 0.15;
  let metalness = paint.metalness ?? 0.85;
  let clearcoat = paint.clearcoat ?? 1.0;
  let clearcoatRoughness = paint.clearcoatRoughness ?? 0.04;
  let emissive = new THREE.Color('#000000');
  let emissiveIntensity = 0;

  // Real physical PPF material properties
  if (hasPPF) {
    if (finish === 'gloss') {
      clearcoat = 1.0;
      clearcoatRoughness = 0.01; // Optically pure high gloss clearcoat
      roughness = Math.min(roughness, 0.1);
    } else if (finish === 'satin') {
      clearcoat = 0.25;
      clearcoatRoughness = 0.5;
      roughness = 0.42; // Satin stealth frosted sheen
    }
  }

  // Selected panel subtle physical highlight
  if (isSelected) {
    emissive = new THREE.Color('#38414e');
    emissiveIntensity = 0.22;
  } else if (isHovered) {
    emissive = new THREE.Color('#222830');
    emissiveIntensity = 0.15;
  }

  return {
    color: colorHex,
    roughness,
    metalness,
    clearcoat,
    clearcoatRoughness,
    emissive: emissive.getStyle(),
    emissiveIntensity,
    envMapIntensity: hasPPF ? 1.5 : 1.2,
    reflectivity: 0.98
  };
}

export const GLASS_MATERIAL_PROPS = {
  color: '#07090c',
  roughness: 0.02,
  metalness: 0.1,
  transmission: 0.88,
  transparent: true,
  opacity: 0.92,
  ior: 1.52,
  reflectivity: 0.95,
  envMapIntensity: 1.5
};

export const CARBON_FIBER_PROPS = {
  color: '#111215',
  roughness: 0.35,
  metalness: 0.3,
  clearcoat: 0.5,
  clearcoatRoughness: 0.2
};

export const CHROME_TRIM_PROPS = {
  color: '#e2e5e8',
  roughness: 0.04,
  metalness: 0.96,
  clearcoat: 1.0,
  clearcoatRoughness: 0.02
};

export const RUBBER_TIRE_PROPS = {
  color: '#141416',
  roughness: 0.88,
  metalness: 0.05
};

export const WHEEL_ALLOY_PROPS = {
  color: '#282a30',
  roughness: 0.16,
  metalness: 0.92,
  clearcoat: 0.8,
  clearcoatRoughness: 0.06
};

export const BRAKE_CALIPER_PROPS = {
  color: '#0055b8',
  roughness: 0.2,
  metalness: 0.7,
  clearcoat: 0.8
};
