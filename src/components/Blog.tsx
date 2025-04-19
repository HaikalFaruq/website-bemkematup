import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from './TranslationProvider';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Campus Leadership Workshop Highlights Student Potential",
    excerpt: "Recent leadership workshop organized by BEM KEMA received enthusiastic participation from students across various departments.",
    content: "The recent Leadership Workshop organized by BEM KEMA TUP brought together students from diverse academic backgrounds to develop essential leadership skills. The two-day event featured interactive sessions, team-building activities, and talks from industry professionals and alumni who shared their experiences and insights. Participants engaged in case studies and practical exercises designed to enhance their problem-solving abilities and interpersonal skills. The workshop concluded with a collaborative project where teams presented innovative solutions to campus challenges, showcasing the creativity and potential of Telkom University Purwokerto students. This initiative aligns with BEM KEMA's commitment to fostering student growth and preparing future leaders for success in their academic and professional journeys.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "April 12, 2025",
    category: "Events"
  },
  {
    id: 2,
    title: "New Student Welfare Program Launches Next Month",
    excerpt: "BEM KEMA announces a comprehensive welfare program designed to support students facing financial and academic challenges.",
    content: "BEM KEMA TUP is proud to announce the launch of its comprehensive Student Welfare Program, set to begin next month. This initiative aims to address the diverse needs of students facing financial constraints, academic challenges, and mental health concerns. The program will offer financial assistance through emergency funds and scholarship connections, academic support via peer tutoring and study groups, and mental health resources including counseling services and wellness workshops. Additionally, the welfare program will provide career development opportunities through resume workshops, interview preparation sessions, and networking events with industry professionals. BEM KEMA has partnered with local businesses, alumni networks, and university administration to create a sustainable support system that empowers students to overcome obstacles and achieve their full potential during their time at Telkom University Purwokerto.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "April 8, 2025",
    category: "Programs"
  },
  {
    id: 3,
    title: "Collaborative Research Initiative with Industry Partners",
    excerpt: "Students now have the opportunity to participate in research projects alongside leading industry experts through our new initiative.",
    content: "BEM KEMA TUP has established a groundbreaking Collaborative Research Initiative that connects students with leading industry partners for hands-on research experience. This program bridges the gap between academic learning and real-world application, allowing students to work on cutting-edge projects while building valuable professional relationships. Participating companies include technology giants, telecommunications firms, and innovative startups, offering diverse opportunities across multiple disciplines. The initiative includes structured mentorship, access to advanced resources and facilities, and the potential for internships and future employment. Selected research projects will address contemporary challenges in technology, business, and society, with findings to be presented at the annual TUP Innovation Summit. Applications for the first cohort open next week, with information sessions scheduled throughout campus to help interested students learn more about this exciting opportunity.",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "April 5, 2025",
    category: "Academics"
  }
];

export default function Blog() {
  const { toast } = useToast();
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const { t } = useTranslation();

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
