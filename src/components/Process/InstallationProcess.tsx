'use client';

import React from 'react';
import { TURKISH_PROCESS_STAGES } from '@/data/process';
import { SpotlightCard } from '@/components/MagicUI/SpotlightCard';

export function InstallationProcess() {
  return (
    <section id="surec" className="relative w-full py-28 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase mb-2">
              07 / UYGULAMA METODOLOJİSİ
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[var(--text-primary)] uppercase">
              6 AŞAMALI KUSURSUZ İŞÇİLİK
            </h2>
          </div>

          <p className="max-w-md text-xs text-[var(--text-secondary)] font-light leading-relaxed">
            Her araç, iklimlendirilmiş ve tozdan arındırılmış temiz oda koşullarında sertifikalı ustalarımızca adeta bir sanat eseri titizliğiyle işlenir.
          </p>
        </div>

        {/* 6-Step Editorial Grid with Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TURKISH_PROCESS_STAGES.map((step) => (
            <SpotlightCard
              key={step.step}
              className="p-8 border border-[var(--border-subtle)] bg-[var(--card-bg)] space-y-4 group shadow-lg hover:border-[var(--border-strong)]"
            >
              <div className="flex items-baseline justify-between border-b border-[var(--border-subtle)] pb-3">
                <span className="text-3xl font-mono font-bold text-neutral-500 group-hover:text-emerald-400 transition-colors">
                  {step.step}
                </span>
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-400 font-bold">
                  AŞAMA {step.step}
                </span>
              </div>

              <h3 className="text-sm font-sans font-bold tracking-tight text-[var(--text-primary)] uppercase">
                {step.title}
              </h3>

              <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                {step.subtitle}
              </div>

              <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                {step.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
