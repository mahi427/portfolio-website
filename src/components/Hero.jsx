// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { ArrowRight, Code, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden section-padding flex items-center gradient-bg">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-600 mb-6 shadow-sm"
            >
              <Code className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Full Stack Developer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I'm{' '}
              <span className="heading-gradient">Mehak Arora</span>
              <br />
              <span className="text-gray-800">Computer Science</span>{' '}
              <span className="heading-gradient">Engineer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg md:text-xl mb-8 max-w-lg leading-relaxed"
            >
              B.Tech CSE Student | Full Stack Developer | NCC Cadet | Founder of Yakshi Studios
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 mb-8"
            >
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-5 h-5 text-indigo-600" />
                <span>+91 85285 11107</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Mail className="w-5 h-5 text-indigo-600" />
                <span>aroarmehak427@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <span>Jalandhar, Punjab</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary flex items-center group">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-cyan-500 mx-auto relative shadow-2xl">
                <div className="absolute inset-8 rounded-full bg-white flex items-center justify-center shadow-inner">
                  <Code className="w-20 h-20 text-indigo-600" />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-100 animate-float">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-100 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">🎨</span>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-100 animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-100 animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-2xl">💫</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;