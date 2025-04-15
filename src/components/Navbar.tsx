
import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Ministry', href: '#ministry' },
  { name: 'Blog', href: '#blog' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || mobileMenuOpen ? 'bg-white/90 dark:bg-kema-dark/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/342ad5c5-616e-45fc-abf8-8d7bb75baf6f.png" 
            alt="BEM KEMA TUP Logo" 
            className="h-12 w-12 mr-2"
          />
          <span className="text-xl font-display font-bold bg-gradient-to-r from-kema-red to-kema-light-red bg-clip-text text-transparent">
            BEM KEMA TUP
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-200 hover:text-kema-red dark:hover:text-kema-light-red font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-kema-dark shadow-lg animate-fade-in">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-kema-red dark:hover:text-kema-light-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
