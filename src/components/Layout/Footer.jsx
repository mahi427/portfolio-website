import { FileText, ArrowUp, Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (path, sectionId = null) => {
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

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">MEHAK</span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base mb-6">
              Full Stack Developer creating powerful web applications with React.js & Spring Boot.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="https://github.com/mahi427" target="_blank" rel="noopener noreferrer" className="glass p-2 rounded-lg hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="glass p-2 rounded-lg hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/918528511107" target="_blank" rel="noopener noreferrer" className="glass p-2 rounded-lg hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-green-500" />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-6 p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg md:text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleNavigation('/', 'home')} className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/', 'about')} className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/', 'skills')} className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/', 'experience')} className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Experience
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/projects')} className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/services')} className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('/contact')} className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg md:text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Full Stack Development',
                'React.js Applications',
                'Spring Boot Backend',
                'REST API Development',
                'Database Design',
                'Cloud Deployment'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm md:text-base">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg md:text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm md:text-base break-all">aroarmehak427@gmail.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm md:text-base">+91 85285-11107</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm md:text-base">Jalandhar, Punjab</span>
              </div>
            </div>
            
            <div className="mt-6">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-colors text-sm md:text-base"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8 md:my-10"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-xs md:text-sm">
            © {currentYear} Mehak Arora. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white text-xs md:text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;