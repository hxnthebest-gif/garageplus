'use client';

import React, { useState, useRef, useCallback } from 'react';
import { SpotlightCard } from '@/components/MagicUI/SpotlightCard';

export function BeforeAfterComparison() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    handleMove(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="karsilastirma" className="relative w-full py-28 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase mb-2 font-bold">
              05 / YÜZEY TESTİ VE DOĞRULAMA
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[var(--text-primary)] uppercase">
              VERNİK HASAR KARŞILAŞTIRMASI
            </h2>
          </div>

          <p className="max-w-md text-xs text-[var(--text-secondary)] font-light leading-relaxed">
            Kaydırıcıyı sağa-sola hareket ettirerek, savrulan taşlar ve fırça çizikleriyle matlaşmış fabrika boyası ile STIL TECH 210µ TPU PPF korumalı yüzey farkını mikron seviyesinde inceleyin.
          </p>
        </div>

        {/* Visual Split Lens Viewport (Fixed aspect ratio, zero text-crush) */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          onClick={(e) => handleMove(e.clientX)}
          className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] border border-[var(--border-subtle)] bg-black overflow-hidden cursor-ew-resize select-none shadow-2xl rounded-none group"
        >
          {/* 1. RIGHT / BACKGROUND LAYER: PROTECTED 210µ PPF (Mirror Gloss) */}
          <div className="absolute inset-0 w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/comparison/after_protected.jpg"
              alt="210µ TPU PPF Korumalı Ayna Yüzey"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
            {/* Gloss Specular Sheen */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
          </div>

          {/* 2. LEFT / FOREGROUND LAYER: UNPROTECTED DAMAGED PAINT (Swirls & Chips) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-[5px_0_25px_rgba(0,0,0,0.8)]"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="relative w-full h-full min-w-full">
              {/* Force image to match parent container width so it aligns pixel-for-pixel */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/comparison/before_damaged.jpg"
                alt="Korumasız Çizik ve Taş İzi Fabrika Boyası"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw',
                  maxWidth: 'none',
                  height: '100%'
                }}
                className="object-cover select-none pointer-events-none max-w-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
            </div>
          </div>

          {/* 3. STATIC FLOATING BADGES (Always readable, never squished) */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/85 backdrop-blur-md border border-red-500/40 text-red-400 text-[10px] font-mono font-bold uppercase tracking-wider shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              <span>SAVUNMASIZ FABRİKA BOYASI</span>
            </div>
          </div>

          <div className="absolute top-4 right-4 z-20 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/85 backdrop-blur-md border border-emerald-500/50 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>STIL TECH 210µ TPU PPF</span>
            </div>
          </div>

          {/* 4. DRAGGABLE SPLIT HANDLE */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none z-30"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 border-2 border-white bg-black/90 backdrop-blur-md rounded-full flex items-center justify-center text-xs font-mono font-bold text-white shadow-[0_0_20px_rgba(255,255,255,0.6)] group-hover:scale-110 transition-transform">
              <span className="select-none tracking-tighter">⟷</span>
            </div>
          </div>

          {/* 5. BOTTOM HINT OVERLAY */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <div className="px-3.5 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-neutral-300 text-[9px] font-mono uppercase tracking-widest">
              <span>KAYDIRARAK FARKI GÖRÜN</span>
            </div>
          </div>
        </div>

        {/* Technical Deep Dive Cards (Placed cleanly below the interactive slider) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <SpotlightCard className="p-6 sm:p-8 border border-[var(--border-subtle)] bg-[var(--card-bg)] space-y-3 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest font-bold">
                KORUMASIZ VERNİK HASARLARI
              </span>
              <span className="text-[10px] font-mono text-neutral-400">01 / SAVUNMASIZ</span>
            </div>
            <h3 className="text-base font-sans font-bold text-[var(--text-primary)] uppercase">
              Kılcal Fırça Çizikleri, Taş Delinmeleri ve Matlaşma
            </h3>
            <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
              Otoyol hızlarında savrulan taş parçacıkları, hatalı oto yıkamalardaki fırça sürtünmeleri ve asidik kuş pislikleri fabrika boyasına doğrudan nüfuz ederek araçta %15–%25 oranında piyasa değer kaybı yaratır.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-6 sm:p-8 border border-[var(--border-subtle)] bg-[var(--card-bg)] space-y-3 shadow-xl ring-1 ring-emerald-500/20">
            <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                STIL TECH 210µ TPU ZIRHI
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">02 / TAM KORUMA</span>
            </div>
            <h3 className="text-base font-sans font-bold text-[var(--text-primary)] uppercase">
              Kendini Onaran Termo-Elastik Ayna Parlaklığı
            </h3>
            <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
              210 mikron kalınlığındaki termo-plastik poliüretan tabaka darbeleri emer. Güneş ısısıyla veya sıcak suyla kılcal çizikleri kendiliğinden onarır, 7 yıl boyunca sararma ve matlaşma yapmaz.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
