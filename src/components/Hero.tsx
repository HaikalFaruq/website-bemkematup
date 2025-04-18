import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from './TranslationProvider';
import { useTheme } from './ThemeProvider';

export default function Hero() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  
  const scrollToMinistries = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const ministriesSection = document.getElementById('ministry');
    
    if (ministriesSection) {
      ministriesSection.scrollIntoView({ 
        behavior: 'smooth'
      });
    }
  };

  const scrollToPresidentRemarks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('president-remarks');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-kema-dark dark:to-gray-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-kema-red/10 rounded-full filter blur-3xl animate-pulse-slow" />
        <div className="absolute left-1/4 top-1/3 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute right-1/3 bottom-1/4 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-kema-red to-kema-light-red bg-clip-text text-transparent">
              {t('Inspiring')}
            </span>{" "}
            {t('Leadership for Student Excellence')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            {t('BEM KEMA Telkom University Purwokerto is dedicated to fostering student growth, providing opportunities, and creating a vibrant campus community.')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#ministry" className="btn-primary flex items-center gap-2" onClick={scrollToMinistries}>
              <span>{t('Explore Ministry')}</span>
              <ArrowRight size={16} />
            </a>
            <a 
              href="https://www.instagram.com/bemkematelupurwokerto/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary flex items-center gap-2"
            >
              <span>{t('Connect With Us')}</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-full max-w-md mx-auto">
            <div className="relative w-full h-0 pb-[100%] overflow-hidden rounded-2xl shadow-2xl animate-float bg-gradient-to-br from-white/20 to-white/5 dark:from-gray-800/20 dark:to-gray-900/5 backdrop-blur-sm">
              {/* Logo with theme-specific rendering and shadow */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
                  <img 
                    src={theme === 'light' 
                      ? "/lovable-uploads/89ed2828-8d80-467e-8ca4-5e5f4d4c0b79.png" 
                      : "/lovable-uploads/dc26eada-d669-49a0-9264-21452af15ccd.png"
                    } 
                    alt="BEM KEMA TUP Logo" 
                    className="h-40 w-40 relative z-20 drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-white dark:bg-kema-dark rounded-xl shadow-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="h-full flex flex-col justify-between">
                <div className="w-12 h-1 bg-kema-red rounded-full"></div>
                <div>
                  <p className="text-xl font-bold text-gray-800 dark:text-white">500+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Active students participating in our programs</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-40 h-40 bg-white dark:bg-kema-dark rounded-xl shadow-lg p-4 animate-float" style={{ animationDelay: '2s' }}>
              <div className="h-full flex flex-col justify-between">
                <div className="w-8 h-1 bg-kema-red rounded-full"></div>
                <div>
                  <p className="text-lg font-bold text-gray-800 dark:text-white">15+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Ministries working together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a 
        href="#president-remarks"
        onClick={scrollToPresidentRemarks}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-kema-red dark:hover:text-kema-light-red transition-colors group"
        aria-label="Scroll down to President Remarks section"
      >
        <span className="text-sm mb-2 group-hover:translate-y-1 transition-transform">{t('Scroll down')}</span>
        <ArrowDown className="animate-bounce group-hover:animate-pulse" size={20} />
      </a>
    </section>
  );
}
