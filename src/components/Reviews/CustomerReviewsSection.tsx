'use client';

import React from 'react';
import { GOOGLE_REVIEWS_DATA } from '@/data/reviews';
import { BUSINESS_INFO } from '@/data/business';
import { SpotlightCard } from '@/components/MagicUI/SpotlightCard';

export function CustomerReviewsSection() {
  return (
    <section id="yorumlar" className="relative w-full py-28 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase mb-2">
              10 / MÜŞTERİ DENEYİMLERİ
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[var(--text-primary)] uppercase">
              GOOGLE YORUMLARI
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-amber-400 text-xs font-mono font-bold tracking-widest">5.0</span>
              <span className="text-xs font-mono font-bold text-[var(--text-primary)]">5.0 / 5.0</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] font-light">
              {GOOGLE_REVIEWS_DATA.subText}
            </p>
          </div>
        </div>

        {/* Reviews Grid with 21st.dev Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {GOOGLE_REVIEWS_DATA.reviews.map((rev) => (
            <SpotlightCard
              key={rev.id}
              className="p-8 border border-[var(--border-subtle)] bg-[var(--card-bg)] flex flex-col justify-between hover:border-[var(--border-strong)] transition-all space-y-6 shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    <span className="text-amber-400 text-[10px] font-mono font-bold">{rev.rating}.0 / 5.0</span>
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 border border-emerald-500/30 px-2 py-0.5 bg-emerald-500/10 font-bold rounded-sm">
                    {rev.dateRelative}
                  </span>
                </div>

                <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <div>
                  <div className="text-xs font-sans font-bold text-[var(--text-primary)]">{rev.author}</div>
                  {rev.vehicleModel && (
                    <div className="text-[10px] font-mono text-[var(--text-muted)]">{rev.vehicleModel}</div>
                  )}
                </div>
                <span className="text-[9px] font-mono text-[var(--text-muted)] uppercase">
                  {rev.serviceType}
                </span>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Google Business Direct Link */}
        <div className="text-center pt-4">
          <a
            href={BUSINESS_INFO.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)] hover:text-emerald-400 transition-colors"
          >
            <span>TÜM GOOGLE İŞLETME YORUMLARINI İNCELEYİN</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
