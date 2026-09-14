export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'ppf' | 'renk' | 'cam' | 'pdr' | 'garanti';
}

export const TURKISH_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'PPF (Boya Koruma Filmi) aracımın orijinal boyasına zarar verir mi?',
    answer:
      'Kesinlikle hayır. Kullandığımız STIL TECH 210 Micron TPU filmler, optik berraklıkta akrilik yapıştırıcı teknolojisine sahiptir. İleride sökülmek istendiğinde orijinal boyaya, verniğe hiçbir zarar vermez ve arkasında yapışkan kalıntısı bırakmaz.',
    category: 'ppf'
  },
  {
    id: 'faq-2',
    question: '7 yıllık garanti neleri kapsar?',
    answer:
      '7 yıllık yazılı garanti kapsamında filmin sararması, çatlaması, matlaşması, hava kabarcığı yapması ve yapışkan tabakasının delaminasyonu tam güvence altındadır.',
    category: 'garanti'
  },
  {
    id: 'faq-3',
    question: 'Kendi kendini yenileme (Self-Healing) özelliği nasıl çalışır?',
    answer:
      'STIL TECH 210 Micron TPU filmin en üst katmanında yer alan termo-elastik polimer yapı, güneş ışığı veya ılık su gibi ısı kaynaklarıyla temas ettiğinde mikro düzeydeki kılcal çizikleri ve hareleri kendi kendine yok ederek pürüzsüzleşir.',
    category: 'ppf'
  },
  {
    id: 'faq-4',
    question: 'Boyasız Göçük Onarımı (PDR) hangi tür hasarlarda uygulanabilir?',
    answer:
      'Boya bütünlüğü bozulmamış, sac veya alüminyum panellerdeki dolu darbeleri, park kapı vurukları ve hafif ezilmeler PDR yöntemiyle macunsuz ve boyasız olarak %100 fabrika orijinalinde düzeltilir. Tramer kaydı oluşmaz.',
    category: 'pdr'
  },
  {
    id: 'faq-5',
    question: 'Renk değişimi folyosu ile PPF arasındaki fark nedir?',
    answer:
      'PPF (Boya Koruma Filmi) 210 mikron kalınlığında, darbe emici ve şeffaf termoplastik poliüretan (TPU) bir zırhtır. Renk değişimi ise aracın rengini ve dokusunu (mat, saten, parlak vb.) değiştirmek amacıyla uygulanan estetik döküm folyo kaplamadır.',
    category: 'renk'
  },
  {
    id: 'faq-6',
    question: 'Uygulama ne kadar sürer ve randevu süreci nasıl işler?',
    answer:
      'Ön koruma paketleri genellikle 1 günde, komple gövde PPF kaplama ise yüzey hazırlığı ve temiz oda montajı dahil ortalama 2-3 iş gününde tamamlanır. Web sitemiz veya 0546 261 13 13 numaralı WhatsApp hattımızdan randevu oluşturabilirsiniz.',
    category: 'ppf'
  }
];
