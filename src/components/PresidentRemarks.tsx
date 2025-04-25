import { Quote, Target, Users, HandshakeIcon, Globe } from 'lucide-react';
import { useTranslation } from './TranslationProvider';

export default function PresidentRemarks() {
  const { t } = useTranslation();
  
  return (
    <section id="president-remarks" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Title Section */}
        <div className="text-center backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            {t('Student')} <span className="text-kema-red">{t('President Remarks')}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('A message from our student body president about our vision and commitment to the campus community.')}
          </p>
        </div>

        {/* President Image Section */}
        <div className="relative backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20">
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-kema-red rounded-full flex items-center justify-center text-white">
            <Quote size={24} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/fb79b029-b3fd-454a-8b99-c5ac91e22783.png"
                  alt="Student President" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-lg p-4 rounded-lg border border-white/20 animate-float">
                  <p className="text-sm font-medium text-white">{t('Presidential Term')}</p>
                  <p className="text-lg font-bold text-kema-red">2025</p>
                </div>
              </div>
            </div>
            <div>
              <blockquote className="text-lg leading-relaxed text-gray-200 italic">
                "{t('As the President of BEM KEMA Telkom University Purwokerto, I am dedicated to building a campus environment where every student can thrive academically, professionally, and personally.')}"
              </blockquote>
              <div className="mt-6 flex items-center">
                <span className="text-kema-red font-semibold">Anggitya Yusuf Fikrandi</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-300">{t('Student Body President')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-8 border border-white/20">
          <div className="flex items-center mb-6">
            <div className="w-12 h-1 bg-kema-red rounded-full mr-4"></div>
            <span className="text-xl font-display font-bold text-white">{t('Vision')}</span>
          </div>
          <p className="text-gray-300">
            {t('Menjadi organisasi strategis yang berperan sebagai katalisator dan pemimpin perubahan dalam membangun ekosistem mahasiswa yang inklusif, berdaya saing, dan memberikan kontribusi nyata bagi kesejahteraan masyarakat.')}
          </p>
        </div>

        {/* Mission Section */}
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="w-12 h-1 bg-kema-red rounded-full mr-4"></div>
            <span className="text-xl font-display font-bold text-white">{t('Mission')}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
              <Target className="w-8 h-8 text-kema-red mb-4" />
              <p className="text-gray-300">
                {t('Memperjuangkan dan memfasilitasi pemenuhan hak-hak mahasiswa serta menciptakan lingkungan kampus yang inklusif, adil, dan kondusif bagi peningkatan kesejahteraan mahasiswa di berbagai aspek.')}
              </p>
            </div>
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-kema-red mb-4" />
              <p className="text-gray-300">
                {t('Membangun komunikasi yang transparan, akuntabel, dan responsif antara mahasiswa dan pihak kampus, guna menghasilkan kebijakan-kebijakan yang mendukung kepentingan mahasiswa.')}
              </p>
            </div>
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
              <HandshakeIcon className="w-8 h-8 text-kema-red mb-4" />
              <p className="text-gray-300">
                {t('Memfasilitasi dan meningkatkan kolaborasi antar organisasi, unit kegiatan mahasiswa (UKM), serta komunitas mahasiswa untuk menciptakan sinergi yang kuat dan memberikan dampak positif di berbagai bidang.')}
              </p>
            </div>
            <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20">
              <Globe className="w-8 h-8 text-kema-red mb-4" />
              <p className="text-gray-300">
                {t('Meningkatkan partisipasi aktif mahasiswa dalam kegiatan sosial dan lingkungan sebagai wujud kontribusi nyata bagi pemberdayaan dan kesejahteraan masyarakat.')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
