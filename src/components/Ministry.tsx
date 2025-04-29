import { useState } from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from './TranslationProvider';

type Ministry = {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  icon: string;
  responsibilities: string[];
  minister: {
    name: string;
    position: string;
    photo: string;
  };
};

const ministries: Ministry[] = [
  {
    id: 1,
    name: "Kementerian Dalam Negeri",
    description: "Menangani manajemen organisasi dan koordinasi internal.",
    longDescription: "Menangani manajemen organisasi dan koordinasi internal. Kementerian Dalam Negeri memainkan peran penting dalam keseluruhan fungsi BEM KEMA Universitas Telkom Purwokerto, memastikan bahwa kami mempertahankan standar keunggulan dan layanan kami kepada mahasiswa.",
    icon: "👥",
    responsibilities: [
      "Organization structure management",
      "Internal communication",
      "Member coordination",
      "Policy implementation",
      "Resource allocation"
    ],
    minister: {
      name: "Dedy Tigor Manurung",
      position: "Menteri Dalam Negeri",
      photo: "/assets/img/team/menteri-dalam-negeri.png"
    }
  },
  {
    id: 2,
    name: "Kementerian Luar Negeri",
    description: "Mengelola hubungan dengan organisasi dan pemangku kepentingan eksternal.",
    longDescription: "Kementerian Luar Negeri memainkan peran vital dalam membangun dan menjaga hubungan dengan organisasi internasional serta pemangku kepentingan eksternal. Melalui diplomasi aktif, Kementerian memperkuat kerja sama politik, ekonomi, dan budaya, sekaligus mempromosikan kepentingan Indonesia di forum global. Langkah ini mendorong stabilitas regional dan memperluas jejaring strategis Indonesia di dunia.",
    icon: "🌐",
    responsibilities: [
      "External partnerships",
      "Public relations",
      "Community engagement",
      "Collaborative projects",
      "Brand representation"
    ],
    minister: {
      name: "Yumaniar Hawari Azmi",
      position: "Menteri Luar Negeri",
      photo: "/assets/img/team/menteri-luar-negeri.png"
    }
  },
  {
    id: 3,
    name: "KOMINFO",
    description: "Menangani semua konten media, publikasi, dan strategi komunikasi.",
    longDescription: "Kementerian Komunikasi dan Informasi (KOMINFO) bertanggung jawab menangani semua konten media, publikasi, dan strategi komunikasi untuk memastikan penyebaran informasi yang akurat, transparan, dan edukatif. Melalui pengelolaan media digital, siaran televisi, dan radio, Kominfo memperkuat literasi masyarakat sekaligus menangkal disinformasi. Strategi komunikasi yang efektif juga digunakan untuk mendukung kebijakan pemerintah dan mempromosikan program-program nasional kepada publik.",
    icon: "📱",
    responsibilities: [
      "Social media management",
      "Content creation",
      "Event coverage",
      "Graphic design",
      "Public announcements"
    ],
    minister: {
      name: "Fiqri Aulia Muhammad B",
      position: "Menteri KOMINFO",
      photo: "/assets/img/team/menteri-kominfo.png"
    }
  },
  {
    id: 4,
    name: "Kementerian Kaderisasi",
    description: "Berfokus pada kebutuhan, hak, dan kesejahteraan mahasiswa.",
    longDescription: "Kementerian Kaderisasi berfokus pada pemenuhan kebutuhan, perlindungan hak, dan peningkatan kesejahteraan mahasiswa sebagai calon pemimpin masa depan. Melalui program pengembangan kapasitas, advokasi, dan dukungan fasilitas, kementerian ini memastikan mahasiswa memiliki lingkungan belajar yang inklusif dan berdaya saing. Upaya ini tidak hanya membangun karakter kepemimpinan, tetapi juga mempersiapkan mahasiswa untuk berkontribusi aktif dalam pembangunan bangsa.",
    icon: "🎓",
    responsibilities: [
      "Student advocacy",
      "Scholarship information",
      "Rights protection",
      "Wellness programs",
      "Support services"
    ],
    minister: {
      name: "Khairan Dai Sahito",
      position: "Menteri KADERISASI",
      photo: "/assets/img/team/menteri-kaderisasi.png"
    }
  },
  {
    id: 5,
    name: "Kementerian Minat dan Bakat",
    description: "Mempromosikan kesadaran budaya dan ekspresi artistik di kampus.",
    longDescription: "Kementerian Minat dan Bakat (MINBAT) berperan aktif mempromosikan kesadaran budaya serta mendorong ekspresi artistik di lingkungan kampus. Melalui berbagai kegiatan seperti festival seni, workshop, dan kompetisi kreatif, kementerian ini memberikan wadah bagi mahasiswa untuk mengembangkan talenta sekaligus melestarikan kekayaan budaya Indonesia. Inisiatif ini tidak hanya memperkaya kehidupan kampus, tetapi juga membentuk generasi muda yang apresiatif terhadap seni dan berkarakter kuat.",
    icon: "🎭",
    responsibilities: [
      "Cultural events",
      "Art exhibitions",
      "Traditional performances",
      "Creative workshops",
      "Talent development"
    ],
    minister: {
      name: "Vickram Eka Faza",
      position: "Menteri Minat dan Bakat",
      photo: "/assets/img/team/menteri-minat-dan-bakat.png"
    }
  },
  {
    id: 6,
    name: "Kementerian Ekonomi Kreatif",
    description: "Berfokus pada keunggulan akademik dan dukungan pendidikan.",
    longDescription: "Kementerian Ekonomi Kreatif (EKRAF) tidak hanya berfokus pada pengembangan industri kreatif, tetapi juga mendorong keunggulan akademik dan dukungan pendidikan sebagai fondasi inovasi. Melalui kolaborasi dengan perguruan tinggi, pelatihan berbasis kompetensi, serta pendampingan riset terapan, kementerian ini memastikan terciptanya talenta kreatif yang unggul dan siap bersaing di pasar global. Dengan memadukan pendidikan berkualitas dengan peluang ekonomi kreatif, mahasiswa dibekali keterampilan relevan untuk menjadi pionir di industri masa depan.",
    icon: "💡",
    responsibilities: [
      "Study groups",
      "Academic competitions",
      "Learning resources",
      "Educational workshops",
      "Research promotion"
    ],
    minister: {
      name: "Rina Wijaya",
      position: "Menteri Ekonomi Kreatif",
      photo: "/assets/img/team/menteri-ekonomi-kreatif.png"
    }
  },
  {
    id: 7,
    name: "Advokasi & Kajian Strategis",
    description: "Menangani advokasi mahasiswa dan melakukan kajian strategis untuk pengembangan kebijakan kampus.",
    longDescription: "Kementerian Advokasi & Kajian Strategis (ADKASTRAT) berperan sebagai penghubung antara mahasiswa dan pihak kampus dengan menangani isu-isu advokasi serta melakukan kajian mendalam untuk pengembangan kebijakan yang pro-mahasiswa. Melalui riset berbasis data, diskusi terbuka, dan negosiasi strategis, kementerian ini memastikan aspirasi mahasiswa terdengar dan diakomodasi dalam perumusan kebijakan kampus. Selain itu, kajian-kajian yang dihasilkan menjadi landasan bagi terciptanya lingkungan kampus yang lebih inklusif, transparan, dan berorientasi pada kemajuan bersama.",
    icon: "⚖️",
    responsibilities: [
      "Advokasi hak mahasiswa",
      "Kajian kebijakan kampus",
      "Analisis isu strategis",
      "Pengembangan rekomendasi",
      "Mediasi konflik"
    ],
    minister: {
      name: "Jaiz Cahya Prasetya",
      position: "Menteri ADKASTRAT",
      photo: "/assets/img/team/menteri-adkastrat.png"
    }
  },
  {
    id: 8,
    name: "Analisis Data",
    description: "Fokus pada pengumpulan dan analisis data untuk pengambilan keputusan berbasis bukti.",
    longDescription: "Kementerian Analisis Data berperan sebagai pusat pengolahan informasi kampus dengan fokus pada pengumpulan, pengelolaan, dan analisis data untuk mendukung pengambilan keputusan berbasis bukti (evidence-based decision making). Melalui metode riset kuantitatif dan kualitatif, kementerian ini menyediakan rekomendasi strategis bagi seluruh elemen kemahasiswaan berdasarkan temuan data yang akurat dan terpercaya. Hasil analisis digunakan untuk memetakan kebutuhan mahasiswa, mengevaluasi program kerja, serta mengoptimalkan alokasi sumber daya kampus, sehingga seluruh kebijakan dan inisiatif kemahasiswaan dapat tepat sasaran dan berdampak maksimal.",
    icon: "📊",
    responsibilities: [
      "Pengumpulan data mahasiswa",
      "Analisis tren kampus",
      "Visualisasi data",
      "Pelaporan statistik",
      "Riset kebijakan"
    ],
    minister: {
      name: "Wildan Daffa Hakim P.A",
      position: "Menteri Analis Data",
      photo: "public/assets/img/team/menteri-analis-data.png"
    }
  }
];

