
import { TranslationProvider } from '@/components/TranslationProvider';
import { useTranslation } from '@/components/TranslationProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { allBlogPosts } from '@/data/blogPosts';
import { useTheme } from '@/components/ThemeProvider';

const ArticleDetailContent = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { theme } = useTheme();
  const article = allBlogPosts.find(post => post.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t("Article not found")}</h1>
          <Link to="/articles" className="text-kema-red hover:text-kema-dark-red">
            {t("Back to Articles")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className={`pt-32 pb-20 ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}`}>
        <div className="section-container">
          <div className="mb-12">
            <Link to="/articles" className="inline-flex items-center text-kema-red hover:text-kema-dark-red transition-colors mb-6">
              <ArrowLeft size={18} className="mr-2" />
              {t("Back to Articles")}
            </Link>
            
            <div className={`rounded-xl p-8 ${theme === 'light' ? 'glass-morphism' : 'glass-morphism backdrop-blur-xl bg-white/5 border border-white/10'}`}>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                <span className="bg-kema-red/10 text-kema-red px-2 py-1 rounded text-xs font-medium">
                  {article.category}
                </span>
                <div className="flex items-center ml-4">
                  <Calendar size={14} className="mr-1" />
                  <span>{article.date}</span>
                </div>
              </div>
              
              <h1 className={`text-4xl md:text-5xl font-display font-bold mb-6 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                {article.title}
              </h1>
              
              <div className="mb-8">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} leading-relaxed`}>
                  {article.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

const ArticleDetail = () => {
  return (
    <TranslationProvider>
      <ArticleDetailContent />
    </TranslationProvider>
  );
};

export default ArticleDetail;
