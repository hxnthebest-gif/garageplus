import { create } from 'zustand';
import { VehicleType, PPFFinish, PaintColor, PanelProtectionState } from '@/lib/car-config/types';
import { TURKISH_BODY_PANELS, TURKISH_PAINT_PALETTE } from '@/data/panels';
import { TURKISH_PACKAGES } from '@/data/packages';
import { PRICING_CONFIG, formatPrice } from '@/data/pricing';

interface ConfiguratorState {
  vehicleType: VehicleType;
  selectedPanelIds: string[];
  hoveredPanelId: string | null;
  globalPaint: PaintColor;
  globalPPFFinish: PPFFinish;
  panelProtections: Record<string, PanelProtectionState>;
  activePackageId: string;
  isInstallingPPF: boolean;
  quoteModalOpen: boolean;

  // Actions
  setVehicleType: (type: VehicleType) => void;
  togglePanelSelection: (panelId: string) => void;
  selectPanels: (panelIds: string[]) => void;
  clearSelection: () => void;
  selectAllPanels: () => void;
  setHoveredPanelId: (panelId: string | null) => void;
  setGlobalPaint: (paint: PaintColor) => void;
  setGlobalPPFFinish: (finish: PPFFinish) => void;
  applyPPFToSelectedPanels: () => void;
  removePPFFromSelectedPanels: () => void;
  applyFullBodyPPF: () => void;
  clearAllPPF: () => void;
  applyPackage: (packageId: string) => void;
  setQuoteModalOpen: (open: boolean) => void;
  
  // Helpers
  getTotalProtectedPanels: () => number;
  getSelectedPanelsNames: () => string[];
  getProtectedPanelsNames: () => string[];
  getPriceEstimateDisplay: () => string;
}

const initializePanelProtections = (): Record<string, PanelProtectionState> => {
  const initial: Record<string, PanelProtectionState> = {};
  TURKISH_BODY_PANELS.forEach((panel) => {
    initial[panel.id] = {
      hasPPF: false,
      isAnimating: false,
      animationProgress: 0,
      finish: 'gloss'
    };
  });
  return initial;
};