export default function Ministry() {
  const [activeMinistry, setActiveMinistry] = useState<Ministry>(ministries[0]);
  const { t } = useTranslation();

  return (
    <section id="ministry" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('Our')} <span className="text-kema-red">{t('Ministries')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('Discover the different departments that make up BEM KEMA and how they work together to create an impactful student experience.')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Ministry Sidebar */}
          <div className="lg:col-span-4 bg-white dark:bg-gray-800 rounded-xl shadow-md p-1">
            <div className="space-y-1">
              {ministries.map((ministry) => (
                <button
                  key={ministry.id}
                  onClick={() => setActiveMinistry(ministry)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeMinistry.id === ministry.id
                      ? "bg-kema-red text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{ministry.icon}</span>
                    <div>
                      <h3 className="font-medium">{ministry.name}</h3>
                      <p className={`text-sm ${
                        activeMinistry.id === ministry.id
                          ? "text-white/80"
                          : "text-gray-500 dark:text-gray-400"
                      }`}>
                        {ministry.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Ministry Details */}
          <div className="lg:col-span-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <div className="animate-fade-in">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{activeMinistry.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {activeMinistry.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-justify">
                  {(activeMinistry.longDescription || activeMinistry.description)}
                </p>
                
                {/* Minister Information */}
                <div className="mb-8 flex flex-col items-center sm:items-start sm:flex-row sm:space-x-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 sm:mb-0">
                    <img 
                      src={activeMinistry.minister.photo} 
                      alt={activeMinistry.minister.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                      {activeMinistry.minister.name}
                    </h4>
                    <p className="text-kema-red dark:text-kema-light-red font-medium mb-2">
                      {activeMinistry.minister.position}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t('Leading our initiatives with dedication and expertise.')}
                    </p>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">{t('Key Responsibilities')}</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeMinistry.responsibilities.map((resp, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mt-1 mr-3">
                        <Check size={12} className="text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
