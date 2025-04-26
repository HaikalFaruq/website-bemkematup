import { ChevronRight, Check } from 'lucide-react';
import { useTranslation } from './TranslationProvider';
import { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { useToast } from '../hooks/use-toast';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  const { toast } = useToast();
  
  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      toast({
        title: t('Invalid Email'),
        description: t('Please enter a valid email address.'),
        variant: "destructive",
      });
      return;
    }
    
    // Show success animation
    setShowSuccessAnimation(true);
    
    // Reset form and close animation after delay
    setTimeout(() => {
      setShowSuccessAnimation(false);
      setEmail('');
    }, 3000);
  };
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-4">
              BEM KEMA TUP
            </h3>
            <p className="mb-4">
              {t('The Student Executive Board of Telkom University Purwokerto, dedicated to enhancing student life and advocating for student interests.')}
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.instagram.com/bemkematelupurwokerto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@bemkematelupurwokerto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.tiktok.com/@bemkematelupurwokerto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://open.spotify.com/show/4X2WlVB0eOXmEA4SeeXRWJ?si=f494d1e3422745a4" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="Spotify"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/bemkematup/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              {t('Quick Links')}
            </h3>
            <ul className="space-y-2">
              {[
                {key: 'Home', link: '#home'}, 
                {key: 'Ministry', link: '#ministry'}, 
                {key: 'Blog', link: '#blog'}, 
                {key: 'FAQ', link: '#faq'}, 
                {key: 'Contact', link: '#contact'}
              ].map((item) => (
                <li key={item.key}>
                  <a 
                    href={item.link}
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight size={14} className="mr-2" />
                    <span>{t(item.key)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              {t('Our Services')}
            </h3>
            <ul className="space-y-2">
              {[
                'Student Advocacy', 
                'Event Organization', 
                'Club Support', 
                'Academic Resources', 
                'Leadership Training'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight size={14} className="mr-2" />
                    <span>{t(item)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              {t('Newsletter')}
            </h3>
            <p className="mb-4">
              {t('Subscribe to our newsletter to receive updates on events, news, and opportunities.')}
            </p>
            <form className="flex" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder={t('Your email address')}
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-kema-red flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="bg-kema-red text-white px-4 py-2 rounded-r-md hover:bg-kema-dark-red transition-colors"
              >
                {t('Subscribe')}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              &copy; {currentYear} BEM KEMA Telkom University Purwokerto. {t('All rights reserved.')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('Privacy Policy')}</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('Terms of Service')}</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t('Sitemap')}</a>
            </div>
          </div>
        </div>
      </div>

      {/* Success Animation */}
      <Dialog open={showSuccessAnimation} onOpenChange={setShowSuccessAnimation}>
        <DialogContent className="sm:max-w-md p-0 border-0 bg-transparent shadow-none">
          <div className="animate-enter transform transition-all duration-500 ease-out">
            <div className="bg-gradient-to-br from-kema-red to-kema-light-red p-6 rounded-xl shadow-lg text-white backdrop-blur-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                  <Check size={40} className="text-white animate-[pulse_1s_ease-in-out_infinite]" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-2">
                {t('Thank you for subscribing!')}
              </h3>
              <p className="text-white/90">
                {t('You are now subscribed to our newsletter. We will keep you updated with the latest news and events.')}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
