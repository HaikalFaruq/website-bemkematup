
import { TranslationProvider } from '@/components/TranslationProvider';
import { useTranslation } from '@/components/TranslationProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { allBlogPosts } from '@/data/blogPosts';
import { useTheme } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';

const ArticlesContent = () => {
  const { toast } = useToast();
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const { theme } = useTheme();
  const { t } = useTranslation();

  // Scroll to top when component mounts without smooth scrolling
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReadMore = (postId: number) => {
    if (expandedPost === postId) {
      setExpandedPost(null);
    } else {
      setExpandedPost(postId);
      toast({
        title: t("Article Expanded"),
        description: t("You can now read the full article content."),
        variant: "default",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className={`pt-32 pb-20 ${theme === 'light' 
        ? 'bg-gradient-to-br from-white to-gray-50' 
        : 'bg-gradient-to-br from-kema-dark to-gray-900'}`}>
        <div className="section-container">
          <div className="mb-12">
            <Link to="/" className="inline-flex items-center text-kema-red hover:text-kema-dark-red transition-colors mb-6">
              <ArrowLeft size={18} className="mr-2" />
              {t("Back to Home")}
            </Link>
            
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
              {t("Latest Articles")}
            </h1>
            <p className={`max-w-3xl ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              {t("Stay connected with the latest news, events, and initiatives from BEM KEMA Telkom University Purwokerto. Explore our articles to learn more about what's happening on campus.")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post) => (
              <div 
                key={post.id} 
                className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:transform hover:scale-[1.02] ${
                  theme === 'light'
                    ? 'bg-white border border-gray-100'
                    : 'glass-morphism backdrop-blur-xl bg-white/5 border border-white/10'
                }`}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span className="bg-kema-red/10 text-kema-red px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center ml-4">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                    {post.title}
                  </h3>
                  
                  <div className={`transition-all duration-300 overflow-hidden ${expandedPost === post.id ? 'max-h-[1000px]' : 'max-h-20'}`}>
                    <p className={`mb-4 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                      {expandedPost === post.id ? post.content : post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <button 
                      onClick={() => handleReadMore(post.id)}
                      className="inline-flex items-center text-kema-red hover:text-kema-light-red transition-colors text-sm font-medium"
                      aria-expanded={expandedPost === post.id}
                    >
                      <span>{expandedPost === post.id ? t("Show Less") : t("Read More")}</span>
                      <ArrowRight size={14} className={`ml-1 transition-transform ${expandedPost === post.id ? 'rotate-90' : ''}`} />
                    </button>
                    
                    <Link
                      to={`/articles/${post.id}`}
                      className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                        theme === 'light'
                          ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                          : 'bg-white/10 hover:bg-white/20 text-white'
                      }`}
                    >
                      {t("View Full Article")}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
};

const Articles = () => {
  return (
    <TranslationProvider>
      <ArticlesContent />
    </TranslationProvider>
  );
};

export default Articles;
