
import { ThemeProvider } from '@/components/ThemeProvider';
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

const Index = () => {
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
      { threshold: 0.1 }
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
  }, []);

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default Index;
