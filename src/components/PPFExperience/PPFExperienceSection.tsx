'use client';

import React from 'react';
import { SpotlightCard } from '@/components/MagicUI/SpotlightCard';

export function PPFExperienceSection() {
  const vectors = [
    {
      code: '01',
      title: 'YÜKSEK HIZLI TAŞ DARBELERİ',
      desc: 'Otoyolda 100+ km/s hızla seyreden araçların lastiklerinden fırlayan taş parçacıkları fabrika boyasını delerek sacı açığa çıkarır. 210 mikron TPU darbeyi emer.'
    },
    {
      code: '02',
      title: 'KİMYASAL VE KUŞ PİSLİĞİ ASİTLERİ',
      desc: 'Kuş pisliği, reçine ve kışın yollara dökülen tuz kimyasalları saatler içinde verniğe nüfuz ederek kalıcı mat lekeler ve vernik yanıkları bırakır.'
    },
    {
      code: '03',
      title: 'YIKAMA VE FIRÇA HARELERİ',
      desc: 'Hatalı yıkamalarda sünger ve bezlerle sürtünen mikro toz taneleri dairesel çizik (örümcek ağı) desenleri oluşturarak boyanın parlaklık derinliğini yok eder.'
    },
    {
      code: '04',
      title: 'GÜNEŞ & UV SOLMALARI',
      desc: 'Yüksek yoğunluklu ultraviyole radyasyonu vernik polimerlerini zayıflatarak zamanla boyada sararma ve matlaşmaya neden olur.'
    }
  ];

  return (
    <section id="ppf-deneyimi" className="relative w-full py-28 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase mb-3">
            03 / TEMEL KORUMA TEKNOLOJİSİ
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[var(--text-primary)] uppercase leading-[1.02]">
            STIL TECH 210 MICRON <br />
            <span className="text-[var(--text-secondary)] font-light">TPU BOYA KORUMA FİLMİ.</span>
          </h2>
          <p className="text-sm text-[var(--text-secondary)] font-light mt-6 leading-relaxed max-w-2xl">
            Aracınızın fabrika boyasını değiştirmeden korumanın en güvenilir yolu. Görünmez, kendi kendini onaran ve 7 yıl solma-sararma garantili TPU film teknolojisi.
          </p>
        </div>

        {/* 3 Major Technology Highlights with 21st.dev Spotlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <SpotlightCard
            spotlightColor="rgba(16, 185, 129, 0.12)"
            className="p-8 border border-[var(--border-subtle)] bg-[var(--card-bg)] space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl font-mono font-bold text-emerald-400">210 μm</span>
              <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-bold">
                MİKRON KALINLIK
              </span>
            </div>
            <h3 className="text-base font-sans font-bold uppercase tracking-tight text-[var(--text-primary)]">
              ÜSTÜN KALINLIK &amp; ELASTİK ZIRH
            </h3>
            <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
              Standart ince kaplamalara kıyasla 210 mikron TPU polimer yapısı, yüksek kinetik enerjili taş darbelerini yayarak boya yüzeyine ulaşmasını engeller.
            </p>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(56, 189, 248, 0.12)"
            className="p-8 border border-[var(--border-subtle)] bg-[var(--card-bg)] space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-3xl font-mono font-bold text-sky-400">7 YIL</span>
              <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 border border-sky-500/30 bg-sky-500/10 text-sky-400 font-bold">
                RESMİ GARANTİ
              </span>
            </div>
            <h3 className="text-base font-sans font-bold uppercase tracking-tight text-[var(--text-primary)]">
              SOLMA &amp; SARARMA GARANTİSİ
            </h3>
            <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
              UV ışınlarına karşı stabilize edilmiş optik akrilik tabakası sayesinde sararmaz, çatlamaz ve şeffaflığını ilk günkü gibi muhafaza eder.
            </p>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(245, 158, 11, 0.12)"
            className="p-8 border border-[var(--border-subtle)] bg-[var(--card-bg)] space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl font-mono font-bold text-amber-400">KİL &amp; DEMİRTOZU</span>
              <span className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 border border-amber-500/30 bg-amber-500/10 text-amber-400 font-bold">
                ARINDIRMA
              </span>
            </div>
            <h3 className="text-base font-sans font-bold uppercase tracking-tight text-[var(--text-primary)]">
              KUSURSUZ ÖN HAZIRLIK
            </h3>
            <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
              Film uygulanmadan önce araç yüzeyi özel kimyasal solüsyonlar ve kil ile mikron seviyesinde arındırılarak cam pürüzsüzlüğünde zemin hazırlanır.
            </p>
          </SpotlightCard>
        </div>

        {/* 4 Threat Vectors Breakdown */}
        <div className="pt-16 border-t border-[var(--border-subtle)]">
          <div className="flex items-center justify-between mb-10">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold">
              BOYANIZI HEDEF ALAN 4 TEMEL TEHLİKE VE PPF ÇÖZÜMÜ
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {vectors.map((vec) => (
              <SpotlightCard
                key={vec.code}
                className="p-6 border border-[var(--border-subtle)] bg-[var(--card-bg)] space-y-3 shadow-lg"
              >
                <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
                  SAVUNMA ALANI {vec.code}
                </div>
                <h4 className="text-xs font-sans font-bold tracking-tight text-[var(--text-primary)] uppercase">
                  {vec.title}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                  {vec.desc}
                </p>
              </SpotlightCard>
            ))}
          </div>

          {/* PPF vs Seramik Kaplama vs Cila Comparison Table */}
          <SpotlightCard className="p-6 sm:p-10 border border-[var(--border-subtle)] bg-[var(--card-bg)] shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[var(--border-subtle)]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-400 font-bold">
                  DOĞRU KORUMAYI SEÇİN
                </span>
                <h3 className="text-lg sm:text-2xl font-sans font-black text-[var(--text-primary)] uppercase tracking-tight">
                  PPF &bull; SERAMİK KAPLAMA &bull; BOYA KORUMA KARŞILAŞTIRMASI
                </h3>
              </div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase">
                MİKRON &amp; DİRENÇ SEVİYELERİ
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)] text-[10px] uppercase text-neutral-400">
                    <th className="py-3 pr-4">Koruma Kriteri</th>
                    <th className="py-3 px-4 text-emerald-400 font-bold bg-emerald-500/5">STIL TECH 210µ TPU PPF</th>
                    <th className="py-3 px-4">Seramik Kaplama</th>
                    <th className="py-3 pl-4">Geleneksel Wax / Cila</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-subtle)] text-neutral-800 dark:text-neutral-300">
                  <tr>
                    <td className="py-3.5 pr-4 font-bold text-[var(--text-primary)]">Taş Darbesi &amp; Delinme</td>
                    <td className="py-3.5 px-4 text-emerald-500 font-bold bg-emerald-500/5">EVET (Tam Fiziksel Zırh)</td>
                    <td className="py-3.5 px-4 text-neutral-400">HAYIR (Korumaz)</td>
                    <td className="py-3.5 pl-4 text-neutral-400">HAYIR (Sıfır Direnç)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-bold text-[var(--text-primary)]">Kendi Kendini Yenileme</td>
                    <td className="py-3.5 px-4 text-emerald-500 font-bold bg-emerald-500/5">Var (Isıyla Kılcal Çizik Onarımı)</td>
                    <td className="py-3.5 px-4 text-neutral-400">Yok</td>
                    <td className="py-3.5 pl-4 text-neutral-400">Yok</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-bold text-[var(--text-primary)]">Uygulama Kalınlığı</td>
                    <td className="py-3.5 px-4 text-emerald-500 font-bold bg-emerald-500/5">210 Mikron (0.21 mm)</td>
                    <td className="py-3.5 px-4 text-neutral-400">1 – 3 Mikron</td>
                    <td className="py-3.5 pl-4 text-neutral-400">&lt; 0.1 Mikron</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-bold text-[var(--text-primary)]">Kuş Pisliği &amp; Kimyasal</td>
                    <td className="py-3.5 px-4 text-emerald-500 font-bold bg-emerald-500/5">Tam Koruma (Verniğe Geçmez)</td>
                    <td className="py-3.5 px-4 text-neutral-300">Yüksek Direnç</td>
                    <td className="py-3.5 pl-4 text-neutral-400">Zayıf (Saatler İçinde Erir)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-bold text-[var(--text-primary)]">Garanti Süresi</td>
                    <td className="py-3.5 px-4 text-emerald-500 font-bold bg-emerald-500/5">7 Yıl Yazılı Sertifika</td>
                    <td className="py-3.5 px-4 text-neutral-300">1 – 3 Yıl</td>
                    <td className="py-3.5 pl-4 text-neutral-400">1 – 3 Ay</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
