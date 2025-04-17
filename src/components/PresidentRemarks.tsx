
import { Quote } from 'lucide-react';
import { useTranslation } from './TranslationProvider';

export default function PresidentRemarks() {
  const { t } = useTranslation();
  
  return (
    <section id="president-remarks" className="py-20 bg-white dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('Student')} <span className="text-kema-red">{t('President Remarks')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('A message from our student body president about our vision and commitment to the campus community.')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div className="relative bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-kema-red rounded-full flex items-center justify-center text-white">
                <Quote size={24} />
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 italic">
                "{t('As the President of BEM KEMA Telkom University Purwokerto, I am dedicated to building a campus environment where every student can thrive academically, professionally, and personally. Our focus is on creating innovative programs that address student needs while fostering leadership skills that will serve our members throughout their careers.')}"
              </blockquote>
              <div className="mt-6 flex items-center">
                <span className="text-kema-red font-semibold">Muhammad Haikal Faruq</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-600 dark:text-gray-400">{t('Student Body President')}</span>
              </div>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-kema-red rounded-full mr-4"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{t('Vision')}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 pl-16">
                  {t('Menjadi organisasi strategis yang berperan sebagai katalisator dan pemimpin perubahan dalam membangun ekosistem mahasiswa yang inklusif, berdaya saing, dan memberikan kontribusi nyata bagi kesejahteraan masyarakat.')}
                </p>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-kema-red rounded-full mr-4"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{t('Mission')}</span>
                </div>
                <div className="text-gray-600 dark:text-gray-400 pl-16 space-y-2">
                  <p>1. {t('Memperjuangkan dan memfasilitasi pemenuhan hak-hak mahasiswa serta menciptakan lingkungan kampus yang inklusif, adil, dan kondusif bagi peningkatan kesejahteraan mahasiswa di berbagai aspek.')}</p>
                  <p>2. {t('Membangun komunikasi yang transparan, akuntabel, dan responsif antara mahasiswa dan pihak kampus, guna menghasilkan kebijakan-kebijakan yang mendukung kepentingan mahasiswa.')}</p>
                  <p>3. {t('Memfasilitasi dan meningkatkan kolaborasi antar organisasi, unit kegiatan mahasiswa (UKM), serta komunitas mahasiswa untuk menciptakan sinergi yang kuat dan memberikan dampak positif di berbagai bidang.')}</p>
                  <p>4. {t('Meningkatkan partisipasi aktif mahasiswa dalam kegiatan sosial dan lingkungan sebagai wujud kontribusi nyata bagi pemberdayaan dan kesejahteraan masyarakat.')}</p>
                </div>
              </div>
            </div>

            <div className="relative bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md animate-float">
              <div className="flex items-center gap-4">
                <div className="w-1 h-16 bg-kema-red rounded-full"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">{t('Presidential Term')}</h4>
                  <p className="text-gray-600 dark:text-gray-400">2024 - 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-0 pb-[75%] bg-gradient-to-r from-kema-red to-kema-light-red rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/fb79b029-b3fd-454a-8b99-c5ac91e22783.png"
                  alt="Student President" 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
