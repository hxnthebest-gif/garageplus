export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export const TURKISH_PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'ARAÇ KABUL & DİJİTAL ANALİZ',
    subtitle: 'Kapsamlı Yüzey Taraması',
    description:
      'Araç stüdyoya kabul edildiğinde özel yüksek CRI ışık panelleri altında mikron kalınlık ölçerle boya kalınlığı ve mevcut yüzey kusurları taranır.'
  },
  {
    step: '02',
    title: 'KİL & DEMİRTOZU ARINDIRMA',
    subtitle: 'Mikro Düzeyde Kimyasal Arındırma',
    description:
      'Yüzeye yapışmış balata tozları, kimyasal tortular ve kireç kalıntıları özel nötr çözücüler ve sentetik kil hamurlarıyla sıfırlanır.'
  },
  {
    step: '03',
    title: 'YÜZEY HAZIRLIĞI & POLİSAJ',
    subtitle: 'Optik Berraklık Seviyesi',
    description:
      'Film altına hiçbir hare ve kılcal çizik hapsolmaması için çift etkili (dual-action) makinelerle boya kusursuz ayna parlaklığına kavuşturulur.'
  },
  {
    step: '04',
    title: 'TOZSUZ TEMİZ ODA PPF UYGULAMASI',
    subtitle: 'STIL TECH 210 Micron TPU',
    description:
      'Hava sirkülasyonu filtrelenmiş ve nem/sıcaklığı optimize edilmiş temiz oda baylarında sertifikalı master teknisyenlerce montaj yapılır.'
  },
  {
    step: '05',
    title: 'KENAR KIVIRMA & ISIL SABİTLEME',
    subtitle: 'Görünmez Bitiş Çizgileri',
    description:
      'Film kenarları panel kıvrımlarının arkasına gizlenerek sarılır ve kısa dalga kızılötesi (IR) ısı tabancalarıyla polimer yapıştırıcı mühürlenir.'
  },
  {
    step: '06',
    title: '48 NOKTA KONTROL & TESLİMAT',
    subtitle: '7 Yıllık Garanti Tescili',
    description:
      '48 farklı açıdan yapılan son kalite kontrolünün ardından hidrofobik koruma katmanı uygulanır ve 7 yıllık yazılı garanti belgesi teslim edilir.'
  }
];
