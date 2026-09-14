'use client';

import React from 'react';
import { TURKISH_PACKAGES, getPackagePriceDisplay } from '@/data/packages';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { SpotlightCard } from '@/components/MagicUI/SpotlightCard';
import { BorderBeam } from '@/components/MagicUI/BorderBeam';

export function PackagesSection() {
  const applyPackage = useConfiguratorStore((s) => s.applyPackage);
  const vehicleType = useConfiguratorStore((s) => s.vehicleType);
  const setQuoteModalOpen = useConfiguratorStore((s) => s.setQuoteModalOpen);

  const handleSelectPackage = (packageId: string) => {
    applyPackage(packageId);
    const el = document.getElementById('konfigurator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="paketler" className="relative w-full py-28 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase mb-2">
              05 / STANDART KORUMA ŞABLONLARI
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[var(--text-primary)] uppercase">
              PPF KORUMA PAKETLERİ
            </h2>
          </div>

          <div className="text-xs font-mono text-emerald-400 uppercase tracking-[0.2em] font-bold">
            STIL TECH 210 MICRON &bull; 7 YIL YAZILI GARANTİ
          </div>
        </div>

        {/* 3-Column Editorial Grid with 21st.dev Spotlight & Border Beam */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TURKISH_PACKAGES.map((pkg, idx) => {
            const priceText = getPackagePriceDisplay(pkg.id, vehicleType);
            const numberLabel = `0${idx + 1}`;
            const isFeatured = pkg.id === 'komple-ppf';

            return (
              <SpotlightCard
                key={pkg.id}
                spotlightColor={isFeatured ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.08)'}
                className={`flex flex-col justify-between p-8 sm:p-10 border transition-all duration-300 relative rounded-none shadow-2xl ${
                  isFeatured
                    ? 'border-emerald-500/70 bg-[var(--card-bg)] text-[var(--text-primary)] ring-1 ring-emerald-500/40'
                    : 'border-[var(--border-subtle)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]'
                }`}
              >
                {isFeatured && (
                  <BorderBeam size={150} duration={10} colorFrom="#10b981" colorTo="#38bdf8" />
                )}

                <div>
                  <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-[var(--border-subtle)]">
                    <span className="text-2xl font-mono font-bold text-neutral-500">
                      {numberLabel}
                    </span>
                    <span className="text-sm font-mono font-bold text-emerald-400">
                      {priceText}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-sans font-bold tracking-tight text-[var(--text-primary)] uppercase">
                      {pkg.shortName}
                    </h3>
                    {pkg.badge && (
                      <span className="text-[8px] font-mono uppercase tracking-wider px-2 py-0.5 border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 font-bold rounded-sm">
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed mb-8">
                    {pkg.description}
                  </p>

                  <div className="space-y-3 mb-10 text-[11px]">
                    <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-400 font-bold mb-2">
                      PAKET ÖZELLİKLERİ
                    </div>
                    {pkg.specs.map((sp, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between py-1.5 border-b border-[var(--border-subtle)]">
                        <span className="text-[var(--text-secondary)]">{sp.label}</span>
                        <span className="font-mono text-[var(--text-primary)] font-semibold">{sp.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-[var(--border-subtle)]">
                  <button
                    onClick={() => handleSelectPackage(pkg.id)}
                    className="w-full py-3.5 border border-[var(--border-strong)] hover:border-emerald-400 text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--text-primary)] hover:bg-emerald-500 hover:text-black transition-all duration-300 text-center font-bold cursor-pointer shadow-lg"
                  >
                    360° STÜDYODA YÜKLE →
                  </button>

                  <button
                    onClick={() => {
                      applyPackage(pkg.id);
                      setQuoteModalOpen(true);
                    }}
                    className="w-full py-2.5 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--text-primary)] text-center cursor-pointer"
                  >
                    Doğrudan Teklif İste
                  </button>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
