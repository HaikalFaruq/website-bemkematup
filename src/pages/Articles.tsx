
import { ThemeProvider } from '@/components/ThemeProvider';
import { TranslationProvider } from '@/components/TranslationProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { allBlogPosts } from '@/data/blogPosts';

const Articles = () => {
  const { toast } = useToast();
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const handleReadMore = (postId: number) => {
    if (expandedPost === postId) {
      setExpandedPost(null);
    } else {
      setExpandedPost(postId);
      toast({
        title: "Article Expanded",
        description: "You can now read the full article content.",
        variant: "default",
      });
    }
  };

  return (
    <ThemeProvider>
      <TranslationProvider>
        <div className="min-h-screen">
          <Navbar />
          
          <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="section-container">
              <div className="mb-12">
                <Link to="/" className="inline-flex items-center text-kema-red hover:text-kema-dark-red transition-colors mb-6">
                  <ArrowLeft size={18} className="mr-2" />
                  Back to Home
                </Link>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-white">
                  Our Latest <span className="text-kema-red">Articles</span>
                </h1>
                <p className="text-gray-300 max-w-3xl">
                  Stay updated with the latest news, events, and initiatives from BEM KEMA Telkom University Purwokerto.
                  Explore our articles to learn more about what's happening on campus.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allBlogPosts.map((post) => (
                  <div 
                    key={post.id} 
                    className="glass-morphism backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] transition-all duration-300 hover:transform hover:scale-[1.02]"
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
                      <h3 className="text-xl font-bold mb-3 text-white">
                        {post.title}
                      </h3>
                      
                      <div className={`transition-all duration-300 overflow-hidden ${expandedPost === post.id ? 'max-h-[1000px]' : 'max-h-20'}`}>
                        <p className="text-gray-300 mb-4">
                          {expandedPost === post.id ? post.content : post.excerpt}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <button 
                          onClick={() => handleReadMore(post.id)}
                          className="inline-flex items-center text-kema-red hover:text-kema-light-red transition-colors font-medium"
                          aria-expanded={expandedPost === post.id}
                        >
                          <span>{expandedPost === post.id ? "Show Less" : "Read More"}</span>
                          <ArrowRight size={16} className={`ml-2 transition-transform ${expandedPost === post.id ? 'rotate-90' : ''}`} />
                        </button>
                        
                        <Link
                          to={`/articles/${post.id}`}
                          className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-colors"
                        >
                          View Full Article
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
        </div>
      </TranslationProvider>
    </ThemeProvider>
  );
};

export default Articles;
