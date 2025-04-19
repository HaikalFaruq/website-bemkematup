import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from './TranslationProvider';

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqItems: FAQItem[] = [
    {
      question: t('What is BEM KEMA?'),
      answer: t('BEM KEMA stands for Badan Eksekutif Mahasiswa Keluarga Mahasiswa, which is the Student Executive Board of Telkom University Purwokerto. It\'s the official student organization that represents all students and coordinates various activities and initiatives across campus.')
    },
    {
      question: t('How can I join BEM KEMA?'),
      answer: t('Students can join BEM KEMA through our annual recruitment process, typically held at the beginning of the academic year. Keep an eye on our official social media channels and campus announcements for recruitment information. We welcome students from all departments and years!')
    },
    {
      question: t('What kind of activities does BEM KEMA organize?'),
      answer: t('BEM KEMA organizes a wide range of activities including academic seminars, cultural festivals, sports competitions, community service projects, leadership workshops, and many other events that enrich campus life and provide valuable experiences for students.')
    },
    {
      question: t('How can I propose an event or initiative to BEM KEMA?'),
      answer: t('We welcome student initiatives! You can submit your proposals by contacting the relevant ministry or department via email or during our regular office hours. Alternatively, you can use the contact form on this website to share your ideas with us.')
    },
    {
      question: t('Does BEM KEMA offer any support for student clubs?'),
      answer: t('Yes, BEM KEMA provides support for registered student clubs and organizations through resources, promotional assistance, and coordination. Contact our Student Activities department for more information on how we can support your club.')
    },
    {
      question: t('How can I stay updated on BEM KEMA activities?'),
      answer: t('You can stay updated by following our official social media accounts, subscribing to our newsletter, checking campus notice boards, or visiting our website regularly. We also have a dedicated app that provides real-time updates on events and activities.')
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('Frequently')} <span className="text-kema-red">{t('Asked Questions')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('Find answers to common questions about BEM KEMA Telkom University Purwokerto and how we serve the student community.')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                  {item.question}
                </h3>
                <div className={`text-kema-red dark:text-kema-light-red ml-2 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t('Still have questions? Feel free to reach out to us directly.')}
          </p>
          <button 
            onClick={handleContactClick}
            className="btn-primary"
          >
            {t('Contact Us')}
          </button>
        </div>
      </div>
    </section>
  );
}
