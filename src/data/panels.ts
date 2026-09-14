import { PRICING_CONFIG, formatPrice } from './pricing';

export interface TurkishBodyPanel {
  id: string;
  name: string;
  category: 'front' | 'sides' | 'roof' | 'rear' | 'details';
  categoryLabel: string;
  description: string;
}

export interface TurkishPaintSwatch {
  id: string;
  name: string;
  colorName: string;
  hex: string;
  finishType: 'metalik' | 'parlak' | 'mat_saten';
  finishLabel: string;
}

export const TURKISH_BODY_PANELS: TurkishBodyPanel[] = [
  {
    id: 'kaput',
    name: 'Kaput',
    category: 'front',
    categoryLabel: 'Ön Bölge',
    description: 'Yolculuk sırasında doğrudan taş çarpması, sürtünme ve sinek asitlerine en çok maruz kalan ana panel.'
  },
  {
    id: 'on_tampon',
    name: 'Ön Tampon',
    category: 'front',
    categoryLabel: 'Ön Bölge',
    description: 'Yüksek hızda taş darbeleri, kaldırım temasları ve hava akışındaki kum taneciklerine karşı ilk temas hattı.'
  },
  {
    id: 'camurluk_fl',
    name: 'Sol Ön Çamurluk',
    category: 'front',
    categoryLabel: 'Ön Bölge',
    description: 'Tekerlekten sıçrayan taşlar ve aerodinamik sürtünmeye karşı koruma.'
  },
  {
    id: 'camurluk_fr',
    name: 'Sağ Ön Çamurluk',
    category: 'front',
    categoryLabel: 'Ön Bölge',
    description: 'Sağ ön tekerlek sıçramaları ve yol molozlarına karşı koruma kalkanı.'
  },
  {
    id: 'kapi_fl',
    name: 'Sol Ön Kapı',
    category: 'sides',
    categoryLabel: 'Yan Gövde',
    description: 'Otoparklarda diğer araçların kapı çarpmaları ve yan sürtünmelere karşı koruma.'
  },
  {
    id: 'kapi_fr',
    name: 'Sağ Ön Kapı',
    category: 'sides',
    categoryLabel: 'Yan Gövde',
    description: 'Yolcu iniş-biniş temasları ve dar alan kapı açılmalarına karşı zırh.'
  },
  {
    id: 'kapi_rl',
    name: 'Sol Arka Kapı',
    category: 'sides',
    categoryLabel: 'Yan Gövde',
    description: 'Geniş arka çamurluk öncesi yan rüzgarlar ve sıçrayan çamur/taş izlerine karşı koruma.'
  },
  {
    id: 'kapi_rr',
    name: 'Sağ Arka Kapı',
    category: 'sides',
    categoryLabel: 'Yan Gövde',
    description: 'Sağ yan gövde panel bütünlüğünü koruyan darbe emici katman.'
  },
  {
    id: 'tavan',
    name: 'Tavan',
    category: 'roof',
    categoryLabel: 'Üst Yüzey',
    description: 'Güneşin kavurucu UV radyasyonu, asit yağmurları ve kuş pisliği kimyasal yanıklarına karşı tam koruma.'
  },
  {
    id: 'ayna_l',
    name: 'Sol Yan Ayna',
    category: 'details',
    categoryLabel: 'Detaylar',
    description: 'En uç noktada yer alan ve taş çarpmalarına sık maruz kalan hassas ayna kapağı.'
  },
  {
    id: 'ayna_r',
    name: 'Sağ Yan Ayna',
    category: 'details',
    categoryLabel: 'Detaylar',
    description: 'Aerodinamik sağ ayna kapağını taş sekmesi ve sürtünmelerden izole eder.'
  },
  {
    id: 'bagaj',
    name: 'Bagaj Kapağı',
    category: 'rear',
    categoryLabel: 'Arka Bölge',
    description: 'Valiz/eşya yükleme eşiği sürtünmeleri ve arka hava girdabı kaynaklı toz birikimlerine karşı koruma.'
  },
  {
    id: 'arka_tampon',
    name: 'Arka Tampon',
    category: 'rear',
    categoryLabel: 'Arka Bölge',
    description: 'Paralel park temasları, yükleme çizikleri ve şehir içi geri manevra risklerine karşı savunma.'
  }
];

export const TURKISH_PAINT_PALETTE: TurkishPaintSwatch[] = [
  {
    id: 'obsidian-black',
    name: 'Obsidyen Metalik Siyah',
    colorName: 'Siyah',
    hex: '#0d0e12',
    finishType: 'metalik',
    finishLabel: 'Metalik Derinlik'
  },
  {
    id: 'carrera-white',
    name: 'Carrera Saf Beyaz',
    colorName: 'Beyaz',
    hex: '#f5f6fa',
    finishType: 'parlak',
    finishLabel: 'Kristal Parlak'
  },
  {
    id: 'liquid-silver',
    name: 'Likit Rodyum Gümüş',
    colorName: 'Gümüş Gri',
    hex: '#c3c7cf',
    finishType: 'metalik',
    finishLabel: 'Metalik Parıltı'
  },
  {
    id: 'gt-slate',
    name: 'GT Füme Antrasit',
    colorName: 'Antrasit',
    hex: '#3b414a',
    finishType: 'metalik',
    finishLabel: 'Koyu Metalik'
  },
  {
    id: 'guards-red',
    name: 'Kırmızı Spor',
    colorName: 'Kırmızı',
    hex: '#c8102e',
    finishType: 'parlak',
    finishLabel: 'Canlı Parlak'
  },
  {
    id: 'miami-blue',
    name: 'Apex Yarış Mavisi',
    colorName: 'Mavi',
    hex: '#0070bb',
    finishType: 'metalik',
    finishLabel: 'Metalik Mavi'
  },
  {
    id: 'racing-green',
    name: 'Yarış Yeşili',
    colorName: 'Koyu Yeşil',
    hex: '#0e3a24',
    finishType: 'metalik',
    finishLabel: 'Derin Metalik'
  },
  {
    id: 'speed-yellow',
    name: 'Monza Hız Sarısı',
    colorName: 'Sarı',
    hex: '#f5b800',
    finishType: 'parlak',
    finishLabel: 'Parlak Sarı'
  },
  {
    id: 'frozen-bronze',
    name: 'Saten Bronz Mat',
    colorName: 'Bronz',
    hex: '#5c4838',
    finishType: 'mat_saten',
    finishLabel: 'Saten Mat'
  },
  {
    id: 'nardo-grey',
    name: 'Nardo Gri',
    colorName: 'Nardo Gri',
    hex: '#6b7278',
    finishType: 'parlak',
    finishLabel: 'Pastel Parlak'
  }
];

export function getPanelPriceDisplay(panelId: string, vehicleType: 'sedan' | 'suv'): string {
  const panelConfig = PRICING_CONFIG.ppfPanels[panelId];
  if (!panelConfig) return 'Teklif Al';
  const price = panelConfig[vehicleType];
  return formatPrice(price, 'Teklif Al');
}
