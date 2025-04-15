
import { Quote } from 'lucide-react';

export default function PresidentRemarks() {
  return (
    <section id="president-remarks" className="py-20 bg-white dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Student <span className="text-kema-red">President Remarks</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A message from our student body president about our vision and commitment to the campus community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div className="relative bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-kema-red rounded-full flex items-center justify-center text-white">
                <Quote size={24} />
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 italic">
                "As the President of BEM KEMA Telkom University Purwokerto, I am dedicated to building a campus environment where every student can thrive academically, professionally, and personally. Our focus is on creating innovative programs that address student needs while fostering leadership skills that will serve our members throughout their careers."
              </blockquote>
              <div className="mt-6 flex items-center">
                <span className="text-kema-red font-semibold">Muhammad Haikal Faruq</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-600 dark:text-gray-400">Student Body President</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <div className="w-12 h-1 bg-kema-red rounded-full mr-4"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Vision</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 pl-16">
                To be the leading student organization that empowers every student to reach their full potential.
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <div className="w-12 h-1 bg-kema-red rounded-full mr-4"></div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Mission</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 pl-16">
                To create programs and initiatives that foster academic excellence, leadership development, and community engagement.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-0 pb-[75%] bg-gradient-to-r from-kema-red to-kema-light-red rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Student President" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <h3 className="text-3xl font-bold mb-4">Leadership</h3>
                    <p className="text-lg max-w-md">
                      Guiding our student body with integrity, innovation, and a commitment to excellence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white dark:bg-gray-700 rounded-xl shadow-lg p-4">
                <div className="h-full flex flex-col justify-between">
                  <div className="w-8 h-1 bg-kema-red rounded-full"></div>
                  <div>
                    <p className="text-lg font-bold text-gray-800 dark:text-white">2025</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Presidential Term</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
