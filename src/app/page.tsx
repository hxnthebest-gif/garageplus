'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Navigation/Header';
import { HeroScrollVideo } from '@/components/HeroScrollVideo/HeroScrollVideo';
import { ServicesSection } from '@/components/Services/ServicesSection';
import { PackagesSection } from '@/components/Packages/PackagesSection';
import { BeforeAfterComparison } from '@/components/Comparison/BeforeAfterComparison';
import { InstallationProcess } from '@/components/Process/InstallationProcess';
import { TrustGuaranteeSection } from '@/components/TrustGuarantee/TrustGuaranteeSection';
import { StudioGallery } from '@/components/Gallery/StudioGallery';
import { CustomerReviewsSection } from '@/components/Reviews/CustomerReviewsSection';
import { AppointmentSection } from '@/components/Appointment/AppointmentSection';
import { FAQSection } from '@/components/FAQ/FAQSection';
import { FinalCTA } from '@/components/CTA/FinalCTA';
import { QuoteModal } from '@/components/QuoteModal/QuoteModal';
import { Footer } from '@/components/Footer/Footer';

// Dynamically import lightweight 360 Configurator
const CarConfigurator = dynamic(
  () => import('@/components/CarConfigurator/CarConfigurator').then((mod) => mod.CarConfigurator),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[650px] flex items-center justify-center bg-[var(--bg-primary)] text-[var(--text-secondary)] font-mono text-xs uppercase tracking-widest">
        360° KORUMA STÜDYOSU HAZIRLANIYOR...
      </div>
    )
  }
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* 00 / Sabit Üst Gezinme Çubuğu */}
      <Header />

      {/* 01 / Sinematik Scroll Hero Video */}
      <HeroScrollVideo />

      {/* 02 / 4 Ana Hizmetimiz (PPF, Renk Değişimi, Cam Filmi, PDR) */}
      <ServicesSection />

      {/* 03 / 360° İnteraktif Araç Koruma Konfigüratörü */}
      <CarConfigurator />

      {/* 05 / Standart Koruma Paketleri (Komple, Ön Koruma, Özel) */}
      <PackagesSection />

      {/* 06 / Yüzey Vernik Hasar Karşılaştırma Kaydırıcısı */}
      <BeforeAfterComparison />

      {/* 07 / 6 Aşamalı Kusursuz İşçilik Protokolü */}
      <InstallationProcess />

      {/* 08 / Güven & 7 Yıllık Garanti Standartları */}
      <TrustGuaranteeSection />

      {/* 09 / Teslim Edilen Araçlar Uygulama Arşivi */}
      <StudioGallery />

      {/* 10 / Google İşletme Profili Müşteri Yorumları */}
      <CustomerReviewsSection />

      {/* 11 / Sıkça Sorulan Sorular */}
      <FAQSection />

      {/* 12 / Randevu Talep Formu & WhatsApp Entegrasyonu */}
      <AppointmentSection />

      {/* 13 / Son Eyleme Çağrı (Final CTA) */}
      <FinalCTA />

      {/* 14 / Teklif ve Spesifikasyon Çekmecesi */}
      <QuoteModal />

      {/* 15 / Alt Bilgi & İletişim */}
      <Footer />
    </main>
  );
}
