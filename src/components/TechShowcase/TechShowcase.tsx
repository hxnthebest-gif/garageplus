'use client';

import React from 'react';
import { SelfHealingDemo } from './SelfHealingDemo';
import { HydrophobicSimulation } from './HydrophobicSimulation';
import { Shield, Sparkles, Zap, Award, Layers, CheckCircle } from 'lucide-react';

export function TechShowcase() {
  const features = [
    {
      icon: Shield,
      title: '8.5 Mil Multi-Layer Armor',
      desc: 'Thermoplastic polyurethane (TPU) engineered to absorb and dissipate gravel energy without puncturing the factory paint.'
    },
    {
      icon: Sparkles,
      title: 'Optical Diamond Clarity',
      desc: 'Formulated with low refractive index polymers ensuring zero orange-peel distortion and true paint color fidelity.'
    },
    {
      icon: Zap,
      title: 'Anti-Yellowing UV Matrix',
      desc: 'Advanced UV stabilizers prevent oxidation, discoloration, and hazing even under extreme desert sunlight conditions.'
    },
    {
      icon: Award,
      title: '10-Year Studio Warranty',
      desc: 'Guaranteed against delamination, bubbling, cracking, yellowing, and peeling with full transferable documentation.'
    }
  ];

  return (
    <section id="technology" className="relative w-full py-24 bg-[#08080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Material Science</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            ENGINEERED TO BE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">INVISIBLE</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Our aerospace-grade Paint Protection Film provides an impermeable physical barrier without altering the radiant appearance or contour lines of your vehicle.
          </p>
        </div>

        {/* 2 Interactive Live Lab Demonstrations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <SelfHealingDemo />
          <HydrophobicSimulation />
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
