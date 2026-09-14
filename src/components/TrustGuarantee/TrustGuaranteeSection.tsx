'use client';

import React from 'react';
import { BUSINESS_INFO } from '@/data/business';
import { SpotlightCard } from '@/components/MagicUI/SpotlightCard';
import { BorderBeam } from '@/components/MagicUI/BorderBeam';

export function TrustGuaranteeSection() {
  const pillars = [
    {
      num: '210 μm',
      title: 'STIL TECH TPU ZIRHI',
      detail: 'Piyasadaki standart ince filmlerin aksine 210 mikron elastik yapısıyla taş darbelerini sönümler ve boyayı çatlamalara karşı korur.'
    },
    {
      num: '7 YIL',
      title: 'SOLMA & SARARMA GARANTİSİ',
      detail: 'UV ışınlarına ve hava şartlarına karşı sararma, çatlama ve kabarma yapmayacağına dair yazılı garanti belgesi teslim edilir.'
    },
    {
      num: '100%',
      title: 'KİL & DEMİRTOZU ARINDIRMA',
      detail: 'Montaj öncesinde kaportadaki balata tozu, katran ve asidik kirlilikler özel kimyasallarla arındırılarak sıfır hata zemini hazırlanır.'
    },
    {
      num: '13 YIL',
      title: 'İSTANBUL MERKEZLİ TECRÜBE',
      detail: 'Bahçelievler merkezimizde binlerce lüks, süper spor ve günlük aracın değerini koruyan kanıtlanmış ustalık.'
    }
  ];

  return (
    <section id="guvence" className="relative w-full py-28 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase mb-2">
              08 / GÜVEN &amp; GARANTİ STANDARTLARI
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[var(--text-primary)] uppercase">
              TAVİZSİZ KALİTE VE GÜVENCE
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--text-secondary)] font-bold">
              GARAJ PLUS PREMIUM ONAYLI
            </span>
          </div>
        </div>

        {/* 4 Trust Pillars with 21st.dev Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <SpotlightCard
              key={idx}
              className="p-8 border border-[var(--border-subtle)] bg-[var(--card-bg)] space-y-4 hover:border-[var(--border-strong)] transition-all group shadow-xl"
            >
              <div className="text-3xl sm:text-4xl font-mono font-bold text-emerald-400 group-hover:scale-105 transition-transform">
                {item.num}
              </div>

              <h3 className="text-xs font-sans font-bold uppercase tracking-tight text-[var(--text-primary)]">
                {item.title}
              </h3>

              <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                {item.detail}
              </p>
            </SpotlightCard>
          ))}
        </div>

        {/* Bottom Trust Callout Banner with 21st.dev Border Beam */}
        <SpotlightCard className="mt-12 p-8 sm:p-10 border border-[var(--border-subtle)] bg-[var(--card-bg)] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <BorderBeam size={200} duration={12} colorFrom="#10b981" colorTo="#38bdf8" />
          
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
              RESMİ GARANTİ SORGULAMA DESTEĞİ
            </span>
            <h4 className="text-lg font-sans font-bold text-[var(--text-primary)] uppercase">
              Aracınıza uygulanan filmin garanti kaydı sistemimizde tescillenir.
            </h4>
            <p className="text-xs text-[var(--text-secondary)] font-light">
              Uygulama sonrasında adınıza düzenlenen garanti sertifikası ile tüm haklarınız 7 yıl boyunca korunur.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-neutral-950 text-white dark:bg-white dark:text-black text-[10px] font-mono font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all whitespace-nowrap shadow-xl cursor-pointer"
          >
            BİLGİ AL (WHATSAPP) →
          </a>
        </SpotlightCard>
      </div>
    </section>
  );
}
