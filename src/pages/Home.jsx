import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Skills from '../components/Home/Skills';
import Experience from '../components/Home/Experience';
import Contact from '../components/Home/Contact';
import Footer from '../components/Layout/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Handle section scroll from navigation
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleViewProjects = () => {
    navigate('/projects');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        
        {/* Quick Projects Preview with Glass Effect */}
        <section className="section-padding bg-gradient-to-br from-purple-600/5 to-pink-600/5">
          <div className="container-custom">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
                Featured <span className="heading-gradient">Projects</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
                Full-stack applications built with modern technologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="glass-card p-6 rounded-xl text-center transform transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎬</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Netflix Clone</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  React + Firebase + TMDB API
                </p>
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                  Full Stack
                </span>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center transform transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💊</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Medibot</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Medicine Recommendation System
                </p>
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                  Full Stack
                </span>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center transform transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏠</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Arora Property</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Real Estate Web Application
                </p>
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                  Full Stack
                </span>
              </div>
            </div>
            
            <div className="text-center">
              <button
                onClick={handleViewProjects}
                className="btn-primary inline-flex items-center px-8 py-3 text-base md:text-lg"
              >
                View All Projects
              </button>
            </div>
          </div>
        </section>
        
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HomePage;