'use client';

import React, { useState } from 'react';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { TURKISH_BODY_PANELS } from '@/data/panels';

type EnvironmentType = 'garage' | 'white_studio' | 'daylight';
type ViewAngle = 'front' | 'rear';

interface HotspotCoord {
  id: string;
  name: string;
  x: string;
  y: string;
}

const FRONT_HOTSPOTS: HotspotCoord[] = [
  { id: 'kaput', name: 'Kaput', x: '35%', y: '58%' },
  { id: 'on_tampon', name: 'Ön Tampon', x: '24%', y: '68%' },
  { id: 'camurluk_fl', name: 'Sol Ön Çamurluk', x: '48%', y: '64%' },
  { id: 'camurluk_fr', name: 'Sağ Ön Çamurluk', x: '28%', y: '52%' },
  { id: 'kapi_fl', name: 'Sol Ön Kapı', x: '61%', y: '58%' },
  { id: 'kapi_rl', name: 'Sol Arka Kapı', x: '74%', y: '56%' },
  { id: 'ayna_l', name: 'Sol Yan Ayna', x: '59%', y: '45%' },
  { id: 'tavan', name: 'Tavan', x: '62%', y: '36%' }
];

const REAR_HOTSPOTS: HotspotCoord[] = [
  { id: 'bagaj', name: 'Bagaj Kapağı', x: '25%', y: '46%' },
  { id: 'arka_tampon', name: 'Arka Tampon', x: '22%', y: '70%' },
  { id: 'kapi_rl', name: 'Sol Arka Kapı', x: '63%', y: '55%' },
  { id: 'kapi_fl', name: 'Sol Ön Kapı', x: '75%', y: '52%' },
  { id: 'tavan', name: 'Tavan', x: '54%', y: '28%' },
  { id: 'ayna_l', name: 'Sol Yan Ayna', x: '78%', y: '40%' }
];

const ENVIRONMENTS: { id: EnvironmentType; label: string; bgImage: string }[] = [
  { id: 'garage', label: 'Detay Atölyesi', bgImage: '/environments/garage.jpg' },
  { id: 'white_studio', label: 'Beyaz Stüdyo', bgImage: '/environments/white_studio.jpg' },
  { id: 'daylight', label: 'Gündüz Showroom', bgImage: '/environments/daylight.jpg' }
];

