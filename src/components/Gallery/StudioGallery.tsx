'use client';

import React, { useState } from 'react';
import { SpotlightCard } from '@/components/MagicUI/SpotlightCard';

const CATEGORIES = [
  { id: 'all', label: 'TÜM PROJELER' },
  { id: 'ppf', label: 'PPF KAPLAMA' },
  { id: 'renk', label: 'RENK DEĞİŞİMİ' },
  { id: 'cam_pdr', label: 'CAM FİLMİ & PDR' }
];

const ARCHIVE = [
  {
    id: '01',
    model: 'TOGG T10X &bull; 0 KM TESLİMAT',
    spec: 'KOMPLE STIL TECH 210 MICRON ULTRA GLOSS PPF',
    year: '2025',
    category: 'GÖVDE KORUMA',
    catId: 'ppf',
    aspect: 'col-span-1 lg:col-span-2 h-96',
    details: 'Fabrika boyası sıfır km korumaya alındı, 7 yıl yazılı garanti teslim edildi.'
  },
  {
    id: '02',
    model: 'MERCEDES-BENZ C200',
    spec: 'KOMPLE ULTRA ŞEFFAF PPF &amp; ISI YALITIMLI CAM FİLMİ',
    year: '2025',
    category: 'PREMIUM SEDAN',
    catId: 'ppf',
    aspect: 'col-span-1 h-96',
    details: 'Tamponlar, kaput, çamurluklar ve seramik cam filmi montajı tamamlandı.'
  },
  {
    id: '03',
    model: 'PORSCHE 911 GT3 RS',
    spec: 'ÖN BÖLGE VE YÜKSEK HIZ TAŞ DARBE ETKİ PAKETİ',
    year: '2024',
    category: 'PERFORMANS SERİSİ',
    catId: 'ppf',
    aspect: 'col-span-1 h-88',
    details: 'Ön tampon, karbon kanatçıklar ve aynalar kenar kıvırma ile korundu.'
  },
  {
    id: '04',
    model: 'BMW M3 COMPETITION',
    spec: 'SATEN MAT DÖKÜM RENK DEĞİŞİMİ &amp; PPF KAPLAMA',
    year: '2025',
    category: 'RENK DÖNÜŞÜMÜ',
    catId: 'renk',
    aspect: 'col-span-1 lg:col-span-2 h-88',
    details: 'Saten döküm folyo kaplama üzeri şeffaf TPU koruma kalkanı uygulandı.'
  },
  {
    id: '05',
    model: 'AUDI RS6 AVANT',
    spec: 'BOYASIZ GÖÇÜK ONARIMI (PDR) &amp; DETAYLI POLİSAJ',
    year: '2024',
    category: 'PDR ONARIM',
    catId: 'cam_pdr',
    aspect: 'col-span-1 lg:col-span-2 h-88',
    details: 'Otopark kapı vurukları macunsuz-boyasız fabrika mikronunda düzeltildi.'
  },
  {
    id: '06',
    model: 'RANGE ROVER SPORT',
    spec: 'KOMPLE GÖVDE STEALTH MAT PPF &amp; UV CAM FİLMİ',
    year: '2025',
    category: 'LÜKS SUV',
    catId: 'ppf',
    aspect: 'col-span-1 h-88',
    details: 'Siyah metalik gövde saten mat PPF ile zırhlanarak yeni bir karaktere kavuştu.'
  }
];

export function StudioGallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredArchive = activeFilter === 'all'
    ? ARCHIVE
    : ARCHIVE.filter((item) => item.catId === activeFilter);

  return (
    <section id="galeri" className="relative w-full py-28 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="text-[10px] font-mono tracking-[0.25em] text-[var(--text-muted)] uppercase mb-2 font-bold">
              09 / UYGULAMA ARŞİVİ
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[var(--text-primary)] uppercase">
              TESLİM EDİLEN ARAÇLAR
            </h2>
          </div>

          <p className="max-w-md text-xs text-[var(--text-secondary)] font-light leading-relaxed">
            Garaj Plus Premium uygulama merkezimizde koruma altına alınan ve sahibine teslim edilen güncel araç portföyümüz.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 text-[10px] font-mono uppercase tracking-widest transition-all cursor-pointer rounded-full font-bold ${
                  isActive
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-black shadow-md'
                    : 'bg-neutral-100 dark:bg-white/5 text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Editorial Composition with Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredArchive.map((item) => (
            <SpotlightCard
              key={item.id}
              className={`${item.aspect} relative border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 flex flex-col justify-between hover:border-[var(--border-strong)] transition-all duration-300 group overflow-hidden shadow-xl`}
            >
              <div className="flex items-baseline justify-between z-10">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest font-bold">
                  PROJE #{item.id}
                </span>
                <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-widest px-2.5 py-0.5 border border-emerald-500/30 bg-emerald-500/10">
                  {item.category}
                </span>
              </div>

              <div className="z-10 space-y-2">
                <div
                  className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider"
                  dangerouslySetInnerHTML={{ __html: item.spec }}
                />
                <h3
                  className="text-xl sm:text-2xl font-sans font-bold text-[var(--text-primary)] uppercase tracking-tight"
                  dangerouslySetInnerHTML={{ __html: item.model }}
                />
                <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed pt-1">
                  {item.details}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

