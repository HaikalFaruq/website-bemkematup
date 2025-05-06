
import { TranslationProvider } from '@/components/TranslationProvider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PresidentRemarks from '@/components/PresidentRemarks';
import Ministry from '@/components/Ministry';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';
import { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  // Initialize animation observers
  useEffect(() => {
    const animateOnScrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { 
        threshold: isMobile ? 0.05 : 0.1,
        rootMargin: isMobile ? "0px 0px -10% 0px" : "0px"
      }
    );

    // Get all elements that should be animated
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => {
      animateOnScrollObserver.observe(el);
    });

    return () => {
      animateElements.forEach((el) => {
        animateOnScrollObserver.unobserve(el);
      });
    };
  }, [isMobile]);

  return (
    <TranslationProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <PresidentRemarks />
        <Ministry />
        <Blog />
        <FAQ />
        <Contact />
        <Footer />
        <ScrollToTop />
        <Toaster />
      </div>
    </TranslationProvider>
  );
};

export default Index;
