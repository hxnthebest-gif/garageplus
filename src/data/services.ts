export interface ServiceDetail {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  specs: { label: string; value: string }[];
  badge?: string;
  isPrimary?: boolean;
}

export const SERVICES: ServiceDetail[] = [
  {
    id: 'ppf-kaplama',
    slug: 'ppf-kaplama',
    number: '01',
    title: 'PPF KAPLAMA (BOYA KORUMA FİLMİ)',
    shortTitle: 'PPF Kaplama',
    tagline: 'STIL TECH 210 Micron TPU Zırh ile Görünmez Koruma',
    description:
      'Yüksek hızda taş darbelerine, kılcal çiziklere, yol tuzuna ve kimyasal lekelere karşı aracınızın orijinal boyasını görünmez bir zırhla koruyun.',
    longDescription:
      'STIL TECH 210 Micron TPU teknolojisi sayesinde aracınızın fabrika boyasını dış etkenlere karşı koruma altına alıyoruz. Kendi kendini yenileyen (self-healing) termal üst katman, güneş veya sıcak su etkisiyle kılcal çizikleri yok eder. Uygulama öncesinde yapılan kil ve demirtozu arındırma işlemi ile pürüzsüz bir yüzey elde edilir ve 7 yıl solma-sararma garantisi sunulur.',
    features: [
      'STIL TECH 210 Micron kalınlığında esnek TPU materyal',
      '7 yıl solma, sararma ve çatlamaya karşı yazılı garanti',
      'Isı ile kendi kendini onaran (Self-Healing) teknoloji',
      'Uygulama öncesi mikron düzeyinde kil ve demirtozu arındırma',
      'Tozsuz, iklimlendirilmiş temiz oda baylarında montaj',
      'Milimetrik kenar kıvırma işçiliği ile ek yeri görünmezliği'
    ],
    specs: [
      { label: 'Film Kalınlığı', value: '210 Mikron (TPU)' },
      { label: 'Garanti Süresi', value: '7 Yıl Solma & Sararma' },
      { label: 'Yüzey Hazırlığı', value: 'Kil & Demirtozu Arındırma' },
      { label: 'Kendi Kendini Onarma', value: 'Termal Aktif (Güneş/Sıcaklık)' }
    ],
    badge: 'EN ÇOK TERCİH EDİLEN',
    isPrimary: true
  },
  {
    id: 'renk-degisimi',
    slug: 'renk-degisimi',
    number: '02',
    title: 'ARAÇ RENK DEĞİŞİMİ (FOLYO KAPLAMA)',
    shortTitle: 'Renk Değişimi',
    tagline: 'Orijinal Boyaya Zarar Vermeden Kişiselleştirilmiş Stil Dönüşümü',
    description:
      'Aracınıza stil katacak mat, saten, parlak veya metalik renk seçenekleriyle aracınızın görünümünü tamamen yenileyin.',
    longDescription:
      'Geniş renk ve doku yelpazesine sahip birinci sınıf döküm araç kaplama folyoları ile aracınızı hayal ettiğiniz görünüme kavuşturuyoruz. Orijinal boyaya hiçbir zarar vermeyen, istendiğinde iz bırakmadan sökülebilen premium malzemelerle profesyonel işçilik sunuyoruz.',
    features: [
      'Yüzlerce parlak, saten, mat ve özel renk seçeneği',
      'Gövde kıvrımlarına kusursuz oturan birinci sınıf döküm folyo',
      'Orijinal boyaya zarar vermeyen, iz bırakmadan sökülebilir yapı',
      'UV ışınlarına ve hafif dış etkenlere karşı boyayı koruma',
      'Kapı içleri ve detaylarda temiz, profesyonel kesim'
    ],
    specs: [
      { label: 'Malzeme Tipi', value: 'Premium Cast (Döküm) Folyo' },
      { label: 'Yüzey Seçenekleri', value: 'Mat, Saten, Parlak, Metalik' },
      { label: 'Sökülebilirlik', value: 'İz Bırakmadan Güvenli Söküm' },
      { label: 'Uygulama Süresi', value: 'Araç Modelinde Ortalama 2-3 Gün' }
    ],
    badge: 'ESTETİK DÖNÜŞÜM'
  },
  {
    id: 'cam-filmi',
    slug: 'cam-filmi',
    number: '03',
    title: 'ARAÇ CAM FİLMİ',
    shortTitle: 'Cam Filmi',
    tagline: 'Termal Isı Yalıtımı, UV Koruması ve Üstün Sürüş Konforu',
    description:
      'Zararlı UV ışınlarını engelleyen, kabin içi sıcaklığı düşüren ve parlamayı önleyen yüksek performanslı cam filmi uygulaması.',
    longDescription:
      'Güneşin kavurucu sıcağını ve zararlı ultraviyole ışınlarını kırarak kabin içi iklimi koruyan, klimanın yükünü hafifleten ve sürüş güvenliğini artıran premium cam filmleri uyguluyoruz. Hem gizlilik hem de konfor sağlarken gece sürüşünde optik netliği bozmaz.',
    features: [
      'Güneş ısısını (IR) yüksek oranda geri yansıtma',
      '%99’a varan zararlı UV radyasyon blokajı',
      'Kabin içi döşemelerin ve konsolun solmasını önleme',
      'Kaza anında camın dağılmasını engelleyen güvenlik desteği',
      'İçeriden dışarıya gece-gündüz kristal netliğinde görüş'
    ],
    specs: [
      { label: 'UV Koruması', value: '%99 Blokaj' },
      { label: 'Isı Reddi', value: 'Yüksek Termal Yalıtım' },
      { label: 'Ton Seçenekleri', value: 'Yasal Açık, Orta, Koyu Tonlar' },
      { label: 'Görüş Kalitesi', value: 'Yüksek Optik Berraklık' }
    ],
    badge: 'KONFOR & GÜVENLİK'
  },
  {
    id: 'boyasiz-gocuk-onarimi',
    slug: 'boyasiz-gocuk-onarimi',
    number: '04',
    title: 'BOYASIZ GÖÇÜK ONARIMI (PDR)',
    shortTitle: 'Göçük Onarımı (PDR)',
    tagline: 'Orijinal Boyayı ve Fabrika Mikronunu Korumak İçin Kusursuz Müdahale',
    description:
      'Dolu hasarı, park çarpmaları ve kapı vuruklarında aracınızın orijinalliğini bozmadan, macunsuz ve boyasız onarım.',
    longDescription:
      'Paintless Dent Repair (PDR) teknolojisiyle aracın sac veya alüminyum panellerindeki göçükleri boyaya zarar vermeden özel el aletleri ve masaj teknikleriyle düzeltiyoruz. Aracınızın fabrika boyası bozulmaz, mikron kalınlığı değişmez ve tramer hasar kaydı oluşmaz.',
    features: [
      'Aracın orijinal fabrika boyasını ve verniğini %100 koruma',
      'Macun, zımpara ve fırın boya gerektirmeyen yöntem',
      'Araçta değer kaybı ve tramer kaydı oluşturmama',
      'Dolu hasarı ve otopark kapı vuruklarında yüksek başarı',
      'Geleneksel kaporta-boya işlemlerine göre çok daha hızlı teslimat'
    ],
    specs: [
      { label: 'Yöntem', value: 'Özel PDR Masaj & Vakum Aletleri' },
      { label: 'Boya Durumu', value: 'Fabrika Boyası Aynen Korunur' },
      { label: 'Tramer Etkisi', value: 'Hasar / Değer Kaybı Oluşmaz' },
      { label: 'Kullanım Alanı', value: 'Dolu, Park & Kapı Vurukları' }
    ],
    badge: 'ORİJİNALLİK KORUMA'
  }
];
