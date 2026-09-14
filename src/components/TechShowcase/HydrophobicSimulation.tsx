'use client';

import React, { useState } from 'react';
import { Droplets, Sparkles, Shield, RefreshCw } from 'lucide-react';

export function HydrophobicSimulation() {
  const [surfaceType, setSurfaceType] = useState<'unprotected' | 'ppf'>('ppf');
  const [beadAngle, setBeadAngle] = useState(115); // Contact angle in degrees

  const isProtected = surfaceType === 'ppf';

  return (
    <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">
              HYDROPHOBIC WATER CONTACT BEADING
            </span>
          </div>
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase border ${
              isProtected
                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                : 'bg-neutral-800 text-neutral-400 border-white/10'
            }`}
          >
            {isProtected ? '115° High Contact Angle' : '45° Flat Sheeting'}
          </span>
        </div>

        {/* Droplet Geometry Canvas */}
        <div className="relative w-full h-44 rounded-xl bg-gradient-to-b from-[#0c0d12] to-[#06070a] border border-white/10 overflow-hidden flex flex-col items-center justify-center">
          {/* Surface line */}
          <div className="absolute bottom-10 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          <div className="absolute bottom-6 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
            {isProtected ? 'Aegis Fluoropolymer Topcoat' : 'Unprotected Clearcoat'}
          </div>

          {/* Realistic Droplet SVG */}
          <div className="relative mb-4 flex items-center justify-center">
            {isProtected ? (
              // High surface tension bead (Sphere dome)
              <svg width="100" height="90" viewBox="0 0 100 90" className="drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                <ellipse cx="50" cy="50" rx="34" ry="32" fill="url(#dropGrad)" stroke="#7ceeff" strokeWidth="1.5" />
                <ellipse cx="40" cy="38" rx="10" ry="6" fill="#ffffff" opacity="0.75" />
                <defs>
                  <linearGradient id="dropGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#004466" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              // Collapsed flat puddle
              <svg width="140" height="60" viewBox="0 0 140 60">
                <path d="M 10 50 Q 70 20 130 50 Z" fill="url(#puddleGrad)" stroke="#667788" strokeWidth="1" />
                <ellipse cx="60" cy="40" rx="25" ry="4" fill="#ffffff" opacity="0.3" />
                <defs>
                  <linearGradient id="puddleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4a607a" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#1e293b" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Surface Mode Toggle */}
      <div className="mt-5 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral-400 font-mono">Select Surface Spec:</span>
          <span className="font-mono text-cyan-400">{isProtected ? 'Superhydrophobic' : 'Hydrophilic'}</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setSurfaceType('ppf')}
            className={`py-2 px-3 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all ${
              isProtected
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm'
                : 'bg-neutral-900 border-white/10 text-neutral-400'
            }`}
          >
            Aegis PPF (Beading)
          </button>
          <button
            onClick={() => setSurfaceType('unprotected')}
            className={`py-2 px-3 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all ${
              !isProtected
                ? 'bg-white/10 border-white/30 text-white'
                : 'bg-neutral-900 border-white/10 text-neutral-400'
            }`}
          >
            Raw Paint (Flat)
          </button>
        </div>
      </div>
    </div>
  );
}
