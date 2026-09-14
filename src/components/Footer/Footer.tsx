'use client';

import React from 'react';
import { BUSINESS_INFO } from '@/data/business';

export function Footer() {
  return (
    <footer className="relative w-full bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] text-[var(--text-secondary)] py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xl font-sans font-black tracking-tight text-[var(--text-primary)] uppercase block">
              {BUSINESS_INFO.name}
            </span>
            <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed max-w-sm">
              İstanbul Bahçelievler&apos;de 13 yıllık tecrübemiz ile aracınıza hak ettiği korumayı ve değeri kazandırıyoruz. STIL TECH 210 Micron TPU PPF, Renk Değişimi, Cam Filmi ve Boyasız Göçük Onarımı (PDR) uzmanlığı.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 border border-[var(--border-subtle)] hover:border-emerald-400 text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                Instagram
              </a>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 border border-[var(--border-subtle)] hover:border-emerald-400 text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={BUSINESS_INFO.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 border border-[var(--border-subtle)] hover:border-emerald-400 text-[10px] font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                Google Haritalar
              </a>
            </div>
          </div>

          {/* Hizmetler Col */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--text-primary)] font-bold block">
              HİZMETLERİMİZ
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="#hizmetler" className="hover:text-emerald-400 transition-colors">
                  PPF Kaplama (210 Mikron)
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="hover:text-emerald-400 transition-colors">
                  Araç Renk Değişimi
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="hover:text-emerald-400 transition-colors">
                  Yüksek Performans Cam Filmi
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="hover:text-emerald-400 transition-colors">
                  Boyasız Göçük Onarımı (PDR)
                </a>
              </li>
              <li>
                <a href="#karsilastirma" className="hover:text-emerald-400 transition-colors">
                  Yüzey Karşılaştırması
                </a>
              </li>
            </ul>
          </div>

          {/* Stüdyo & Süreç */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--text-primary)] font-bold block">
              STÜDYO &amp; GÜVENCE
            </span>
            <ul className="space-y-2.5 text-xs font-light">
              <li>
                <a href="#konfigurator" className="hover:text-emerald-400 transition-colors">
                  360° Araç Konfigüratörü
                </a>
              </li>
              <li>
                <a href="#paketler" className="hover:text-emerald-400 transition-colors">
                  Standart Koruma Paketleri
                </a>
              </li>
              <li>
                <a href="#surec" className="hover:text-emerald-400 transition-colors">
                  6 Aşamalı İşçilik Protokolü
                </a>
              </li>
              <li>
                <a href="#guvence" className="hover:text-emerald-400 transition-colors">
                  7 Yıl Garanti Standardı
                </a>
              </li>
              <li>
                <a href="#yorumlar" className="hover:text-emerald-400 transition-colors">
                  Müşteri Google Yorumları
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim & Lokasyon */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--text-primary)] font-bold block">
              İLETİŞİM &amp; ÇALIŞMA
            </span>
            <div className="space-y-2 text-xs font-light">
              <p className="text-[var(--text-primary)] font-mono text-sm font-bold">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p className="text-[var(--text-secondary)]">
                {BUSINESS_INFO.address.full}
              </p>
              <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] font-mono">
                <span className="text-neutral-500 block">ÇALIŞMA SAATLERİ:</span>
                <span className="text-[var(--text-primary)] font-semibold">{BUSINESS_INFO.workingHours.full}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[var(--text-muted)]">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. Tüm Hakları Saklıdır.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 font-bold">STIL TECH 210 MICRON TPU</span>
            <span>&bull;</span>
            <span>İSTANBUL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
