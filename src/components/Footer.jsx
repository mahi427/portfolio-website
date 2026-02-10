// src/components/Footer.jsx
import { FileText, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Mehak_Arora_resume.pdf';
    link.download = 'Mehak_Arora_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-custom px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="heading-gradient">Mehak Arora</span>
            </h3>
            <p className="text-gray-300 mb-6 text-sm">
              Full Stack Developer | B.Tech CSE Student | Web Developer
            </p>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Awards', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Full Stack Development',
                'React Applications',
                'Website Design',
                'E-commerce Solutions',
                'API Development'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-indigo-400" />
                aroarmehak427@gmail.com
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-indigo-400" />
                +91 85285 11107
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-indigo-400" />
                Jalandhar, Punjab
              </li>
            </ul>
            
            <div className="mt-6">
              <button
                onClick={downloadResume}
                className="inline-flex items-center px-4 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors text-sm"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Mehak Arora. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;