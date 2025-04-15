
import { Calendar, ArrowRight } from 'lucide-react';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Campus Leadership Workshop Highlights Student Potential",
    excerpt: "Recent leadership workshop organized by BEM KEMA received enthusiastic participation from students across various departments.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "April 12, 2025",
    category: "Events"
  },
  {
    id: 2,
    title: "New Student Welfare Program Launches Next Month",
    excerpt: "BEM KEMA announces a comprehensive welfare program designed to support students facing financial and academic challenges.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "April 8, 2025",
    category: "Programs"
  },
  {
    id: 3,
    title: "Collaborative Research Initiative with Industry Partners",
    excerpt: "Students now have the opportunity to participate in research projects alongside leading industry experts through our new initiative.",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "April 5, 2025",
    category: "Academics"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Latest <span className="text-kema-red">News & Updates</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest happenings, events, and initiatives from
            BEM KEMA Telkom University Purwokerto.
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
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-kema-red hover:text-kema-dark-red dark:text-kema-light-red dark:hover:text-white transition-colors font-medium"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-secondary">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
