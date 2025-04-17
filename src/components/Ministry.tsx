import { useState } from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from './TranslationProvider';

type Ministry = {
  id: number;
  name: string;
  description: string;
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
    name: "Internal Affairs",
    description: "Handles organization management and internal coordination.",
    icon: "👥",
    responsibilities: [
      "Organization structure management",
      "Internal communication",
      "Member coordination",
      "Policy implementation",
      "Resource allocation"
    ],
    minister: {
      name: "Muhammad Haikal Faruq",
      position: "Minister of Internal Affairs",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 2,
    name: "External Affairs",
    description: "Manages relationships with external organizations and stakeholders.",
    icon: "🌐",
    responsibilities: [
      "External partnerships",
      "Public relations",
      "Community engagement",
      "Collaborative projects",
      "Brand representation"
    ],
    minister: {
      name: "Siti Fatimah",
      position: "Minister of External Affairs",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 3,
    name: "Media & Communication",
    description: "Handles all media content, publications, and communications strategy.",
    icon: "📱",
    responsibilities: [
      "Social media management",
      "Content creation",
      "Event coverage",
      "Graphic design",
      "Public announcements"
    ],
    minister: {
      name: "Budi Santoso",
      position: "Minister of Media & Communication",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 4,
    name: "Student Welfare",
    description: "Focuses on student needs, rights, and general welfare.",
    icon: "🛡️",
    responsibilities: [
      "Student advocacy",
      "Scholarship information",
      "Rights protection",
      "Wellness programs",
      "Support services"
    ],
    minister: {
      name: "Dewi Putri",
      position: "Minister of Student Welfare",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 5,
    name: "Arts & Culture",
    description: "Promotes cultural awareness and artistic expression on campus.",
    icon: "🎭",
    responsibilities: [
      "Cultural events",
      "Art exhibitions",
      "Traditional performances",
      "Creative workshops",
      "Talent development"
    ],
    minister: {
      name: "Agus Wijaya",
      position: "Minister of Arts & Culture",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 6,
    name: "Academic Affairs",
    description: "Focuses on academic excellence and educational support.",
    icon: "📚",
    responsibilities: [
      "Study groups",
      "Academic competitions",
      "Learning resources",
      "Educational workshops",
      "Research promotion"
    ],
    minister: {
      name: "Rina Wijaya",
      position: "Minister of Academic Affairs",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 7,
    name: "Advokasi & Kajian Strategis",
    description: "Menangani advokasi mahasiswa dan melakukan kajian strategis untuk pengembangan kebijakan kampus.",
    icon: "⚖️",
    responsibilities: [
      "Advokasi hak mahasiswa",
      "Kajian kebijakan kampus",
      "Analisis isu strategis",
      "Pengembangan rekomendasi",
      "Mediasi konflik"
    ],
    minister: {
      name: "Ahmad Rifai",
      position: "Minister of Strategic Studies & Advocacy",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  },
  {
    id: 8,
    name: "Analisis Data",
    description: "Fokus pada pengumpulan dan analisis data untuk pengambilan keputusan berbasis bukti.",
    icon: "📊",
    responsibilities: [
      "Pengumpulan data mahasiswa",
      "Analisis tren kampus",
      "Visualisasi data",
      "Pelaporan statistik",
      "Riset kebijakan"
    ],
    minister: {
      name: "Sarah Amalia",
      position: "Minister of Data Analysis",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
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
                
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {activeMinistry.description} Our {activeMinistry.name} ministry plays a vital role in 
                  the overall functioning of BEM KEMA Telkom University Purwokerto, ensuring that we 
                  maintain our standards of excellence and service to the student body.
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
