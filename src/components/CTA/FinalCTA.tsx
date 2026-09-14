'use client';

import React from 'react';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { BUSINESS_INFO } from '@/data/business';
import { BorderBeam } from '@/components/MagicUI/BorderBeam';
import { SpotlightCard } from '@/components/MagicUI/SpotlightCard';

export function FinalCTA() {
  const setQuoteModalOpen = useConfiguratorStore((s) => s.setQuoteModalOpen);

  const scrollToConfigurator = () => {
    const el = document.getElementById('konfigurator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-32 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center relative z-10 space-y-8">
        <div className="text-[10px] font-mono tracking-[0.3em] text-emerald-400 uppercase font-bold">
          GARAJ PLUS PREMIUM &bull; İSTANBUL BAHÇELİEVLER
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-black tracking-tight text-[var(--text-primary)] leading-tight uppercase">
          BOYANIZI KORUYUN. <br />
          <span className="text-[var(--text-secondary)] font-light">İLK GÜNKÜ GÖRÜNÜMÜYLE.</span>
        </h2>

        <p className="max-w-lg mx-auto text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
          STIL TECH 210 Micron TPU zırh ve 7 yıl solma-sararma garantisi ile aracınızın değerini güvenceye alın. Temiz oda montaj bayimiz için hemen yerinizi ayırtın.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative group w-full sm:w-auto">
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="relative w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black text-[10px] font-mono uppercase tracking-[0.25em] font-bold transition-all cursor-pointer shadow-2xl overflow-hidden"
            >
              FİYAT TEKLİFİ AL →
              <BorderBeam size={100} duration={8} colorFrom="#ffffff" colorTo="#000000" />
            </button>
          </div>

          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-[var(--border-strong)] hover:border-emerald-400 text-[var(--text-primary)] text-[10px] font-mono uppercase tracking-[0.25em] font-bold transition-all shadow-lg"
          >
            WHATSAPP DANIŞMA
          </a>

          <button
            onClick={scrollToConfigurator}
            className="w-full sm:w-auto px-6 py-4 text-[var(--text-secondary)] hover:text-emerald-400 text-[10px] font-mono uppercase tracking-[0.2em] transition-all cursor-pointer"
          >
            360° STÜDYOYU AÇ
          </button>
        </div>
      </div>
    </section>
  );
}
