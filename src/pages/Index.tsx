
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
        <div className="min-h-screen">
          <Navbar />
          <AnimateOnScroll type="fade-down" delay={200}>
            <Hero />
          </AnimateOnScroll>
          
          <AnimateOnScroll type="fade-up" delay={300}>
            <PresidentRemarks />
          </AnimateOnScroll>
          
          <AnimateOnScroll type="fade-left" delay={400}>
            <Ministry />
          </AnimateOnScroll>
          
          <AnimateOnScroll type="fade-right" delay={500}>
            <Blog />
          </AnimateOnScroll>
          
          <AnimateOnScroll type="zoom-in" delay={600}>
            <FAQ />
          </AnimateOnScroll>
          
          <AnimateOnScroll type="slide-up" delay={700}>
            <Contact />
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