export function VehicleImageViewer() {
  const vehicleType = useConfiguratorStore((s) => s.vehicleType);
  const globalPPFFinish = useConfiguratorStore((s) => s.globalPPFFinish);
  const selectedPanelIds = useConfiguratorStore((s) => s.selectedPanelIds);
  const panelProtections = useConfiguratorStore((s) => s.panelProtections);
  const togglePanelSelection = useConfiguratorStore((s) => s.togglePanelSelection);
  const isInstallingPPF = useConfiguratorStore((s) => s.isInstallingPPF);
  const getTotalProtectedPanels = useConfiguratorStore((s) => s.getTotalProtectedPanels);

  const [activeAngle, setActiveAngle] = useState<ViewAngle>('front');
  const [activeEnv, setActiveEnv] = useState<EnvironmentType>('garage');

  const protectedCount = getTotalProtectedPanels();
  const isSatin = globalPPFFinish === 'satin';

  // Determine active car image with transparent alpha PNG cutouts
  const getCarImageSrc = () => {
    if (vehicleType === 'sedan') {
      return activeAngle === 'front' ? '/vehicles/sedan_front.png' : '/vehicles/sedan_rear.png';
    }
    return activeAngle === 'front' ? '/vehicles/suv_front.png' : '/vehicles/suv_rear.png';
  };

  const activeHotspots = activeAngle === 'front' ? FRONT_HOTSPOTS : REAR_HOTSPOTS;
  const currentEnv = ENVIRONMENTS.find((e) => e.id === activeEnv) || ENVIRONMENTS[0];

  // Dynamic car lighting grading to match chosen studio atmosphere
  const getCarLightingFilter = () => {
    switch (activeEnv) {
      case 'white_studio':
        return 'brightness-[1.03] contrast-[1.02] drop-shadow-[0_25px_45px_rgba(0,0,0,0.45)]';
      case 'daylight':
        return 'brightness-[1.06] contrast-[1.05] drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]';
      case 'garage':
      default:
        return 'brightness-[1.0] contrast-[1.08] drop-shadow-[0_30px_55px_rgba(0,0,0,0.85)]';
    }
  };

  return (
    <div className="relative w-full h-[440px] sm:h-[540px] lg:h-[600px] bg-[var(--bg-secondary)] rounded-none overflow-hidden select-none border border-[var(--border-subtle)] shadow-2xl flex flex-col justify-between transition-colors duration-300">
      {/* 1. Switchable Studio/Garage/White/Day/Night Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 scale-105"
        style={{ backgroundImage: `url(${currentEnv.bgImage})` }}
      />

      {/* Subtle Contrast Grade Overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
          activeEnv === 'white_studio' ? 'bg-white/10' : 'bg-black/10'
        }`}
      />

      {/* 2. Top Bar: Angle Switcher & Background Lighting Switcher */}
      <div className="relative z-30 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        {/* Left: View Angle Pill */}
        <div className="flex items-center gap-1 bg-black/80 dark:bg-black/80 light:bg-white/90 backdrop-blur-md p-1 border border-white/20 dark:border-white/20 light:border-black/10 rounded-full shadow-lg">
          <button
            type="button"
            onClick={() => setActiveAngle('front')}
            className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold transition-all cursor-pointer ${
              activeAngle === 'front'
                ? 'bg-white text-black shadow-md'
                : 'text-neutral-300 hover:text-white dark:text-neutral-400 dark:hover:text-white light:text-neutral-600 light:hover:text-black'
            }`}
          >
            Ön 3/4 Açı
          </button>
          <button
            type="button"
            onClick={() => setActiveAngle('rear')}
            className={`px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold transition-all cursor-pointer ${
              activeAngle === 'rear'
                ? 'bg-white text-black shadow-md'
                : 'text-neutral-300 hover:text-white dark:text-neutral-400 dark:hover:text-white light:text-neutral-600 light:hover:text-black'
            }`}
          >
            Arka 3/4 Açı
          </button>
        </div>

        {/* Right: Environment Preset Switcher */}
        <div className="flex items-center gap-1 bg-black/80 dark:bg-black/80 light:bg-white/90 backdrop-blur-md p-1 border border-white/20 dark:border-white/20 light:border-black/10 rounded-full shadow-lg">
          {ENVIRONMENTS.map((env) => (
            <button
              key={env.id}
              type="button"
              onClick={() => setActiveEnv(env.id)}
              className={`px-2.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1 ${
                activeEnv === env.id
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-neutral-300 hover:text-white dark:text-neutral-400 dark:hover:text-white light:text-neutral-600 light:hover:text-black'
              }`}
              title={env.label}
            >
              <span>{env.icon}</span>
              <span className="hidden md:inline">{env.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Main Center Vehicle Image & Interactive Highlight Hotspots */}
      <div className="relative z-20 flex-1 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
        <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getCarImageSrc()}
            alt={vehicleType === 'sedan' ? '4-Kapı Sedan Araç' : 'Lüks SUV Araç'}
            className={`w-full h-auto max-h-[88%] object-contain pointer-events-none transition-all duration-500 ${getCarLightingFilter()}`}
          />

          {/* Optical PPF Gloss / Satin Specular Shield Layer */}
          {protectedCount > 0 && (
            <div
              className={`absolute inset-0 pointer-events-none transition-all duration-500 rounded-lg ${
                isSatin
                  ? 'opacity-40 mix-blend-multiply bg-neutral-950/20'
                  : 'opacity-50 mix-blend-overlay bg-gradient-to-tr from-transparent via-white/[0.2] to-transparent'
              } ${isInstallingPPF ? 'scale-[1.01] brightness-125' : ''}`}
            />
          )}

          {/* Interactive Visual Panel Hotspots */}
          {activeHotspots.map((spot) => {
            const isSelected = selectedPanelIds.includes(spot.id);
            const isProtected = panelProtections[spot.id]?.hasPPF;
            const isHighlighted = isSelected || isProtected;

            return (
              <div
                key={spot.id}
                style={{ left: spot.x, top: spot.y }}
                onClick={(e) => {
                  e.stopPropagation();
                  togglePanelSelection(spot.id);
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
              >
                {/* When Selected or Protected: Prominent Pill Badge */}
                {isHighlighted ? (
                  <div
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-200 shadow-2xl backdrop-blur-md scale-105 ${
                      isProtected
                        ? 'bg-emerald-950/95 border-emerald-400 text-emerald-300 ring-2 ring-emerald-500/50 shadow-[0_0_16px_rgba(52,211,153,0.5)]'
                        : 'bg-amber-950/95 border-amber-400 text-amber-300 ring-2 ring-amber-500/50 shadow-[0_0_16px_rgba(251,191,36,0.5)] animate-pulse'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isProtected ? 'bg-emerald-400' : 'bg-amber-400 animate-ping'
                      }`}
                    />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-tight whitespace-nowrap">
                      {spot.name}
                    </span>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/40">
                      {isProtected ? 'PPF' : 'SECİLİ'}
                    </span>
                  </div>
                ) : (
                  /* When Unselected: Sleek Minimal Interactive Target Beacon */
                  <div className="relative flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-black/70 border border-white/40 group-hover:border-white group-hover:bg-black/90 group-hover:scale-125 transition-all flex items-center justify-center shadow-lg backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-amber-400 transition-colors" />
                    </div>

                    {/* Hover Tooltip Card */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 bg-black/95 border border-white/30 text-white text-[10px] font-mono uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl rounded-sm z-40">
                      <span>+ {spot.name} Seç</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Bottom HUD Status Bar */}
      <div className="relative z-30 p-3 sm:p-4 flex items-center justify-between bg-gradient-to-t from-black/85 via-black/50 to-transparent">
        {/* Active Vehicle Badge */}
        <div className="flex items-center gap-2 bg-black/80 dark:bg-black/80 light:bg-white/90 border border-white/20 dark:border-white/20 light:border-black/10 px-3 py-1.5 rounded-none backdrop-blur-md shadow-md">
          <span className="text-xs font-mono font-bold text-white dark:text-white light:text-black uppercase tracking-wider">
            {vehicleType === 'sedan' ? '4-KAPI SEDAN (BMW / AUDI)' : 'LÜKS SUV (X5 / Q7)'}
          </span>
        </div>

        {/* Protected Panels Count Badge */}
        <div
          className={`px-3.5 py-1.5 border backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-widest transition-all ${
            protectedCount > 0
              ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.3)]'
              : 'bg-black/80 dark:bg-black/80 light:bg-white/90 border-white/20 dark:border-white/20 light:border-black/10 text-neutral-300 dark:text-neutral-400 light:text-neutral-700'
          }`}
        >
          <span>{protectedCount} / {TURKISH_BODY_PANELS.length} PANEL PPF KORUMASINDA</span>
        </div>
      </div>
    </div>
  );
}
