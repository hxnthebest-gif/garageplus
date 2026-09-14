export interface GoogleCustomerReview {
  id: string;
  author: string;
  rating: number;
  dateRelative: string;
  comment: string;
  vehicleModel?: string;
  serviceType: string;
}

export const GOOGLE_REVIEWS_DATA = {
  averageRating: 5.0,
  totalReviewsCount: '150+',
  badgeText: 'Google İşletme Profili',
  subText: '13 yıllık güvenin Google üzerinde tescillenmiş gerçek kullanıcı yorumları.',
  reviews: [
    {
      id: 'rev-1',
      author: 'FurkaN Kocaman',
      rating: 5,
      dateRelative: 'Google Doğrulanmış Yorum',
      comment:
        'Togg aracımızı 0 km de komple ppf ile kaplattım Ahmet bey ve Halil beyin ilgisinden dolayı çok teşekkür ederim. Kesinlikle tavsiye ederim.',
      vehicleModel: 'Togg T10X',
      serviceType: 'Komple PPF Kaplama'
    },
    {
      id: 'rev-2',
      author: 'Luess',
      rating: 5,
      dateRelative: 'Google Doğrulanmış Yorum',
      comment:
        'Merhabalar bayiiden 0 aldığım Mercedes C200 aracımı Ahmet Bey\'e teslim ettim kendisinin ilgisi ve alakasından çok memnun kaldım normalde kolay kolay yorum yazmam ancak işçilikleri kusursuz hayırlı işler dilerim.',
      vehicleModel: 'Mercedes-Benz C200',
      serviceType: 'Komple PPF Kaplama'
    },
    {
      id: 'rev-3',
      author: 'Sefa Seven',
      rating: 5,
      dateRelative: 'Google Doğrulanmış Yorum',
      comment:
        'Aracım için PPF kaplama yaptırdım ve sonuçtan fazlasıyla memnunum. İşçilik çok titiz, kullanılan malzeme kaliteli ve uygulama gerçekten kusursuz. Aracı teslim alırken her detay kontrol edilmişti, içim rahat şekilde teslim aldım. Profesyonel bir ekip arayanlara kesinlikle tavsiye ederim.',
      vehicleModel: 'Premium Araç',
      serviceType: 'PPF Kaplama'
    },
    {
      id: 'rev-4',
      author: 'Özkan Ferhatoğlu',
      rating: 5,
      dateRelative: 'Google Doğrulanmış Yorum',
      comment:
        'Sıfır aldığım aracımı komple kaplattım. Araştırmalarım sonucu benim istediğim ppf ile kapladılar. Hicabi ve Ahmet ustamın ellerine sağlık. Aracınızı güvenle bırakabilirsiniz. A dan z ye heryerini kaplıyorlar.',
      vehicleModel: 'Sıfır km Araç',
      serviceType: 'Komple PPF Kaplama'
    },
    {
      id: 'rev-5',
      author: 'Yusuf Çelik',
      rating: 5,
      dateRelative: 'Google Doğrulanmış Yorum',
      comment:
        'Megane 4 Aracımı PPF kaplatmak için Ahmet Bey\'e teslim ettim güzel iş çıkardılar kendilerine çok teşekkür ederim.',
      vehicleModel: 'Renault Megane 4',
      serviceType: 'PPF Kaplama'
    },
    {
      id: 'rev-6',
      author: 'Selçuk Öztürk',
      rating: 5,
      dateRelative: 'Google Doğrulanmış Yorum',
      comment:
        'Harika işçilik güler yüz ve güvenin adresi herşey için teşekkürler.',
      vehicleModel: 'Binek Araç',
      serviceType: 'PPF & Koruma'
    }
  ]
};
