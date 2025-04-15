
import { useState } from 'react';
import { Check } from 'lucide-react';

type Ministry = {
  id: number;
  name: string;
  description: string;
  icon: string;
  responsibilities: string[];
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

export default function Ministry() {
  const [activeMinistry, setActiveMinistry] = useState<Ministry>(ministries[0]);

  return (
    <section id="ministry" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our <span className="text-kema-red">Ministries</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the different departments that make up BEM KEMA and how they work together
            to create an impactful student experience.
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
                
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Key Responsibilities</h4>
                
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
