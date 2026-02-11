import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-3 group"
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
          <span className="text-white font-bold text-xl">AK</span>
        </div>
        <div className="absolute -top-1 -right-1">
          <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          AKSHAY
        </span>
        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wider">
          FULL STACK DEVELOPER
        </span>
      </div>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check for saved theme preference
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container-custom px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors relative group text-sm tracking-wide uppercase"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors relative group text-sm tracking-wide uppercase"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors relative group text-sm tracking-wide uppercase"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors relative group text-sm tracking-wide uppercase"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors relative group text-sm tracking-wide uppercase"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </button>
            
            <Link
              to="/services"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors relative group text-sm tracking-wide uppercase"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors relative group text-sm tracking-wide uppercase"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
            </button>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary text-sm px-5 py-2.5"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-xl"
          >
            <div className="container-custom px-4 py-6">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium py-3 transition-colors text-left text-sm uppercase tracking-wider border-b border-gray-100 dark:border-gray-800"
                >
                  Home
                </button>
                
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium py-3 transition-colors text-left text-sm uppercase tracking-wider border-b border-gray-100 dark:border-gray-800"
                >
                  About
                </button>
                
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium py-3 transition-colors text-left text-sm uppercase tracking-wider border-b border-gray-100 dark:border-gray-800"
                >
                  Skills
                </button>
                
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium py-3 transition-colors text-left text-sm uppercase tracking-wider border-b border-gray-100 dark:border-gray-800"
                >
                  Projects
                </button>
                
                <button
                  onClick={() => scrollToSection('experience')}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium py-3 transition-colors text-left text-sm uppercase tracking-wider border-b border-gray-100 dark:border-gray-800"
                >
                  Experience
                </button>
                
                <Link
                  to="/services"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium py-3 transition-colors text-left text-sm uppercase tracking-wider border-b border-gray-100 dark:border-gray-800"
                >
                  Services
                </Link>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium py-3 transition-colors text-left text-sm uppercase tracking-wider border-b border-gray-100 dark:border-gray-800"
                >
                  Contact
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary mt-4"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;