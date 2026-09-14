'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { BUSINESS_INFO } from '@/data/business';
import { ThemeToggle } from '@/components/MagicUI/ThemeToggle';
import { BorderBeam } from '@/components/MagicUI/BorderBeam';

export function Header() {
  const setQuoteModalOpen = useConfiguratorStore((s) => s.setQuoteModalOpen);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const isScrolledRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = headerRef.current;
      if (!el) return;
      const isScrolled = window.scrollY > 30;
      if (isScrolled !== isScrolledRef.current) {
        isScrolledRef.current = isScrolled;
        if (isScrolled) {
          el.classList.add('header--scrolled-pill');
        } else {
          el.classList.remove('header--scrolled-pill');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Hizmetler', href: '#hizmetler' },
    { label: '360° Stüdyo', href: '#konfigurator' },
    { label: 'Paketler', href: '#paketler' },
    { label: 'Karşılaştırma', href: '#karsilastirma' },
    { label: 'İşçilik', href: '#surec' },
    { label: 'Yorumlar', href: '#yorumlar' },
    { label: 'Randevu', href: '#randevu' }
  ];

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Floating Glass Island Pill Container */}
        <div className="w-full bg-white/95 dark:bg-[#0c0d10]/95 backdrop-blur-2xl border border-neutral-300/80 dark:border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] px-4 sm:px-6 py-2.5 rounded-full flex items-center justify-between gap-4 pointer-events-auto transition-all duration-300">
          {/* Brand Logo & Emblem */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-sky-400 p-[1px] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-full bg-neutral-900 dark:bg-black flex items-center justify-center shadow-inner">
                <span className="text-white font-mono font-black text-xs">G+</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-sans font-black tracking-tight text-neutral-950 dark:text-white uppercase leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors whitespace-nowrap">
                GARAJ PLUS <span className="font-bold text-neutral-700 dark:text-neutral-300">PREMIUM</span>
              </span>
              <span className="text-[8px] font-mono tracking-[0.2em] text-neutral-600 dark:text-neutral-400 uppercase leading-none hidden sm:block font-bold">
                İSTANBUL &bull; 13 YIL
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (High-contrast, crystal clear in both light and dark) */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-[0.14em] font-bold text-neutral-900 dark:text-neutral-200 hover:text-emerald-600 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-all duration-200 whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Dock (Phone + Theme Toggle + CTA) */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            {/* Direct Phone Link */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-300 dark:border-white/15 hover:border-neutral-400 dark:hover:border-white/30 text-[11px] font-mono font-bold text-neutral-950 dark:text-white transition-all whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            {/* 21st.dev Theme Toggle */}
            <ThemeToggle />

            {/* Primary CTA with 21st.dev Border Beam */}
            <div className="relative group flex-shrink-0">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="relative px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-black text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all cursor-pointer rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] overflow-hidden whitespace-nowrap"
              >
                TEKLİF AL &rarr;
                <BorderBeam size={70} duration={6} colorFrom="#ffffff" colorTo="#000000" />
              </button>
            </div>
          </div>

          {/* Mobile Actions: Theme Toggle + Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <div className="sm:hidden">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[10px] font-mono uppercase tracking-widest text-neutral-950 dark:text-white font-bold px-3 py-1.5 rounded-full border border-neutral-300 dark:border-white/15 bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? 'KAPAT' : 'MENÜ'}
            </button>
          </div>
        </div>
      </div>

      {/* Smooth Sliding Mobile Drawer */}
      <div
        className={`xl:hidden pointer-events-auto transition-all duration-300 ease-in-out overflow-hidden max-w-7xl mx-auto px-1 ${
          mobileMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 dark:bg-[#0c0d10]/95 backdrop-blur-2xl border border-neutral-300 dark:border-white/15 rounded-3xl p-5 shadow-2xl space-y-4">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-neutral-200 dark:border-white/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-900 dark:text-neutral-200 py-2 px-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/10 hover:text-emerald-600 dark:hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex-1 text-xs font-mono font-bold text-neutral-900 dark:text-white text-center py-2.5 rounded-full border border-neutral-300 dark:border-white/20 hover:border-neutral-500 transition-colors"
            >
              {BUSINESS_INFO.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setQuoteModalOpen(true);
              }}
              className="flex-1 py-2.5 bg-emerald-500 text-black text-xs font-mono font-bold uppercase tracking-wider text-center rounded-full hover:bg-emerald-400 transition-colors cursor-pointer shadow-lg"
            >
              TEKLİF AL →
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

