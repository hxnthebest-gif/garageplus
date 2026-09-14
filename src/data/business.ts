export interface BusinessInfo {
  name: string;
  legalName: string;
  tagline: string;
  subTagline: string;
  experienceYears: number;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappLink: string;
  instagram: string;
  instagramUrl: string;
  googleBusinessUrl: string;
  address: {
    street: string;
    neighborhood: string;
    district: string;
    city: string;
    full: string;
    googleMapsUrl: string;
  };
  workingHours: {
    days: string;
    hours: string;
    full: string;
  };
  warrantyInfo: {
    ppfWarrantyYears: number;
    ppfMicron: number;
    ppfMaterial: string;
    ppfBrand: string;
    highlights: string[];
  };
}

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Garaj Plus Premium',
  legalName: 'Garaj Plus Premium Araç Koruma & Detailing',
  tagline: 'Kusursuz İşçilik, Tavizsiz Koruma',
  subTagline: 'İstanbul Bahçelievler’de 13 yıllık tecrübe ile aracınızı geleceğe ilk günkü kondisyonunda taşıyoruz.',
  experienceYears: 13,
  phone: '0546 261 13 13',
  phoneRaw: '05462611313',
  whatsappNumber: '905462611313',
  whatsappLink: 'https://wa.me/905462611313',
  instagram: '@garajpluspremium',
  instagramUrl: 'https://www.instagram.com/garajpluspremium/',
  googleBusinessUrl: 'https://maps.google.com/?cid=garajpluspremium',
  address: {
    street: 'Talatpaşa Cad. No:2',
    neighborhood: 'Bahçelievler Mah.',
    district: 'Bahçelievler',
    city: 'İstanbul',
    full: 'Bahçelievler Mah. Talatpaşa Cad. No:2, Bahçelievler / İstanbul',
    googleMapsUrl: 'https://maps.google.com/?q=Bahçelievler+Mah.+Talatpaşa+Cad.+No:2+İstanbul'
  },
  workingHours: {
    days: 'Pazartesi – Pazar (Haftanın 7 Günü)',
    hours: '09:00 – 20:00',
    full: 'Haftanın 7 Günü: 09:00 – 20:00'
  },
  warrantyInfo: {
    ppfWarrantyYears: 7,
    ppfMicron: 210,
    ppfMaterial: 'TPU (Termoplastik Poliüretan)',
    ppfBrand: 'STIL TECH',
    highlights: [
      'STIL TECH 210 Micron Üstün Yüzey Koruması',
      '7 Yıl Solma ve Sararma Garantisi',
      'Uygulama Öncesi Kil ve Demirtozu Arındırma',
      'Termal Kendi Kendini İyileştirme Özelliği',
      'Tozsuz, İklimlendirilmiş Temiz Oda Uygulaması'
    ]
  }
};
