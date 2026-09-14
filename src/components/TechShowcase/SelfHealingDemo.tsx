'use client';

import React, { useState } from 'react';
import { Flame, Sparkles, RefreshCw, ShieldCheck } from 'lucide-react';

export function SelfHealingDemo() {
  const [heatLevel, setHeatLevel] = useState(0); // 0 (scratched) to 100 (healed)

  const scratchOpacity = Math.max(0, 1 - heatLevel / 85);
  const isFullyHealed = heatLevel >= 90;

  return (
    <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">
              ELASTOMERIC SELF-HEALING
            </span>
          </div>
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase border ${
              isFullyHealed
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
            }`}
          >
            {isFullyHealed ? 'Micro-Scratches Restored' : 'Simulating Swirl Marks'}
          </span>
        </div>

        {/* Visual Film Surface Display */}
        <div className="relative w-full h-44 rounded-xl bg-gradient-to-br from-[#0c0d12] via-[#151720] to-[#08090c] border border-white/10 overflow-hidden flex items-center justify-center p-4">
          {/* Deep Metallic Automotive Base */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,229,255,0.15),transparent_60%)]" />

          {/* Micro Scratches Layer */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-200"
            style={{ opacity: scratchOpacity }}
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
          >
            {/* Fine scratch lines */}
            <path d="M 20 40 Q 120 70 220 30 T 380 90" stroke="#ffffff" strokeWidth="0.8" fill="none" opacity="0.4" />
            <path d="M 50 140 Q 180 90 280 150 T 360 80" stroke="#ffffff" strokeWidth="0.6" fill="none" opacity="0.35" />
            <path d="M 80 20 Q 160 120 260 60 T 340 160" stroke="#ffffff" strokeWidth="0.7" fill="none" opacity="0.3" />
            <path d="M 120 160 Q 200 40 310 110" stroke="#ffffff" strokeWidth="0.9" fill="none" opacity="0.4" />
            <path d="M 30 100 Q 190 140 320 40" stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.3" />
            <circle cx="210" cy="85" r="40" stroke="#ffffff" strokeWidth="0.4" strokeDasharray="4,4" fill="none" opacity="0.25" />
            <circle cx="140" cy="115" r="55" stroke="#ffffff" strokeWidth="0.3" strokeDasharray="3,3" fill="none" opacity="0.2" />
          </svg>

          {/* Thermal Glow Heat Wave when dragging */}
          {heatLevel > 10 && (
            <div
              className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-cyan-500/20 pointer-events-none transition-opacity"
              style={{ opacity: heatLevel / 100 }}
            />
          )}

          {/* Surface Status Stamp */}
          <div className="relative z-10 text-center">
            {isFullyHealed ? (
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold animate-fade-in shadow-xl">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>POLYMER MATRIX FULLY RECONFIGURED (100%)</span>
              </div>
            ) : (
              <div className="text-[11px] font-mono text-neutral-400">
                Drag the thermal slider to activate self-healing response
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Heat Control Slider */}
      <div className="mt-5 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral-400 font-mono flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Thermal Activation (Sun / Warm Water / Heat Gun)
          </span>
          <span className="font-mono font-bold text-amber-400">{heatLevel}% Heat</span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={heatLevel}
          onChange={(e) => setHeatLevel(Number(e.target.value))}
          className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
        />

        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500">
          <span>Ambient (Scratched)</span>
          <span>45°C - 65°C Thermal Healing Threshold</span>
          <span>Pristine Gloss</span>
        </div>
      </div>
    </div>
  );
}
