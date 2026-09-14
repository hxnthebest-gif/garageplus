'use client';

import React, { useState } from 'react';
import { TURKISH_FAQS } from '@/data/faq';
import { SpotlightCard } from '@/components/MagicUI/SpotlightCard';

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(TURKISH_FAQS[0].id);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="sss" className="relative w-full py-28 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase font-bold">
            SIKÇA SORULAN SORULAR
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[var(--text-primary)] uppercase">
            MERAK EDİLENLER
          </h2>
          <p className="text-xs text-[var(--text-secondary)] font-light max-w-lg mx-auto">
            PPF kaplama, garanti şartları, PDR ve araç koruma süreçleri hakkında en çok yöneltilen sorular.
          </p>
        </div>

        {/* FAQ Accordion List with Spotlight */}
        <div className="space-y-4">
          {TURKISH_FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <SpotlightCard
                key={faq.id}
                className={`border transition-all duration-200 ${
                  isOpen
                    ? 'border-emerald-500/50 bg-[var(--card-bg)] shadow-xl ring-1 ring-emerald-500/20'
                    : 'border-[var(--border-subtle)] bg-[var(--card-bg)] hover:border-[var(--border-strong)]'
                }`}
              >
                <button
                  onClick={() => toggleOpen(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-sans font-bold uppercase tracking-tight text-[var(--text-primary)]">
                    {faq.question}
                  </span>
                  <span className="text-sm font-mono text-emerald-400 font-bold flex-shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-[var(--text-secondary)] font-light leading-relaxed border-t border-[var(--border-subtle)] pt-4">
                    {faq.answer}
                  </div>
                )}
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
