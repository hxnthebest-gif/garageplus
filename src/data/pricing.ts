/**
 * MERKEZİ FİYATLANDIRMA SİSTEMİ (CENTRALIZED PRICING CONFIGURATION)
 * 
 * Fiyatları buradan tek bir noktadan yönetebilirsiniz.
 * Değer `null` bırakıldığında sitede otomatik olarak "Teklif Al" / "Fiyat için iletişime geçin" gösterilir.
 * Rakam girildiğinde (ör: 45000) otomatik olarak "₺45.000" şeklinde Türk Lirası formatında gösterilir.
 */

export interface PricingConfig {
  currency: string;
  currencySymbol: string;
  ppfPackages: {
    komple: {
      sedan: number | null;
      suv: number | null;
    };
    onKoruma: {
      sedan: number | null;
      suv: number | null;
    };
    custom: {
      sedan: number | null;
      suv: number | null;
    };
  };
  ppfPanels: Record<string, { sedan: number | null; suv: number | null }>;
  otherServices: {
    renkDegisimi: number | null;
    camFilmi: number | null;
    boyasizGocukOnarimi: number | null;
  };
}

export const PRICING_CONFIG: PricingConfig = {
  currency: 'TRY',
  currencySymbol: '₺',

  // PPF Paket Fiyatları (TL cinsinden veya null)
  ppfPackages: {
    komple: {
      sedan: null, // İleride örn: 45000
      suv: null    // İleride örn: 52000
    },
    onKoruma: {
      sedan: null, // İleride örn: 22000
      suv: null    // İleride örn: 25000
    },
    custom: {
      sedan: null,
      suv: null
    }
  },

  // Tekil Panel Bazlı Fiyatlar (TL veya null)
  ppfPanels: {
    kaput: { sedan: null, suv: null },
    on_tampon: { sedan: null, suv: null },
    camurluk_fl: { sedan: null, suv: null },
    camurluk_fr: { sedan: null, suv: null },
    kapi_fl: { sedan: null, suv: null },
    kapi_fr: { sedan: null, suv: null },
    kapi_rl: { sedan: null, suv: null },
    kapi_rr: { sedan: null, suv: null },
    tavan: { sedan: null, suv: null },
    ayna_l: { sedan: null, suv: null },
    ayna_r: { sedan: null, suv: null },
    bagaj: { sedan: null, suv: null },
    arka_tampon: { sedan: null, suv: null }
  },

  // Diğer Hizmet Başlangıç Fiyatları (TL veya null)
  otherServices: {
    renkDegisimi: null,
    camFilmi: null,
    boyasizGocukOnarimi: null
  }
};

/**
 * Türk Lirası para birimi formatlayıcı
 * @param amount Sayı veya null
 * @param fallback Değer null olduğunda dönecek Türkçe metin
 */
export function formatPrice(
  amount: number | null | undefined,
  fallback: string = 'Teklif Alın'
): string {
  if (amount === null || amount === undefined || amount <= 0) {
    return fallback;
  }

  // Türkiye standart formatı: ₺45.000
  const formattedNumber = new Intl.NumberFormat('tr-TR', {
    maximumFractionDigits: 0
  }).format(amount);

  return `₺${formattedNumber}`;
}

/**
 * Fiyatın tanımlı olup olmadığını kontrol eder
 */
export function hasDefinedPrice(amount: number | null | undefined): boolean {
  return typeof amount === 'number' && amount > 0;
}
