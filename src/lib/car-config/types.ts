export type VehicleType = 'sedan' | 'suv';

export type PPFFinish = 'gloss' | 'satin';

export type PaintFinish = 'metallic' | 'gloss' | 'matte';

export interface PaintColor {
  id: string;
  name: string;
  colorName: string;
  hex: string;
  finishType: 'metalik' | 'parlak' | 'mat_saten';
  finishLabel: string;
  roughness?: number;
  metalness?: number;
  clearcoat?: number;
  clearcoatRoughness?: number;
}

export interface PanelProtectionState {
  hasPPF: boolean;
  isAnimating: boolean;
  animationProgress: number;
  finish: PPFFinish;
  customColorHex?: string;
}
