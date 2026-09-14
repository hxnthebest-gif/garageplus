import { PRICING_CONFIG, formatPrice } from './pricing';

export interface TurkishPackagePreset {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  warranty: string;
  badge?: string;
  popular?: boolean;
  includedPanelIds: string[];
  specs: { label: string; value: string }[];
}

export const TURKISH_PACKAGES: TurkishPackagePreset[] = [
  {
    id: 'komple',
    name: 'KOMPLE GÖVDE KORUMA (FULL BODY)',
    shortName: 'Komple Koruma',
    tagline: '360° Eksiksiz Dış Yüzey Zırhı',
    description:
      'Aracınızın tüm dış boyalı yüzeylerini kaplayan en kapsamlı koruma. Kaput, tamponlar, çamurluklar, kapılar, tavan ve bagaj dahil tüm karoser STIL TECH 210 Micron TPU ile mühürlenir.',
    warranty: '7 Yıl Solma & Sararma Garantisi',
    badge: 'EN KAPSAMLI KORUMA',
    popular: true,
    includedPanelIds: [
      'kaput',
      'on_tampon',
      'camurluk_fl',
      'camurluk_fr',
      'kapi_fl',
      'kapi_fr',
      'kapi_rl',
      'kapi_rr',
      'tavan',
      'ayna_l',
      'ayna_r',
      'bagaj',
      'arka_tampon'
    ],
    specs: [
      { label: 'Korunan Alan', value: '13 Dış Karoser Paneli (Tamamı)' },
      { label: 'Film Tipi', value: 'STIL TECH 210 Mikron TPU' },
      { label: 'Ön Hazırlık', value: 'Kil & Demirtozu Arındırma Dahil' },
      { label: 'Garanti', value: '7 Yıl Yazılı Garanti Belgesi' }
    ]
  },
  {
    id: 'on_koruma',
    name: 'ÖN BÖLGE KORUMA PAKETİ (TRACK PACK)',
    shortName: 'Ön Koruma',
    tagline: 'Yüksek Hızlı Taş Darbelerine Karşı Kritik Savunma',
    description:
      'Otoyol ve şehirlerarası sürüşlerde en çok taş ve böcek darbesi alan yüksek riskli bölgeleri (Kaput, Ön Tampon, Ön Çamurluklar ve Aynalar) zırhlar.',
    warranty: '7 Yıl Solma & Sararma Garantisi',
    badge: 'STRATEJİK TERCİH',
    popular: false,
    includedPanelIds: [
      'kaput',
      'on_tampon',
      'camurluk_fl',
      'camurluk_fr',
      'ayna_l',
      'ayna_r'
    ],
    specs: [
      { label: 'Korunan Alan', value: '6 Kritik Ön Bölge Paneli' },
      { label: 'Film Tipi', value: 'STIL TECH 210 Mikron TPU' },
      { label: 'Ön Hazırlık', value: 'Kil & Demirtozu Arındırma Dahil' },
      { label: 'Garanti', value: '7 Yıl Yazılı Garanti Belgesi' }
    ]
  },
  {
    id: 'custom',
    name: 'ÖZEL KİŞİSELLEŞTİRİLMİŞ PAKET',
    shortName: 'Özel Paket',
    tagline: 'İhtiyacınıza Göre Panel Panel Koruma',
    description:
      'Aracınızın kullanım profiline göre dilediğiniz panelleri (örneğin sadece kaput veya sadece tamponlar) 360° stüdyoda seçerek kendi koruma planınızı oluşturun.',
    warranty: '7 Yıl Solma & Sararma Garantisi',
    badge: 'KULLANICI SEÇİMİ',
    popular: false,
    includedPanelIds: [],
    specs: [
      { label: 'Korunan Alan', value: 'Seçilen Özel Paneller' },
      { label: 'Film Tipi', value: 'STIL TECH 210 Mikron TPU' },
      { label: 'Ön Hazırlık', value: 'Seçili Panellere Kil/Demirtozu Arındırma' },
      { label: 'Garanti', value: '7 Yıl Yazılı Garanti Belgesi' }
    ]
  }
];

/**
 * Paket fiyat metnini döner
 */
export function getPackagePriceDisplay(packageId: string, vehicleType: 'sedan' | 'suv'): string {
  const pkgConfig = PRICING_CONFIG.ppfPackages[packageId as keyof typeof PRICING_CONFIG.ppfPackages];
  if (!pkgConfig) return 'Teklif Alın';
  const price = pkgConfig[vehicleType];
  return formatPrice(price, 'Teklif Alın');
}
