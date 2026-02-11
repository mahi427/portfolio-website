import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  
  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <button 
      onClick={handleLogoClick}
      className="flex items-center space-x-2 md:space-x-3 group"
    >
      <div className="relative">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
          <span className="text-white font-bold text-lg md:text-xl">M</span>
        </div>
        <div className="absolute -top-1 -right-1">
          <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-base md:text-xl font-bold font-heading bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          MEHAK
        </span>
        <span className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wider hidden sm:block">
          FULL STACK DEV
        </span>
      </div>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
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

  const handleNavigation = (path, sectionId = null) => {
    setIsOpen(false);
    
    if (path === '/') {
      navigate('/');
      window.scrollTo(0, 0);
      setTimeout(() => {
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  const handleHireMe = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/contact');
      window.scrollTo(0, 0);
    }
  };

  const navItems = [
    { label: 'Home', path: '/', section: 'home' },
    { label: 'About', path: '/', section: 'about' },
    { label: 'Skills', path: '/', section: 'skills' },
    { label: 'Experience', path: '/', section: 'experience' },
    { label: 'Projects', path: '/projects', section: null },
    { label: 'Services', path: '/services', section: null },
    { label: 'Contact', path: '/contact', section: null },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass-nav py-2 md:py-3' 
        : 'bg-transparent py-3 md:py-5'
    }`}>
      <div className="container-custom px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              item.path === '/' ? (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.path, item.section)}
                  className="text-sm xl:text-base text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.path)}
                  className="text-sm xl:text-base text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              )
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full glass hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 xl:w-5 xl:h-5 text-yellow-500" />
              ) : (
                <Moon className="w-4 h-4 xl:w-5 xl:h-5 text-gray-700" />
              )}
            </button>

            <button
              onClick={handleHireMe}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md text-sm xl:text-base"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button - Tablet and Mobile */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full glass"
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
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/20 dark:border-gray-800/50"
          >
            <div className="container-custom px-4 py-6">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  item.path === '/' ? (
                    <button
                      key={item.label}
                      onClick={() => handleNavigation(item.path, item.section)}
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium py-2 transition-colors text-left text-sm uppercase tracking-wider border-b border-gray-100 dark:border-gray-800"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <button
                      key={item.label}
                      onClick={() => handleNavigation(item.path)}
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium py-2 transition-colors text-left text-sm uppercase tracking-wider border-b border-gray-100 dark:border-gray-800"
                    >
                      {item.label}
                    </button>
                  )
                ))}
                
                <button
                  onClick={handleHireMe}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-4 py-3 rounded-lg transition-all duration-300 mt-4 text-center"
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