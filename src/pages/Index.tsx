
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
import AnimateOnScroll from '@/components/AnimateOnScroll';

const Index = () => {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
          <Navbar />
          
          <AnimateOnScroll type="fade-down" delay={200}>
            <section id="hero" className="pt-20">
              <Hero />
            </section>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="fade-up" delay={300}>
            <section id="president-remarks" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
              <PresidentRemarks />
            </section>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="fade-left" delay={400}>
            <section id="ministry" className="py-20 bg-white dark:bg-gray-900">
              <Ministry />
            </section>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="fade-right" delay={500}>
            <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
              <Blog />
            </section>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="zoom-in" delay={600}>
            <section id="faq" className="py-20 bg-white dark:bg-gray-900">
              <FAQ />
            </section>
          </AnimateOnScroll>
          
          <AnimateOnScroll type="slide-up" delay={700}>
            <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
              <Contact />
            </section>
          </AnimateOnScroll>
          
          <Footer />
          <ScrollToTop />
          <Toaster />
        </div>
      </TranslationProvider>
    </ThemeProvider>
  );
};

export default Index;
