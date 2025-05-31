
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from './TranslationProvider';
import { allBlogPosts } from '@/data/blogPosts';

export default function Blog() {
  const { toast } = useToast();
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const { t } = useTranslation();

  // Get the first 3 articles from allBlogPosts
  const blogPosts = allBlogPosts.slice(0, 3);

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
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {t('Latest News &')} <span className="text-kema-red">{t('Updates')}</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('Stay updated with the latest happenings, events, and initiatives from BEM KEMA Telkom University Purwokerto.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="bg-kema-red/10 text-kema-red px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center ml-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  {post.title}
                </h3>
                
                <div className={`transition-all duration-300 overflow-hidden ${expandedPost === post.id ? 'max-h-[1000px]' : 'max-h-20'}`}>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {expandedPost === post.id ? post.content : post.excerpt}
                  </p>
                </div>
                
                <button 
                  onClick={() => handleReadMore(post.id)}
                  className="inline-flex items-center text-kema-red hover:text-kema-dark-red dark:text-kema-light-red dark:hover:text-white transition-colors font-medium mt-2"
                  aria-expanded={expandedPost === post.id}
                >
                  <span>{expandedPost === post.id ? t('Show Less') : t('Read More')}</span>
                  <ArrowRight size={16} className={`ml-2 transition-transform ${expandedPost === post.id ? 'rotate-90' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/articles" 
            className="btn-secondary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {t('View All Articles')}
          </Link>
        </div>
      </div>
    </section>
  );
}
