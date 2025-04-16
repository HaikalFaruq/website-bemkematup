import { ThemeProvider } from '@/components/ThemeProvider';
import { TranslationProvider } from '@/components/TranslationProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
};

const allBlogPosts: BlogPost[] = [
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
  },
  {
    id: 4,
    title: "BEM KEMA Hosts Successful Technology Exhibition",
    excerpt: "The annual tech exhibition showcased innovative student projects and attracted industry recruiters to campus.",
    content: "Last weekend, BEM KEMA TUP successfully hosted its annual Technology Exhibition, transforming the main campus hall into a hub of innovation and creativity. Over 50 student teams presented projects ranging from mobile applications and web platforms to IoT devices and AI solutions. The event attracted representatives from major technology companies and local startups, creating valuable networking opportunities for participating students. Several projects received funding offers and development support from impressed industry visitors. The exhibition also featured technical workshops, panel discussions on emerging technologies, and a keynote address from a prominent tech entrepreneur. With record attendance from both the campus community and external visitors, this year's exhibition has strengthened Telkom University Purwokerto's reputation as a nurturing ground for tech talent and innovation in the region.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "March 25, 2025",
    category: "Events"
  },
  {
    id: 5,
    title: "Cultural Exchange Program Opens Applications",
    excerpt: "Students can now apply for the upcoming cultural exchange program with partner universities across Southeast Asia.",
    content: "BEM KEMA TUP has opened applications for its highly anticipated Cultural Exchange Program, offering students the chance to experience academic and cultural immersion at partner universities across Southeast Asia. This semester-long program enables participants to study at institutions in Malaysia, Thailand, Singapore, Vietnam, and the Philippines while engaging with local students and communities. The exchange includes specialized academic courses, cultural workshops, language learning opportunities, and organized excursions to historical and cultural sites. Participants will serve as ambassadors for Telkom University Purwokerto while gaining global perspectives that enhance their personal and professional development. Financial support packages are available to help make this opportunity accessible to all qualified students. An information session will be held next Tuesday at the International Affairs Office, where previous participants will share their experiences and answer questions about this life-changing program.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "March 20, 2025",
    category: "Programs"
  },
  {
    id: 6,
    title: "Student Leadership Conference Announces Featured Speakers",
    excerpt: "The upcoming conference will feature renowned leaders from various sectors sharing insights on effective leadership strategies.",
    content: "BEM KEMA TUP is pleased to announce the impressive lineup of speakers for next month's Student Leadership Conference. The two-day event will feature talks and workshops from distinguished leaders across business, government, education, and social entrepreneurship sectors. Keynote addresses will be delivered by the CEO of a major telecommunications company, a prominent social activist, and an internationally recognized educational reformer. The conference program includes interactive sessions on ethical leadership, crisis management, inclusive team building, and effective communication. Panel discussions will explore leadership challenges in the digital age, sustainability leadership, and pathways to creating meaningful social impact. Early bird registration is now open, with special rates for Telkom University Purwokerto students. This conference represents an unparalleled opportunity for students to learn from accomplished leaders and develop the skills needed to make a positive difference in their communities and future careers.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "March 15, 2025",
    category: "Events"
  }
];

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
          
          <section className="pt-32 pb-20 bg-white dark:bg-gray-900">
            <div className="section-container">
              <div className="mb-12">
                <Link to="/" className="inline-flex items-center text-kema-red hover:text-kema-dark-red transition-colors mb-6">
                  <ArrowLeft size={18} className="mr-2" />
                  Back to Home
                </Link>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                  Our Latest <span className="text-kema-red">Articles</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
                  Stay updated with the latest news, events, and initiatives from BEM KEMA Telkom University Purwokerto.
                  Explore our articles to learn more about what's happening on campus.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allBlogPosts.map((post) => (
                  <div 
                    key={post.id} 
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md card-hover animate-on-scroll"
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
                        <span>{expandedPost === post.id ? "Show Less" : "Read More"}</span>
                        <ArrowRight size={16} className={`ml-2 transition-transform ${expandedPost === post.id ? 'rotate-90' : ''}`} />
                      </button>
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