export const useConfiguratorStore = create<ConfiguratorState>((set, get) => ({
  vehicleType: 'sedan',
  selectedPanelIds: [],
  hoveredPanelId: null,
  globalPaint: TURKISH_PAINT_PALETTE[0], // Obsidyen Metalik Siyah
  globalPPFFinish: 'gloss',
  panelProtections: initializePanelProtections(),
  activePackageId: 'custom',
  isInstallingPPF: false,
  quoteModalOpen: false,

  setVehicleType: (type) =>
    set({
      vehicleType: type,
      selectedPanelIds: []
    }),

  togglePanelSelection: (panelId) => {
    const state = get();
    const current = new Set(state.selectedPanelIds);
    if (current.has(panelId)) {
      current.delete(panelId);
    } else {
      current.add(panelId);
    }
    set({ selectedPanelIds: Array.from(current) });
  },

  selectPanels: (panelIds) => set({ selectedPanelIds: panelIds }),

  clearSelection: () => set({ selectedPanelIds: [] }),

  selectAllPanels: () =>
    set({
      selectedPanelIds: TURKISH_BODY_PANELS.map((p) => p.id)
    }),

  setHoveredPanelId: (panelId) => set({ hoveredPanelId: panelId }),

  setGlobalPaint: (paint) => set({ globalPaint: paint }),

  setGlobalPPFFinish: (finish) =>
    set((state) => {
      const updated = { ...state.panelProtections };
      Object.keys(updated).forEach((key) => {
        updated[key] = {
          ...updated[key],
          finish
        };
      });
      return { globalPPFFinish: finish, panelProtections: updated };
    }),

  applyPPFToSelectedPanels: () => {
    const state = get();
    if (state.selectedPanelIds.length === 0) return;

    set({ isInstallingPPF: true });

    setTimeout(() => {
      const updated = { ...state.panelProtections };
      state.selectedPanelIds.forEach((id) => {
        updated[id] = {
          ...updated[id],
          hasPPF: true,
          finish: state.globalPPFFinish,
          animationProgress: 1,
          isAnimating: false
        };
      });

      set({
        panelProtections: updated,
        activePackageId: 'custom',
        isInstallingPPF: false
      });
    }, 400);
  },

  removePPFFromSelectedPanels: () => {
    const state = get();
    const updated = { ...state.panelProtections };
    state.selectedPanelIds.forEach((id) => {
      updated[id] = {
        ...updated[id],
        hasPPF: false
      };
    });
    set({
      panelProtections: updated,
      activePackageId: 'custom'
    });
  },

  applyFullBodyPPF: () => {
    const updated: Record<string, PanelProtectionState> = {};
    TURKISH_BODY_PANELS.forEach((panel) => {
      updated[panel.id] = {
        hasPPF: true,
        isAnimating: false,
        animationProgress: 1,
        finish: get().globalPPFFinish
      };
    });
    set({
      panelProtections: updated,
      selectedPanelIds: TURKISH_BODY_PANELS.map((p) => p.id),
      activePackageId: 'komple'
    });
  },

  clearAllPPF: () => {
    const updated: Record<string, PanelProtectionState> = {};
    TURKISH_BODY_PANELS.forEach((panel) => {
      updated[panel.id] = {
        hasPPF: false,
        isAnimating: false,
        animationProgress: 1,
        finish: get().globalPPFFinish
      };
    });
    set({
      panelProtections: updated,
      selectedPanelIds: [],
      activePackageId: 'custom'
    });
  },

  applyPackage: (packageId) => {
    const pkg = TURKISH_PACKAGES.find((p) => p.id === packageId);
    if (!pkg) return;

    if (packageId === 'custom') {
      set({ activePackageId: 'custom' });
      return;
    }

    const updated: Record<string, PanelProtectionState> = {};
    TURKISH_BODY_PANELS.forEach((panel) => {
      const isIncluded = pkg.includedPanelIds.includes(panel.id);
      updated[panel.id] = {
        hasPPF: isIncluded,
        isAnimating: false,
        animationProgress: 1,
        finish: get().globalPPFFinish
      };
    });

    set({
      activePackageId: packageId,
      panelProtections: updated,
      selectedPanelIds: pkg.includedPanelIds
    });
  },

  setQuoteModalOpen: (open) => set({ quoteModalOpen: open }),

  getTotalProtectedPanels: () => {
    const protections = get().panelProtections;
    return Object.values(protections).filter((p) => p?.hasPPF).length;
  },

  getSelectedPanelsNames: () => {
    const selectedIds = get().selectedPanelIds;
    return TURKISH_BODY_PANELS.filter((p) => selectedIds.includes(p.id)).map((p) => p.name);
  },

  getProtectedPanelsNames: () => {
    const protections = get().panelProtections;
    return TURKISH_BODY_PANELS.filter((p) => protections[p.id]?.hasPPF).map((p) => p.name);
  },

  getPriceEstimateDisplay: () => {
    const state = get();
    const activePkg = TURKISH_PACKAGES.find((p) => p.id === state.activePackageId);

    if (activePkg && activePkg.id !== 'custom') {
      const pkgConfig = PRICING_CONFIG.ppfPackages[activePkg.id as keyof typeof PRICING_CONFIG.ppfPackages];
      if (pkgConfig) {
        const price = pkgConfig[state.vehicleType];
        if (price !== null && price > 0) {
          return formatPrice(price);
        }
      }
    }

    // Özel panel seçimi durumunda
    let hasPrice = false;
    let sum = 0;
    TURKISH_BODY_PANELS.forEach((panel) => {
      if (state.panelProtections[panel.id]?.hasPPF) {
        const pConf = PRICING_CONFIG.ppfPanels[panel.id];
        if (pConf && pConf[state.vehicleType] !== null) {
          hasPrice = true;
          sum += pConf[state.vehicleType] || 0;
        }
      }
    });

    if (hasPrice && sum > 0) {
      return formatPrice(sum);
    }

    return 'Teklif Alın';
  }
}));
