'use client';

import React, { useState } from 'react';
import { ConfiguratorSteps } from './ConfiguratorSteps';
import { VehicleImageViewer } from './VehicleImageViewer';
import { useConfiguratorStore } from '@/lib/store/configuratorStore';
import { TURKISH_BODY_PANELS, getPanelPriceDisplay, TurkishBodyPanel } from '@/data/panels';
import { TURKISH_PACKAGES } from '@/data/packages';
import { BUSINESS_INFO } from '@/data/business';

export function CarConfigurator() {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | 4>(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([1]);
  const [justApplied, setJustApplied] = useState(false);

  // Accordion open/close states for panel zones
  const [openZones, setOpenZones] = useState<Record<string, boolean>>({
    front: true,
    sides: true,
    roof: true,
    details: true,
    rear: true
  });

  const vehicleType = useConfiguratorStore((s) => s.vehicleType);
  const setVehicleType = useConfiguratorStore((s) => s.setVehicleType);
  const selectedPanelIds = useConfiguratorStore((s) => s.selectedPanelIds);
  const togglePanelSelection = useConfiguratorStore((s) => s.togglePanelSelection);
  const selectAllPanels = useConfiguratorStore((s) => s.selectAllPanels);
  const clearSelection = useConfiguratorStore((s) => s.clearSelection);
  const panelProtections = useConfiguratorStore((s) => s.panelProtections);
  const applyPPFToSelectedPanels = useConfiguratorStore((s) => s.applyPPFToSelectedPanels);
  const removePPFFromSelectedPanels = useConfiguratorStore((s) => s.removePPFFromSelectedPanels);
  const applyFullBodyPPF = useConfiguratorStore((s) => s.applyFullBodyPPF);
  const clearAllPPF = useConfiguratorStore((s) => s.clearAllPPF);
  const globalPPFFinish = useConfiguratorStore((s) => s.globalPPFFinish);
  const setGlobalPPFFinish = useConfiguratorStore((s) => s.setGlobalPPFFinish);
  const activePackageId = useConfiguratorStore((s) => s.activePackageId);
  const applyPackage = useConfiguratorStore((s) => s.applyPackage);
  const getTotalProtectedPanels = useConfiguratorStore((s) => s.getTotalProtectedPanels);
  const getProtectedPanelsNames = useConfiguratorStore((s) => s.getProtectedPanelsNames);
  const getPriceEstimateDisplay = useConfiguratorStore((s) => s.getPriceEstimateDisplay);
  const setQuoteModalOpen = useConfiguratorStore((s) => s.setQuoteModalOpen);

  const protectedCount = getTotalProtectedPanels();
  const selectedCount = selectedPanelIds.length;
  const priceDisplay = getPriceEstimateDisplay();
  const protectedPanelsList = getProtectedPanelsNames();

  const markStepDone = (step: number) => {
    setCompletedSteps((prev) => (prev.includes(step) ? prev : [...prev, step]));
  };

  const handleSelectVehicle = (type: 'sedan' | 'suv') => {
    setVehicleType(type);
    markStepDone(1);
    setTimeout(() => {
      setActiveStep(2);
    }, 250);
  };

  const handleApplyPPF = () => {
    applyPPFToSelectedPanels();
    markStepDone(2);
    setJustApplied(true);
    setTimeout(() => setJustApplied(false), 1200);
  };

  const toggleZone = (zone: string) => {
    setOpenZones((prev) => ({ ...prev, [zone]: !prev[zone] }));
  };

  const selectZonePanels = (zone: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const zonePanels = TURKISH_BODY_PANELS.filter((p) => p.category === zone);
    zonePanels.forEach((p) => {
      if (!selectedPanelIds.includes(p.id)) {
        togglePanelSelection(p.id);
      }
    });
  };

  const nextStep = () => {
    markStepDone(activeStep);
    if (activeStep < 4) {
      setActiveStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    } else {
      setQuoteModalOpen(true);
    }
  };

  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep((prev) => (prev - 1) as 1 | 2 | 3 | 4);
    }
  };

  const scrollToAppointment = () => {
    const el = document.getElementById('randevu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDirectWhatsApp = () => {
    const vehicleName = vehicleType === 'sedan' ? '4-Kapı Sedan (BMW / Audi / Mercedes)' : 'Lüks SUV (BMW X5 / Audi Q7 / Togg T10X)';
    const packageName = activePackageId !== 'custom' 
      ? (TURKISH_PACKAGES.find(p => p.id === activePackageId)?.name || 'Paket Seçimi') 
      : (protectedCount === 13 ? 'Komple Gövde PPF Kaplama' : 'Özel Panel Seçimi');
    const finishName = globalPPFFinish === 'satin' ? 'Saten Mat TPU Zırh' : 'Ultra Parlak Şeffaf TPU (Gloss)';
    
    const panelsText = protectedPanelsList.length > 0 
      ? protectedPanelsList.map(p => `  • ${p}`).join('\n')
      : '  • Henüz panel seçilmedi';

    const message = `Merhaba Garaj Plus Premium,\n\n360 Arac Koruma Konfiguratoerunuzden teklif almak istiyorum:\n\nKONFIGURASYON DETAYLARI:\n• Kasa Tipi: ${vehicleName}\n• Secilen Paket: ${packageName}\n• PPF Bitisi: ${finishName}\n• Korunan Panel Sayisi: ${protectedCount} / 13 Panel\n\nSECILEN KORUMA BOLGELERI:\n${panelsText}\n\nGARANTI & MATERYAL:\n• STIL TECH 210 Micron TPU\n• 7 Yil Resmi Yazili Garanti\n• Kil & Demirtozu Temiz Oda Hazirligi Dahil\n\nTAHMINI TUTAR: ${priceDisplay}\n\nDetayli fiyat teklifi ve randevu icin bilgi alabilir miyim?`;

    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Group panels by zone
  const zones: { id: string; title: string; panels: TurkishBodyPanel[] }[] = [
    {
      id: 'front',
      title: 'ÖN BÖLGE (KRİTİK DARBE ALANI)',
      panels: TURKISH_BODY_PANELS.filter((p) => p.category === 'front')
    },
    {
      id: 'sides',
      title: 'YAN GÖVDE & KAPILAR',
      panels: TURKISH_BODY_PANELS.filter((p) => p.category === 'sides')
    },
    {
      id: 'roof',
      title: 'ÜST YÜZEY & TAVAN',
      panels: TURKISH_BODY_PANELS.filter((p) => p.category === 'roof')
    },
    {
      id: 'details',
      title: 'DETAYLAR & AYNA KAPAKLARI',
      panels: TURKISH_BODY_PANELS.filter((p) => p.category === 'details')
    },
    {
      id: 'rear',
      title: 'ARKA BÖLGE & BAGAJ',
      panels: TURKISH_BODY_PANELS.filter((p) => p.category === 'rear')
    }
  ];

  return (
    <section id="konfigurator" className="relative w-full bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-300">
      {/* 1. Full-Width Step Breadcrumb Navigation */}
      <ConfiguratorSteps
        activeStep={activeStep}
        completedSteps={completedSteps}
        onStepClick={(s) => setActiveStep(s)}
      />

      {/* 2. Main 70/30 Split Studio Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (70% on lg:): Interactive Studio Viewport with Switchable Environments */}
          <div className="lg:col-span-8 lg:sticky lg:top-24 space-y-4">
            <VehicleImageViewer />

            {/* Quick Helper Subtext */}
            <div className="flex items-center justify-between px-2 text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-widest">
              <span>GARAJ PLUS PREMIUM &bull; İNTERAKTİF ATÖLYE</span>
              <span className="text-emerald-500 font-bold">STIL TECH 210 MICRON TPU</span>
            </div>
          </div>

          {/* Right Column (30% on lg:): Step Wizard Panel */}
          <div className="lg:col-span-4 bg-[var(--card-bg)] border border-[var(--border-subtle)] p-6 sm:p-7 space-y-7 shadow-2xl flex flex-col justify-between min-h-[580px] transition-colors duration-300 backdrop-blur-md">
            {/* STEP 1: VEHICLE PLATFORM SELECTION */}
            {activeStep === 1 && (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--text-muted)] block mb-1">
                    ADIM 01 / 04
                  </span>
                  <h3 className="text-xl font-sans font-bold text-[var(--text-primary)] uppercase tracking-tight">
                    ARAÇ PLATFORMU SEÇİN
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] font-light mt-1">
                    Aracınızın kasa tipini seçerek doğru panel geometrisini ve koruma planını yükleyin.
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Sedan Card */}
                  <button
                    type="button"
                    onClick={() => handleSelectVehicle('sedan')}
                    className={`w-full p-5 text-left border transition-all cursor-pointer relative group ${
                      vehicleType === 'sedan'
                        ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)] shadow-xl scale-[1.01]'
                        : 'bg-[var(--bg-tertiary)] border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold uppercase tracking-wider">
                        4-KAPI SEDAN / SPOR
                      </span>
                      {vehicleType === 'sedan' && (
                        <span className="text-[10px] font-mono font-bold bg-[var(--bg-primary)] text-[var(--text-primary)] px-2 py-0.5">
                          AKTİF
                        </span>
                      )}
                    </div>
                    <p className={`text-[11px] font-mono leading-relaxed ${
                      vehicleType === 'sedan' ? 'opacity-80' : 'text-[var(--text-secondary)]'
                    }`}>
                      BMW 3/5 Serisi, Audi A4/A6, VW Passat / Arteon, Mercedes C/E Serisi
                    </p>
                  </button>

                  {/* SUV Card */}
                  <button
                    type="button"
                    onClick={() => handleSelectVehicle('suv')}
                    className={`w-full p-5 text-left border transition-all cursor-pointer relative group ${
                      vehicleType === 'suv'
                        ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)] shadow-xl scale-[1.01]'
                        : 'bg-[var(--bg-tertiary)] border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold uppercase tracking-wider">
                        LÜKS SUV / HATCHBACK
                      </span>
                      {vehicleType === 'suv' && (
                        <span className="text-[10px] font-mono font-bold bg-[var(--bg-primary)] text-[var(--text-primary)] px-2 py-0.5">
                          AKTİF
                        </span>
                      )}
                    </div>
                    <p className={`text-[11px] font-mono leading-relaxed ${
                      vehicleType === 'suv' ? 'opacity-80' : 'text-[var(--text-secondary)]'
                    }`}>
                      BMW X3/X5, Audi Q5/Q7, VW Touareg / Tiguan, Porsche Cayenne, Togg T10X
                    </p>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: PPF ZONE & PANEL SELECTION */}
            {activeStep === 2 && (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--text-muted)] block mb-1">
                    ADIM 02 / 04
                  </span>
                  <h3 className="text-xl font-sans font-bold text-[var(--text-primary)] uppercase tracking-tight">
                    PPF KORUMA BÖLGELERİ
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] font-light mt-1">
                    Hazır koruma paketlerinden seçin veya aşağıdaki gövde bölgelerinden tek tek panel ekleyin.
                  </p>
                </div>

                {/* Package Presets */}
                <div className="space-y-2">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                    HAZIR PAKET ŞABLONLARI:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {TURKISH_PACKAGES.map((pkg) => {
                      const isActive = activePackageId === pkg.id;
                      return (
                        <button
                          key={pkg.id}
                          type="button"
                          onClick={() => applyPackage(pkg.id)}
                          className={`p-2.5 text-left border transition-all cursor-pointer ${
                            isActive
                              ? 'border-emerald-500 bg-emerald-500/15 text-[var(--text-primary)] font-bold shadow-md'
                              : 'border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] bg-[var(--bg-tertiary)]'
                          }`}
                        >
                          <div className="text-[10px] uppercase font-bold truncate">
                            {pkg.shortName}
                          </div>
                          <div className="text-[9px] font-mono opacity-70">
                            {pkg.includedPanelIds.length > 0 ? `${pkg.includedPanelIds.length} Panel` : 'Özel Seçim'}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Zone-Grouped Accordions */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-[9px] font-mono uppercase text-[var(--text-muted)]">
                    <span>KAROSER BÖLGELERİ & PANELLER</span>
                    <div className="flex items-center gap-2">
                      <button onClick={selectAllPanels} className="hover:text-[var(--text-primary)] underline cursor-pointer">
                        Tümü
                      </button>
                      <span>&bull;</span>
                      <button onClick={clearSelection} className="hover:text-[var(--text-primary)] underline cursor-pointer">
                        Sıfırla
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                    {zones.map((zone) => {
                      const isOpen = openZones[zone.id];
                      return (
                        <div key={zone.id} className="border border-[var(--border-subtle)] bg-[var(--bg-tertiary)]">
                          {/* Zone Header */}
                          <div
                            onClick={() => toggleZone(zone.id)}
                            className="p-2.5 flex items-center justify-between cursor-pointer hover:bg-[var(--border-subtle)] transition-colors"
                          >
                            <span className="text-xs font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider">
                              {isOpen ? '▼' : '▶'} {zone.title} ({zone.panels.length})
                            </span>
                            <button
                              type="button"
                              onClick={(e) => selectZonePanels(zone.id, e)}
                              className="text-[9px] font-mono uppercase text-[var(--text-muted)] hover:text-[var(--text-primary)] underline"
                            >
                              Tümünü Seç
                            </button>
                          </div>

                          {/* Zone Panels Pill Chips */}
                          {isOpen && (
                            <div className="p-2.5 pt-0 grid grid-cols-2 gap-1.5 border-t border-[var(--border-subtle)]">
                              {zone.panels.map((panel) => {
                                const isSelected = selectedPanelIds.includes(panel.id);
                                const isProtected = panelProtections[panel.id]?.hasPPF;

                                return (
                                  <button
                                    key={panel.id}
                                    type="button"
                                    onClick={() => togglePanelSelection(panel.id)}
                                    className={`px-2.5 py-2 text-left border text-[10px] font-mono uppercase transition-all flex items-center justify-between cursor-pointer ${
                                      isSelected
                                        ? 'bg-amber-400 text-black font-bold border-amber-400 shadow-md scale-[1.01]'
                                        : isProtected
                                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-300 font-semibold'
                                        : 'bg-[var(--bg-primary)] border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--border-strong)]'
                                    }`}
                                  >
                                    <span className="truncate">{panel.name}</span>
                                    <span>
                                      {isProtected ? 'PPF' : isSelected ? 'SECİLİ' : ''}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* PPF Action Buttons */}
                <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      disabled={selectedCount === 0}
                      onClick={handleApplyPPF}
                      className={`py-3 text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        justApplied
                          ? 'bg-emerald-500 text-black shadow-lg scale-[1.02]'
                          : selectedCount > 0
                          ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 shadow-md'
                          : 'bg-[var(--border-subtle)] text-[var(--text-muted)] cursor-not-allowed'
                      }`}
                    >
                      <span>{justApplied ? 'UYGULANDI' : `SECİLENLERE PPF UYGULA (${selectedCount})`}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        applyFullBodyPPF();
                        markStepDone(2);
                      }}
                      className="py-3 text-[10px] font-mono uppercase tracking-wider border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-all cursor-pointer text-center font-bold"
                    >
                      KOMPLE PPF (13)
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono pt-1">
                    <button
                      type="button"
                      disabled={selectedCount === 0}
                      onClick={removePPFFromSelectedPanels}
                      className="text-red-500 hover:text-red-600 underline disabled:opacity-30 cursor-pointer"
                    >
                      Seçiliden PPF Kaldır
                    </button>
                    <button
                      type="button"
                      onClick={clearAllPPF}
                      className="text-[var(--text-muted)] hover:text-[var(--text-primary)] underline cursor-pointer"
                    >
                      Tümünü Sıfırla
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: PPF FINISH SELECTION */}
            {activeStep === 3 && (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--text-muted)] block mb-1">
                    ADIM 03 / 04
                  </span>
                  <h3 className="text-xl font-sans font-bold text-[var(--text-primary)] uppercase tracking-tight">
                    PPF FİLM YÜZEY BİTİŞİ
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] font-light mt-1">
                    STIL TECH 210 Micron TPU zırhının dış yüzey optik karakterini belirleyin.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Ultra Gloss Option */}
                  <button
                    type="button"
                    onClick={() => {
                      setGlobalPPFFinish('gloss');
                      markStepDone(3);
                    }}
                    className={`w-full p-5 text-left border transition-all cursor-pointer ${
                      globalPPFFinish === 'gloss'
                        ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)] shadow-xl scale-[1.01]'
                        : 'bg-[var(--bg-tertiary)] border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--text-primary)]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold uppercase tracking-wider">
                        ULTRA PARLAK ŞEFFAF PPF
                      </span>
                      {globalPPFFinish === 'gloss' && (
                        <span className="text-[10px] font-mono font-bold bg-[var(--bg-primary)] text-[var(--text-primary)] px-2 py-0.5">
                          SEÇİLİ
                        </span>
                      )}
                    </div>
                    <p className={`text-[11px] font-mono leading-relaxed ${
                      globalPPFFinish === 'gloss' ? 'opacity-80' : 'text-[var(--text-secondary)]'
                    }`}>
                      Fabrika boyasının derinliğini ve parlaklığını artırır. Isı ile kendi kendini onaran hidrofobik üst katman.
                    </p>
                  </button>

                  {/* Satin Matte Option */}
                  <button
                    type="button"
                    onClick={() => {
                      setGlobalPPFFinish('satin');
                      markStepDone(3);
                    }}
                    className={`w-full p-5 text-left border transition-all cursor-pointer ${
                      globalPPFFinish === 'satin'
                        ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] border-[var(--text-primary)] shadow-xl scale-[1.01]'
                        : 'bg-[var(--bg-tertiary)] border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--text-primary)]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold uppercase tracking-wider">
                        SATEN MAT ZIRH PPF
                      </span>
                      {globalPPFFinish === 'satin' && (
                        <span className="text-[10px] font-mono font-bold bg-[var(--bg-primary)] text-[var(--text-primary)] px-2 py-0.5">
                          SEÇİLİ
                        </span>
                      )}
                    </div>
                    <p className={`text-[11px] font-mono leading-relaxed ${
                      globalPPFFinish === 'satin' ? 'opacity-80' : 'text-[var(--text-secondary)]'
                    }`}>
                      Orijinal gövde rengini saten ipeksi mat dokuya dönüştürür. Üstün çizik gizleme ve kusursuz yüzey zırhı.
                    </p>
                  </button>
                </div>

                {/* Trust Callout */}
                <div className="p-4 border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] space-y-1">
                  <div className="text-[10px] font-mono uppercase text-emerald-500 font-bold">
                    7 YIL RESMİ YAZILI GARANTİ
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] font-light">
                    Solma, çatlama, sararma ve kalkmaya karşı resmi sertifikalı garanti belgesi ile teslim edilir.
                  </p>
                </div>
              </div>
            )}

            {/* STEP 4: SUMMARY & DIRECT QUOTE SPECIFICATION */}
            {activeStep === 4 && (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--text-muted)] block mb-1">
                    ADIM 04 / 04
                  </span>
                  <h3 className="text-xl font-sans font-bold text-[var(--text-primary)] uppercase tracking-tight">
                    KORUMA KONFİGÜRASYONU
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] font-light mt-1">
                    Tüm seçimleriniz tamamlandı. WhatsApp üzerinden veya doğrudan teklif alabilirsiniz.
                  </p>
                </div>

                {/* Spec Summary Table */}
                <div className="space-y-2 text-[11px] font-mono border-y border-[var(--border-subtle)] py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-secondary)]">ARAÇ PLATFORMU:</span>
                    <span className="text-[var(--text-primary)] uppercase font-bold">
                      {vehicleType === 'sedan' ? '4-Kapı Sedan' : 'Lüks SUV'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-secondary)]">PPF FİLM BİTİŞİ:</span>
                    <span className="text-[var(--text-primary)] uppercase font-bold">
                      {globalPPFFinish === 'satin' ? 'Saten Mat Zırh' : 'Ultra Parlak Şeffaf'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--text-secondary)]">KORUNAN PANEL:</span>
                    <span className="text-emerald-500 font-bold">{protectedCount} / 13 Panel</span>
                  </div>
                </div>

                {/* Protected Panels Tags with X Removal */}
                <div className="space-y-2">
                  <span className="text-[9px] font-mono uppercase text-[var(--text-muted)] block">
                    KORUMAYA ALINAN PANELLER:
                  </span>
                  {protectedPanelsList.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                      {protectedPanelsList.map((name, idx) => {
                        const panel = TURKISH_BODY_PANELS.find((p) => p.name === name);
                        return (
                          <div
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 dark:text-emerald-300 text-[10px] font-mono"
                          >
                            <span>{name}</span>
                            {panel && (
                              <button
                                type="button"
                                onClick={() => togglePanelSelection(panel.id)}
                                className="hover:text-[var(--text-primary)] cursor-pointer ml-1 text-[var(--text-muted)]"
                                title="Korumadan Çıkar"
                              >
                                X
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-xs text-[var(--text-muted)] italic">
                      Henüz PPF uygulanmış panel bulunmuyor. Adım 2&apos;den panel ekleyebilirsiniz.
                    </p>
                  )}
                </div>

                {/* Price Estimate Card */}
                <div className="p-4 bg-gradient-to-tr from-[var(--bg-tertiary)] to-[var(--bg-secondary)] border border-[var(--border-subtle)] space-y-1">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                    TAHMİNİ KORUMA BEDELİ
                  </span>
                  <div className="text-2xl font-mono font-bold text-[var(--text-primary)]">
                    {priceDisplay}
                  </div>
                  <p className="text-[10px] text-[var(--text-secondary)] font-light">
                    7 Yıl Garanti &bull; STIL TECH 210 Micron TPU dahil.
                  </p>
                </div>
              </div>
            )}

            {/* Sticky Bottom Step Navigation Bar */}
            <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                {activeStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="text-[var(--text-muted)] hover:text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                  >
                    <span>←</span>
                    <span>GERİ</span>
                  </button>
                ) : (
                  <span className="text-[var(--text-muted)] text-[10px] uppercase">ADIM 1 / 4</span>
                )}

                <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
                  <span className="text-emerald-500 font-bold">{protectedCount} Panel PPF</span>
                </div>

                {activeStep === 4 ? (
                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="px-5 py-2.5 text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer bg-[#25D366] hover:bg-[#20bd5a] text-black shadow-xl"
                  >
                    WHATSAPP'TAN TEKLİF AL →
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-5 py-2.5 text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 shadow-lg"
                  >
                    İLERİ →
                  </button>
                )}
              </div>

              {/* Extra WhatsApp Contact & Appointment Button in Step 4 */}
              {activeStep === 4 && (
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full py-2.5 border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--text-primary)] text-[10px] font-mono uppercase tracking-wider transition-all text-center cursor-pointer"
                  >
                    ÖZETİ İNCELE &amp; ÖZEL NOT EKLE
                  </button>
                  <button
                    type="button"
                    onClick={scrollToAppointment}
                    className="w-full py-2 text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all text-center cursor-pointer"
                  >
                    Online Randevu Formuna Git &darr;
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
