import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, User, Sparkles, Code, Database, Server, Globe } from 'lucide-react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

// Placeholder images - replace with your actual project screenshots
import NetflixImg from '../assets/projects/netflix-clone.png';
import MedibotImg from '../assets/projects/medibot.png';
import AroraPropertyImg from '../assets/projects/arora-property.png';
import EcomImg from '../assets/projects/ecommerce.png';
import MrJewelsImg from '../assets/projects/mr-jweles.png';
import FullStackImg from '../assets/projects/fullstack.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Netflix Clone",
      description: "Full-stack Netflix clone with Firebase authentication & TMDB API",
      fullDescription: "A complete Netflix-inspired streaming platform with user authentication, movie browsing, search functionality, and responsive design. Built with React for the frontend and Firebase for backend services.",
      technologies: ["React", "Firebase", "TMDB API", "JavaScript", "CSS3"],
      features: [
        "User authentication with Firebase Auth",
        "Movie browsing with TMDB API",
        "Search and filter functionality",
        "Responsive Netflix-like UI",
        "Movie trailers and details"
      ],
      demoLink: "https://netflix-clone-demo.firebaseapp.com",
      githubLink: "https://github.com/mahi427/netflix_clone.git",
      image: NetflixImg,
      color: "from-red-600 to-red-800",
      category: "Full Stack",
      duration: "2 months",
      role: "Full Stack Developer",
      tech: "React + Firebase"
    },
    {
      id: 2,
      title: "Medibot",
      description: "Medicine recommendation system with AI-powered suggestions",
      fullDescription: "An intelligent medicine recommendation system that suggests medications based on symptoms and disease patterns. Features a clean, modern UI with real-time recommendations.",
      technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      features: [
        "Disease-based medicine recommendation",
        "Symptom checker",
        "Drug interaction warnings",
        "User-friendly interface",
        "Real-time suggestions"
      ],
      demoLink: "https://medibot-demo.vercel.app",
      githubLink: "https://github.com/KaranManhas22/GYM-Project",
      image: MedibotImg,
      color: "from-green-600 to-blue-600",
      category: "Full Stack",
      duration: "3 months",
      role: "Lead Developer",
      tech: "MERN Stack"
    },
    {
      id: 3,
      title: "Arora Property Developers",
      description: "Real estate platform with property listings and management",
      fullDescription: "A comprehensive real estate platform for property listings, search, and management. Features an intuitive interface for buyers and sellers with advanced filtering options.",
      technologies: ["Bootstrap", "HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      features: [
        "Property listings management",
        "Advanced search filters",
        "Image galleries",
        "Contact forms",
        "Responsive design"
      ],
      demoLink: "https://arora-properties.vercel.app",
      githubLink: "https://github.com/mahi427/Arora-Property-Developers.git",
      image: AroraPropertyImg,
      color: "from-blue-600 to-indigo-600",
      category: "Full Stack",
      duration: "2.5 months",
      role: "Full Stack Developer",
      tech: "Bootstrap + PHP"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Complete e-commerce solution with Spring Boot backend",
      fullDescription: "A full-featured e-commerce platform with product management, shopping cart, user authentication, and order processing. Built with Spring Boot for robust backend services.",
      technologies: ["Spring Boot", "Java", "MySQL", "React", "Bootstrap", "REST APIs"],
      features: [
        "Product catalog management",
        "Shopping cart functionality",
        "User authentication & profiles",
        "Order processing system",
        "Admin dashboard"
      ],
      demoLink: "https://ecom-demo.vercel.app",
      githubLink: "https://github.com/mahi427/fullcom-main.git",
      image: EcomImg,
      color: "from-yellow-600 to-orange-600",
      category: "Full Stack",
      duration: "4 months",
      role: "Backend Developer",
      tech: "Spring Boot + React"
    },
    {
      id: 5,
      title: "MR Jewels",
      description: "Premium jewelry showcase website with dynamic UI",
      fullDescription: "An elegant jewelry e-commerce website showcasing premium collections with smooth animations, product galleries, and an engaging user experience.",
      technologies: ["React", "CSS3", "JavaScript", "Redux", "Responsive Design"],
      features: [
        "Product showcase gallery",
        "Smooth animations",
        "Responsive design",
        "Product categories",
        "Inquiry forms"
      ],
      demoLink: "https://mr-jewels.vercel.app",
      githubLink: "https://github.com/mahi427/MR-JWELLS.git",
      image: MrJewelsImg,
      color: "from-purple-600 to-pink-600",
      category: "Frontend",
      duration: "1.5 months",
      role: "Frontend Developer",
      tech: "React"
    },
    {
      id: 6,
      title: "Webbox Training Projects",
      description: "6-month industrial training at Webbox InfoTech",
      fullDescription: "Comprehensive full-stack development projects completed during industrial training, covering client-server architecture, REST APIs, database connectivity, and modern web technologies.",
      technologies: ["React", "Java", "Spring Boot", "MySQL", "REST APIs", "HTML/CSS"],
      features: [
        "Client-server architecture",
        "RESTful API development",
        "Database design & integration",
        "Authentication systems",
        "Responsive UIs"
      ],
      demoLink: "#",
      githubLink: "#",
      image: FullStackImg,
      color: "from-gray-600 to-gray-800",
      category: "Full Stack",
      duration: "6 months",
      role: "Full Stack Developer",
      tech: "React + Spring Boot"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      
      <main>
        {/* Hero Section with Glass Effect */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-64 h-64 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-64 h-64 md:w-96 md:h-96 bg-pink-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="glass inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span className="text-xs sm:text-sm font-medium">6+ Industrial Projects Completed</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-6">
                My <span className="heading-gradient">Projects</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 glass p-4 md:p-6 rounded-2xl">
                Full-stack web applications built with React.js, Spring Boot, and modern technologies. 
                From e-commerce platforms to AI-powered recommendation systems.
              </p>

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="glass px-4 py-2 rounded-full flex items-center space-x-2">
                  <Code className="w-4 h-4 text-purple-600" />
                  <span className="text-xs sm:text-sm">React.js</span>
                </div>
                <div className="glass px-4 py-2 rounded-full flex items-center space-x-2">
                  <Server className="w-4 h-4 text-pink-600" />
                  <span className="text-xs sm:text-sm">Spring Boot</span>
                </div>
                <div className="glass px-4 py-2 rounded-full flex items-center space-x-2">
                  <Database className="w-4 h-4 text-blue-600" />
                  <span className="text-xs sm:text-sm">MySQL</span>
                </div>
                <div className="glass px-4 py-2 rounded-full flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-green-600" />
                  <span className="text-xs sm:text-sm">REST APIs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group glass-card rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                >
                  {/* Project Image */}
                  <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/600x400?text=${project.title}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 glass px-2 py-1 rounded-full">
                      <span className="text-[10px] sm:text-xs font-semibold text-white">{project.category}</span>
                    </div>
                    
                    {/* Tech Badge */}
                    <div className="absolute top-3 right-3 glass px-2 py-1 rounded-full">
                      <span className="text-[10px] sm:text-xs font-semibold text-white">{project.tech}</span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold line-clamp-1">{project.title}</h3>
                      
                      <div className="flex gap-1 sm:gap-2">
                        {project.githubLink !== "#" && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass p-1.5 sm:p-2 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
                            aria-label="GitHub"
                          >
                            <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                          </a>
                        )}
                        {project.demoLink !== "#" && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass p-1.5 sm:p-2 rounded-lg hover:bg-pink-600 hover:text-white transition-all duration-300"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Project Meta */}
                    <div className="flex items-center space-x-3 sm:space-x-4 mb-3 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                        {project.duration}
                      </div>
                      <div className="flex items-center">
                        <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                        {project.role}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 sm:px-3 sm:py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-[10px] sm:text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Key Features Preview */}
                    <div className="mb-4">
                      <p className="text-[10px] sm:text-xs font-semibold mb-1">Key Features:</p>
                      <ul className="space-y-0.5">
                        {project.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-[10px] sm:text-xs">
                            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-1.5 mr-1.5"></span>
                            <span className="text-gray-600 dark:text-gray-400 line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary py-1.5 sm:py-2 text-[10px] sm:text-xs text-center"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-secondary py-1.5 sm:py-2 text-[10px] sm:text-xs text-center"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Projects;