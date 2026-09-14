'use client';

import React, { useState } from 'react';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { TURKISH_PACKAGES } from '@/data/packages';
import { TURKISH_VEHICLES } from '@/data/vehicles';
import { BUSINESS_INFO } from '@/data/business';
import { BorderBeam } from '@/components/MagicUI/BorderBeam';
import { SpotlightCard } from '@/components/MagicUI/SpotlightCard';

export function QuoteModal() {
  const quoteModalOpen = useConfiguratorStore((s) => s.quoteModalOpen);
  const setQuoteModalOpen = useConfiguratorStore((s) => s.setQuoteModalOpen);
  const vehicleType = useConfiguratorStore((s) => s.vehicleType);
  const activePackageId = useConfiguratorStore((s) => s.activePackageId);
  const globalPPFFinish = useConfiguratorStore((s) => s.globalPPFFinish);
  const getTotalProtectedPanels = useConfiguratorStore((s) => s.getTotalProtectedPanels);
  const getProtectedPanelsNames = useConfiguratorStore((s) => s.getProtectedPanelsNames);
  const getPriceEstimateDisplay = useConfiguratorStore((s) => s.getPriceEstimateDisplay);

  const [customerName, setCustomerName] = useState('');
  const [vehicleModelInput, setVehicleModelInput] = useState('');
  const [extraNotes, setExtraNotes] = useState('');

  if (!quoteModalOpen) return null;

  const vehicle = TURKISH_VEHICLES[vehicleType];
  const activePkg = TURKISH_PACKAGES.find((p) => p.id === activePackageId);
  const totalPanels = getTotalProtectedPanels();
  const estimatedPriceText = getPriceEstimateDisplay();
  const protectedPanelsList = getProtectedPanelsNames();

  const handleClose = () => {
    setQuoteModalOpen(false);
  };

  // Compile the rich, comprehensive WhatsApp transmission message
  const buildWhatsAppMessage = () => {
    const vehicleName = vehicleModelInput.trim() 
      ? vehicleModelInput.trim() 
      : (vehicleType === 'sedan' ? '4-Kapı Sedan (BMW / Audi / Mercedes)' : 'Lüks SUV (BMW X5 / Audi Q7 / Togg T10X)');
    
    const packageName = activePkg ? activePkg.name : (totalPanels === 13 ? 'Komple Gövde PPF Kaplama' : 'Özel Panel Seçimi');
    const finishName = globalPPFFinish === 'satin' ? 'Saten Mat TPU Zırh' : 'Ultra Parlak Şeffaf TPU (Gloss)';
    
    const panelsText = protectedPanelsList.length > 0 
      ? protectedPanelsList.map(p => `  • ${p}`).join('\n')
      : '  • Henüz panel seçilmedi (Genel Danışma)';

    const nameLine = customerName.trim() ? `• Müşteri: ${customerName.trim()}\n` : '';
    const notesLine = extraNotes.trim() ? `\nOZEL NOT / TALEP:\n${extraNotes.trim()}\n` : '';

    return `Merhaba Garaj Plus Premium,\n\n360 Arac Koruma Konfiguratoerunuzden teklif almak istiyorum:\n\nARAC & KONFIGURASYON:\n${nameLine}• Arac: ${vehicleName}\n• Kasa Tipi: ${vehicle.name}\n• Paket: ${packageName}\n• PPF Bitisi: ${finishName}\n• Korunan Panel Sayisi: ${totalPanels} / 13 Panel\n\nSECILEN KORUMA BOLGELERI:\n${panelsText}\n\nGARANTI & MATERYAL:\n• STIL TECH 210 Micron TPU\n• 7 Yil Resmi Yazili Garanti\n• Kil & Demirtozu Temiz Oda Hazirligi Dahil\n\nTAHMINI TUTAR: ${estimatedPriceText}${notesLine}\nDetayli fiyat teklifi ve en uygun randevu tarihi icin yardimci olabilir misiniz?`;
  };

  const handleDirectWhatsApp = () => {
    const message = buildWhatsAppMessage();
    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <SpotlightCard className="relative w-full max-w-2xl bg-[var(--card-bg)] border border-white/20 p-6 sm:p-10 shadow-2xl text-[var(--text-primary)] max-h-[92vh] overflow-y-auto rounded-none">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 text-[10px] font-mono uppercase tracking-widest text-neutral-300 hover:text-white cursor-pointer transition-all rounded-sm"
        >
          KAPAT
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-mono uppercase tracking-widest font-bold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>360° KONFİGÜRASYON HAZIR</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-sans font-black text-[var(--text-primary)] uppercase tracking-tight">
            WHATSAPP İLE ANINDA TEKLİF AL
          </h3>
          <p className="text-xs text-[var(--text-secondary)] font-light mt-1">
            Seçtiğiniz tüm paneller ve araç detayları otomatik olarak hazırlandı. Tek tıkla WhatsApp üzerinden ustalarımıza iletebilirsiniz.
          </p>
        </div>

        {/* Live Config Summary Grid */}
        <div className="mb-6 p-4 border border-[var(--border-subtle)] bg-[var(--bg-primary)] grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] font-mono">
          <div>
            <span className="text-neutral-400 block text-[9px] uppercase font-bold">KASA TİPİ</span>
            <span className="text-[var(--text-primary)] uppercase font-bold truncate block">
              {vehicleType === 'sedan' ? '4-Kapı Sedan' : 'Lüks SUV'}
            </span>
          </div>
          <div>
            <span className="text-neutral-400 block text-[9px] uppercase font-bold">PPF BİTİŞİ</span>
            <span className="text-[var(--text-primary)] uppercase font-bold truncate block">
              {globalPPFFinish === 'satin' ? 'Saten Mat' : 'Parlak Şeffaf'}
            </span>
          </div>
          <div>
            <span className="text-neutral-400 block text-[9px] uppercase font-bold">KAPSAM</span>
            <span className="text-emerald-400 font-bold">{totalPanels} / 13 Panel</span>
          </div>
          <div>
            <span className="text-neutral-400 block text-[9px] uppercase font-bold">TAHMİNİ TUTAR</span>
            <span className="text-emerald-400 font-bold">{estimatedPriceText}</span>
          </div>
        </div>

        {/* Protected Panels Pill List */}
        <div className="mb-6 space-y-2">
          <span className="text-[9px] font-mono uppercase text-neutral-400 block font-bold">
            MESAJINIZA EKLENEN SEÇİLİ PANELLER:
          </span>
          {protectedPanelsList.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto p-2 bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
              {protectedPanelsList.map((name, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold"
                >
                  {name}
                </span>
              ))}
            </div>
          ) : (
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono">
              Henüz özel panel seçilmedi. Tüm gövde koruma talebi olarak gönderilecektir.
            </div>
          )}
        </div>

        {/* Quick Optional Customization (Not mandatory) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div>
            <label className="block text-[9px] font-mono text-neutral-400 uppercase tracking-widest mb-1 font-bold">
              ADINIZ (OPSİYONEL)
            </label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Örn: Ahmet Yılmaz"
              className="w-full px-3 py-2 bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-emerald-400 text-[var(--text-primary)] text-xs outline-none font-mono transition-colors"
            />
          </div>

          <div>
            <label className="block text-[9px] font-mono text-neutral-400 uppercase tracking-widest mb-1 font-bold">
              ARAÇ MARKA / MODEL (OPSİYONEL)
            </label>
            <input
              type="text"
              value={vehicleModelInput}
              onChange={(e) => setVehicleModelInput(e.target.value)}
              placeholder="Örn: 2025 Togg T10X / BMW 520i"
              className="w-full px-3 py-2 bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-emerald-400 text-[var(--text-primary)] text-xs outline-none font-mono transition-colors"
            />
          </div>
        </div>

        {/* Main 1-Click WhatsApp Button (Hero Action) */}
        <div className="space-y-3">
          <div className="relative group">
            <button
              onClick={handleDirectWhatsApp}
              className="relative w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-black text-xs sm:text-sm font-mono font-black uppercase tracking-[0.2em] transition-all cursor-pointer shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] flex items-center justify-center gap-3 overflow-hidden rounded-sm"
            >

              <span>WHATSAPP&apos;TAN ANINDA TEKLİF AL →</span>
              <BorderBeam size={100} duration={6} colorFrom="#ffffff" colorTo="#000000" />
            </button>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[var(--text-secondary)] pt-1">
            <span>Form doldurmadan doğrudan WhatsApp açılır</span>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-emerald-400 hover:underline"
            >
              Telefonla Ara: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}
