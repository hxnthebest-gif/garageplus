'use client';

import React from 'react';

interface HeroStoryOverlayProps {
  progress: number;
  onScrollToConfigurator: () => void;
  onExploreProtection: () => void;
}

export function HeroStoryOverlay({
  progress,
  onScrollToConfigurator,
  onExploreProtection
}: HeroStoryOverlayProps) {
  // Phase 1: 0% to 26%
  const p1 = progress < 0.28 ? Math.max(0, 1 - progress / 0.22) : 0;

  // Phase 2: 30% to 58%
  const p2 =
    progress >= 0.26 && progress <= 0.6
      ? progress < 0.43
        ? (progress - 0.26) / 0.17
        : 1 - (progress - 0.43) / 0.17
      : 0;

  // Phase 3: 62% to 88%
  const p3 =
    progress >= 0.58 && progress <= 0.88
      ? progress < 0.73
        ? (progress - 0.58) / 0.15
        : 1 - (progress - 0.73) / 0.15
      : 0;

  // Phase 4: 86% to 100%
  const p4 = progress >= 0.86 ? Math.min(1, (progress - 0.86) / 0.12) : 0;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-8 sm:p-14 lg:p-20">
      {/* Top Meta Indicator */}
      <div className="flex items-center justify-between">
        <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
          01 / ARRIVAL & INSPECTION
        </div>
        <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase">
          SCROLL SEQUENCE [{Math.round(progress * 100)}%]
        </div>
      </div>

      {/* Main Bottom Editorial Typography Block */}
      <div className="relative w-full max-w-4xl pb-4">
        {/* PHASE 1: Main Arrival */}
        <div
          style={{
            opacity: p1,
            transform: `translateY(${(1 - p1) * 16}px)`,
            pointerEvents: p1 > 0.4 ? 'auto' : 'none'
          }}
          className="transition-all duration-300 space-y-5"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
            AESTHETIC PRESERVATION ATELIER
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-white leading-[1.05]">
            PROTECTION, <br />
            <span className="text-neutral-300 font-light">PERFECTED.</span>
          </h1>

          <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
            Aerospace-grade Paint Protection Film engineered to defend factory clearcoat with optical clarity and invisible edge craftsmanship.
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreProtection}
              className="px-6 py-3 bg-white text-black text-[10px] font-mono uppercase tracking-[0.22em] font-semibold hover:bg-neutral-200 transition-colors"
            >
              EXPLORE PROTECTION
            </button>

            <button
              onClick={onScrollToConfigurator}
              className="px-6 py-3 border border-white/25 text-white text-[10px] font-mono uppercase tracking-[0.22em] hover:border-white hover:bg-white/5 transition-colors"
            >
              CONFIGURE VEHICLE
            </button>
          </div>
        </div>

        {/* PHASE 2: In Motion */}
        <div
          style={{
            opacity: p2,
            transform: `translateY(${(1 - p2) * 16}px)`,
            pointerEvents: p2 > 0.4 ? 'auto' : 'none'
          }}
          className="absolute bottom-0 left-0 transition-all duration-300 space-y-4"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
            SURFACE INTEGRITY
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-white leading-tight">
            ENGINEERED AGAINST <br />
            <span className="text-neutral-400 font-light">THE ELEMENTS.</span>
          </h2>
          <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
            High-velocity debris, stone chips, acid rain, and UV degradation neutralized by an 8.5 mil elastomeric polymer barrier.
          </p>
        </div>

        {/* PHASE 3: Entering Detailing Bay */}
        <div
          style={{
            opacity: p3,
            transform: `translateY(${(1 - p3) * 16}px)`,
            pointerEvents: p3 > 0.4 ? 'auto' : 'none'
          }}
          className="absolute bottom-0 left-0 transition-all duration-300 space-y-4"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
            THE CLEANROOM
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-white leading-tight">
            EVERY MICRON <br />
            <span className="text-neutral-400 font-light">ACCOUNTED FOR.</span>
          </h2>
          <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
            Custom CAD plotting matched to vehicle bodywork tolerances, installed inside a dust-evacuated, climate-controlled studio.
          </p>
        </div>

        {/* PHASE 4: Transition to Configurator */}
        <div
          style={{
            opacity: p4,
            transform: `translateY(${(1 - p4) * 16}px)`,
            pointerEvents: p4 > 0.4 ? 'auto' : 'none'
          }}
          className="absolute bottom-0 left-0 transition-all duration-300 space-y-5"
        >
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-400">
            02 / VIRTUAL ATELIER
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-white leading-tight">
            NOW, PROTECTION <br />
            <span className="text-neutral-300 font-light">BEGINS.</span>
          </h2>
          <div className="pt-2">
            <button
              onClick={onScrollToConfigurator}
              className="px-7 py-3.5 bg-white text-black text-[10px] font-mono uppercase tracking-[0.25em] font-bold hover:bg-neutral-200 transition-colors"
            >
              ENTER 3D CONFIGURATOR →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Progress Indicator */}
      <div className="w-full flex items-center justify-between pt-6 border-t border-white/[0.08]">
        <div className="text-[9px] font-mono uppercase tracking-[0.25em] text-neutral-500">
          CONTINUE SCROLLING TO TRAVEL THROUGH BAY
        </div>
        <div className="w-32 h-[1px] bg-white/15 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 bottom-0 bg-white transition-all duration-75"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
