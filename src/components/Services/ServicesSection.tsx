'use client';

import React, { useState } from 'react';
import { SERVICES } from '@/data/services';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { SpotlightCard } from '@/components/MagicUI/SpotlightCard';
import { BorderBeam } from '@/components/MagicUI/BorderBeam';

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);
  const setQuoteModalOpen = useConfiguratorStore((s) => s.setQuoteModalOpen);

  const currentService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  const scrollToConfigurator = () => {
    const el = document.getElementById('konfigurator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hizmetler" className="relative w-full py-28 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase mb-2">
              02 / UZMANLIK ALANLARIMIZ
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-[var(--text-primary)] uppercase">
              PREMIUM HİZMETLER
            </h2>
          </div>

          <p className="max-w-md text-xs text-[var(--text-secondary)] font-light leading-relaxed">
            13 yıllık uygulama tecrübemizle aracınızın orijinalliğini, estetiğini ve piyasa değerini en üst standartta koruyoruz.
          </p>
        </div>

        {/* 4 Service Selectors with 21st.dev Spotlight Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {SERVICES.map((srv) => {
            const isActive = activeTab === srv.id;
            return (
              <SpotlightCard
                key={srv.id}
                onClick={() => setActiveTab(srv.id)}
                className={`p-6 text-left border transition-all duration-300 relative group cursor-pointer ${
                  isActive
                    ? 'border-emerald-500/70 bg-[var(--card-bg)] text-[var(--text-primary)] shadow-2xl ring-1 ring-emerald-500/30'
                    : 'border-[var(--border-subtle)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono tracking-widest text-neutral-500 group-hover:text-emerald-400 transition-colors">
                    {srv.number}
                  </span>
                  {srv.badge && (
                    <span className="text-[8px] font-mono uppercase tracking-wider px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold rounded-sm">
                      {srv.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-sans font-bold uppercase tracking-tight text-[var(--text-primary)]">
                  {srv.shortTitle}
                </h3>
                <p className="text-[11px] text-[var(--text-secondary)] font-light line-clamp-2 mt-2 leading-relaxed">
                  {srv.tagline}
                </p>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-sky-400" />
                )}
              </SpotlightCard>
            );
          })}
        </div>

        {/* Active Service Showcase - Large Editorial Display with Spotlight */}
        <SpotlightCard className="p-8 sm:p-12 border border-[var(--border-subtle)] bg-[var(--card-bg)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-2xl">
          {/* Left Description & Specs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
                HİZMET DETAYI &bull; {currentService.number}
              </span>
              <h3 className="text-2xl sm:text-4xl font-sans font-bold text-[var(--text-primary)] uppercase tracking-tight">
                {currentService.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed pt-2">
                {currentService.longDescription}
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-2.5 pt-2">
              <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 block font-bold">
                UYGULAMA AVANTAJLARI &amp; STANDARTLAR
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                    <span className="font-light leading-snug">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {currentService.id === 'ppf-kaplama' ? (
                <div className="relative group">
                  <button
                    onClick={scrollToConfigurator}
                    className="relative px-6 py-3.5 bg-neutral-950 text-white dark:bg-white dark:text-black text-[10px] font-mono font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all cursor-pointer shadow-xl overflow-hidden"
                  >
                    360° PPF STÜDYODA İNCELE →
                    <BorderBeam size={90} duration={8} colorFrom="#10b981" colorTo="#38bdf8" />
                  </button>
                </div>
              ) : (
                <div className="relative group">
                  <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="relative px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all cursor-pointer shadow-xl overflow-hidden"
                  >
                    BU HİZMET İÇİN TEKLİF AL →
                    <BorderBeam size={90} duration={8} colorFrom="#ffffff" colorTo="#000000" />
                  </button>
                </div>
              )}

              <a
                href="#randevu"
                className="px-6 py-3.5 border border-neutral-400 dark:border-[var(--border-strong)] text-neutral-900 dark:text-[var(--text-primary)] font-bold text-[10px] font-mono uppercase tracking-[0.2em] hover:border-emerald-500 hover:text-emerald-600 transition-colors"
              >
                RANDEVU OLUŞTUR
              </a>
            </div>
          </div>

          {/* Right Technical Specification Table */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] space-y-5 rounded-none">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                TEKNİK PARAMETRELER
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                {currentService.shortTitle}
              </span>
            </div>

            <div className="space-y-4">
              {currentService.specs.map((sp, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-[var(--border-subtle)]">
                  <span className="text-xs text-[var(--text-secondary)]">{sp.label}</span>
                  <span className="text-xs font-mono font-medium text-[var(--text-primary)]">{sp.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                MERKEZ ADRES
              </span>
              <p className="text-xs text-[var(--text-secondary)] font-light">
                Bahçelievler Mah. Talatpaşa Cad. No:2, İstanbul
              </p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
