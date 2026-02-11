import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Award, Trophy, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import your image - replace with your actual image path
import ProfileImage from '../../assets/profile.jpg';

const Hero = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const handleViewProjects = () => {
    navigate('/projects');
    window.scrollTo(0, 0);
  };

  const handleContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Stack Developer | 3+ Years Experience
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6"
            >
              <span className="block text-gray-900 dark:text-white">Hi, I'm</span>
              <span className="heading-gradient block mt-2">Mehak Arora</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6"
            >
              Full Stack Developer specializing in React.js & Spring Boot
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-500 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              B.Tech CSE student at DAVIET (CGPA: 7.78) | NCC 'C' Certificate Holder | 
              Winner of Vision Bharat Hackathon 2025 | 6+ Industrial Projects
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={handleViewProjects}
                className="btn-primary inline-flex items-center justify-center group"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleContact}
                className="btn-secondary"
              >
                Hire Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/mahi427"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-full hover:scale-110 transition-transform"
              >
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/mehak-arora"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-full hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
              </a>
              <a
                href="mailto:aroarmehak427@gmail.com"
                className="glass p-3 rounded-full hover:scale-110 transition-transform"
              >
                <Mail className="w-5 h-5 text-red-500" />
              </a>
              <a
                href="tel:+918528511107"
                className="glass p-3 rounded-full hover:scale-110 transition-transform"
              >
                <Phone className="w-5 h-5 text-green-500" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center items-center"
          >
            {/* Glass Circle Background */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
              
              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl glass">
                <img
                  src={ProfileImage}
                  alt="Mehak Arora"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x400?text=Mehak+Arora';
                  }}
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 glass p-4 rounded-2xl"
              >
                <span className="text-2xl">👩‍💻</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              {/* Experience Badge */}
              <div className="absolute -top-4 -left-4 glass px-4 py-2 rounded-full">
                <p className="text-sm font-bold text-purple-600 dark:text-purple-400">
                  <span className="text-xl">3+</span> Years
                </p>
              </div>

              {/* Projects Badge */}
              <div className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-full">
                <p className="text-sm font-bold text-pink-600 dark:text-pink-400">
                  <span className="text-xl">6+</span> Projects
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Strip */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          <div className="glass rounded-xl p-4 text-center">
            <Award className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-sm font-bold">Hackathon Winner</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Vision Bharat 2025</p>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <Trophy className="w-6 h-6 text-pink-600 mx-auto mb-2" />
            <p className="text-sm font-bold">NCC 'C' Certificate</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Republic Day Camp 2024</p>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white text-xs">CG</span>
            </div>
            <p className="text-sm font-bold">7.78 CGPA</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">B.Tech CSE</p>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <Sparkles className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            <p className="text-sm font-bold">Yakshi Studios</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Founder & Manager</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;