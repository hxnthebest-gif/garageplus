'use client';

import React from 'react';

export function ManifestoSection() {
  const threats = [
    {
      title: 'KINETIC STONE CHIPS',
      desc: 'Airborne stones propelled at 80+ mph generate thousands of pounds per square inch of localized impact force, easily chipping through factory paint down to bare metal.'
    },
    {
      title: 'CHEMICAL CONTAMINATION',
      desc: 'Acidic bird droppings, insect acids, and road salt cause permanent chemical clearcoat etching within hours under direct sunlight.'
    },
    {
      title: 'WASH SWIRL MARRING',
      desc: 'Micro-abrasive dirt particles dragged across soft clearcoats create spiderwebbing swirl patterns that rob the vehicle of optical depth and reflection.'
    },
    {
      title: 'UV OXIDATION & FADE',
      desc: 'High-frequency ultraviolet radiation degrades clearcoat resins over time, resulting in clouding, chalking, and premature paint failure.'
    }
  ];

  return (
    <section id="philosophy" className="relative w-full py-32 bg-[#060608] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Massive Bold Editorial Statement */}
        <div className="max-w-5xl mb-24">
          <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase mb-4">
            06 / THE PHILOSOPHY OF PRESERVATION
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-white leading-[1.04] uppercase">
            YOUR PAINT TAKES THE HIT. <br />
            <span className="text-neutral-500 font-light">THE FILM DOESN&apos;T.</span>
          </h2>
        </div>

        {/* 4 Threat Pillars in Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12 border-t border-white/[0.08]">
          {threats.map((item, idx) => (
            <div key={idx} className="space-y-3">
              <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                DEFENSE VECTOR 0{idx + 1}
              </div>
              <h3 className="text-xs font-sans font-bold tracking-tight text-white uppercase">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
