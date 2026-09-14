'use client';

import React, { useState } from 'react';
import { BUSINESS_INFO } from '@/data/business';
import { SpotlightCard } from '@/components/MagicUI/SpotlightCard';
import { BorderBeam } from '@/components/MagicUI/BorderBeam';

export function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleModel: '',
    service: 'ppf_kaplama',
    vehicleCondition: 'sifir_km',
    preferredDate: '',
    preferredTime: '10:00',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const serviceLabels: Record<string, string> = {
      ppf_kaplama: 'PPF Kaplama (Boya Koruma Filmi)',
      renk_degisimi: 'Renk Değişimi (Araç Kaplama)',
      cam_filmi: 'Araç Cam Filmi',
      gocuk_onarimi: 'Boyasız Göçük Onarımı (PDR)'
    };

    const conditionLabels: Record<string, string> = {
      sifir_km: 'Sıfır km',
      kullanilmis: 'Kullanılmış',
      gocuk_var: 'Göçük düzeltme ihtiyacı var'
    };

    const text = `Merhaba Garaj Plus Premium,\n\nRandevu & Fiyat Talebi:\n- İsim: ${formData.name || 'Belirtilmedi'}\n- Telefon: ${formData.phone || 'Belirtilmedi'}\n- Araç: ${formData.vehicleModel || 'Belirtilmedi'}\n- Hizmet: ${serviceLabels[formData.service] || formData.service}\n- Araç Durumu: ${conditionLabels[formData.vehicleCondition] || formData.vehicleCondition}\n- Tercih Edilen Tarih: ${formData.preferredDate || 'En Kısa Sürede'}\n- Saat: ${formData.preferredTime}\n- Not: ${formData.notes || 'Yok'}`;

    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="randevu" className="relative w-full py-28 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Business Info & Direct Call */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-[10px] font-mono tracking-[0.25em] text-neutral-400 uppercase mb-2">
                11 / RANDEVU &amp; İLETİŞİM
              </div>
              <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[var(--text-primary)] uppercase leading-tight">
                ARACINIZ İÇİN <br />
                <span className="text-[var(--text-secondary)] font-light">RANDEVU ALIN.</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
              Aracınızı teslim almadan önce temiz oda bayimizi rezerve etmek ve uzman teknisyenlerimizle en doğru koruma planını belirlemek için formu doldurabilir veya WhatsApp hattımızdan bize doğrudan ulaşabilirsiniz.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 text-xs text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                <span>210 Micron TPU ile 7 yıl solma &amp; sararma garantili uygulama</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                <span>Uygulama öncesi mikron seviyesinde kil ve demirtozu arındırma</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                <span>Haftanın 7 günü: 09:00 – 20:00 kesintisiz hizmet</span>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Box with Spotlight */}
            <SpotlightCard className="p-6 sm:p-8 border border-[var(--border-subtle)] bg-[var(--card-bg)] space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                  HIZLI İLETİŞİM &amp; DANIŞMA
                </span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 border border-emerald-500/30 px-2 py-0.5 bg-emerald-500/10 font-bold">
                  7 GÜN AÇIK &bull; 09:00 - 20:00
                </span>
              </div>
              
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400 block hover:underline transition-all"
              >
                {BUSINESS_INFO.phone}
              </a>
              
              <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                {BUSINESS_INFO.address.full}
              </p>

              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/Bn7csitWF66jduqq6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--border-strong)] text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] hover:border-emerald-500 hover:text-emerald-500 transition-colors"
                >
                  <span>GOOGLE HARİTALARDA YOL TARİFİ AL</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: Appointment Form */}
          <SpotlightCard className="lg:col-span-7 p-8 sm:p-10 border border-[var(--border-subtle)] bg-[var(--card-bg)] shadow-2xl relative overflow-hidden">
            <BorderBeam size={220} duration={14} colorFrom="#10b981" colorTo="#38bdf8" />
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="border-b border-[var(--border-subtle)] pb-4 mb-4">
                  <h3 className="text-xl font-sans font-bold text-[var(--text-primary)] uppercase tracking-tight">
                    RANDEVU TALEP FORMU
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] font-light mt-1">
                    Müşteri temsilcilerimiz en kısa sürede sizinle iletişime geçerek rezervasyonunuzu onaylayacaktır.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                      AD SOYAD *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Adınız ve Soyadınız"
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-emerald-400 text-[var(--text-primary)] text-xs outline-none font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                      TELEFON NUMARASI *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="05XX XXX XX XX"
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-emerald-400 text-[var(--text-primary)] text-xs outline-none font-mono transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                      E-POSTA ADRESİ
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ornek@email.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-emerald-400 text-[var(--text-primary)] text-xs outline-none font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                      ARAÇ MODELİ &amp; YILI *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.vehicleModel}
                      onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                      placeholder="Örn: 2025 Togg T10X / BMW M3"
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-emerald-400 text-[var(--text-primary)] text-xs outline-none font-mono transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                      İSTENEN HİZMET *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-emerald-400 text-[var(--text-primary)] text-xs outline-none font-mono transition-colors"
                    >
                      <option value="ppf_kaplama">PPF Kaplama (Boya Koruma Filmi)</option>
                      <option value="renk_degisimi">Renk Değişimi (Araç Kaplama)</option>
                      <option value="cam_filmi">Araç Cam Filmi</option>
                      <option value="gocuk_onarimi">Boyasız Göçük Onarımı (PDR)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                      ARACIN MEVCUT DURUMU
                    </label>
                    <select
                      value={formData.vehicleCondition}
                      onChange={(e) => setFormData({ ...formData, vehicleCondition: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-emerald-400 text-[var(--text-primary)] text-xs outline-none font-mono transition-colors"
                    >
                      <option value="sifir_km">Sıfır km (Bayi Teslimatı)</option>
                      <option value="kullanilmis">Kullanılmış / İkinci El</option>
                      <option value="gocuk_var">Göçük Düzeltme İhtiyacı Var</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                      TERCİH EDİLEN TARİH
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-emerald-400 text-[var(--text-primary)] text-xs outline-none font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                      TERCİH EDİLEN SAAT
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-emerald-400 text-[var(--text-primary)] text-xs outline-none font-mono transition-colors"
                    >
                      <option value="09:00">09:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="16:00">16:00</option>
                      <option value="18:00">18:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] font-mono text-neutral-400 uppercase tracking-widest mb-1.5 font-bold">
                    NOTLAR / ÖZEL TALEPLER (OPSİYONEL)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Örn: Bayiden doğrudan teslim alınacak; teslimat öncesi polisaj durumu."
                    className="w-full px-3.5 py-2 bg-[var(--bg-primary)] border border-[var(--border-subtle)] focus:border-emerald-400 text-[var(--text-primary)] text-xs outline-none font-mono resize-none transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black text-[10px] font-mono font-bold uppercase tracking-[0.25em] transition-all cursor-pointer text-center shadow-lg"
                  >
                    RANDEVU TALEBİNİ İLET →
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all cursor-pointer text-center shadow-lg"
                  >
                    WHATSAPP İLE GÖNDER
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-400 font-bold">
                  TALEBİNİZ ALINDI
                </span>
                <h3 className="text-2xl font-sans font-bold text-[var(--text-primary)] uppercase tracking-tight">
                  RANDEVU İSTEĞİNİZ İLETİLDİ
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-light max-w-md mx-auto leading-relaxed">
                  Teşekkür ederiz Sn. <span className="text-[var(--text-primary)] font-bold">{formData.name}</span>. Randevu talebiniz Garaj Plus Premium ekibimize ulaşmıştır. Müşteri temsilcimiz en kısa sürede telefon ile dönüş yapacaktır.
                </p>
                <div className="pt-6 flex justify-center gap-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 border border-[var(--border-strong)] hover:border-emerald-400 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--text-primary)] cursor-pointer"
                  >
                    YENİ RANDEVU
                  </button>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="px-6 py-2.5 bg-[#25D366] text-black text-[10px] font-mono uppercase tracking-[0.2em] font-bold cursor-pointer"
                  >
                    WHATSAPP&apos;TAN YAZIN
                  </button>
                </div>
              </div>
            )}
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
