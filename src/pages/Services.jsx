import { motion } from 'framer-motion';
import { 
  Code, Layout, Database, Globe, 
  Smartphone, ShoppingBag, Sparkles, 
  CheckCircle, Clock, Users, Shield,
  Server, Cpu, Zap
} from 'lucide-react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Full Stack Development",
      description: "Complete web applications from frontend to backend using React.js & Spring Boot",
      icon: Code,
      features: [
        "React.js frontend development",
        "Spring Boot REST APIs",
        "Database integration",
        "Authentication & authorization",
        "Cloud deployment"
      ],
      technologies: ["React", "Spring Boot", "MySQL", "REST", "JWT"],
      color: "from-purple-600 to-pink-600",
      price: "Custom Quote"
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Responsive, interactive UIs with modern React.js and CSS frameworks",
      icon: Layout,
      features: [
        "Responsive web design",
        "React.js applications",
        "State management",
        "API integration",
        "Performance optimization"
      ],
      technologies: ["React", "Tailwind", "Bootstrap", "Redux", "Framer"],
      color: "from-blue-600 to-cyan-600",
      price: "Starting at $399"
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Robust server-side applications with Spring Boot and REST APIs",
      icon: Server,
      features: [
        "RESTful API development",
        "Spring Boot applications",
        "Database design",
        "Security implementation",
        "Microservices"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "JPA", "Security"],
      color: "from-green-600 to-emerald-600",
      price: "Starting at $599"
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      description: "Complete online stores with product management and payment integration",
      icon: ShoppingBag,
      features: [
        "Product catalog",
        "Shopping cart",
        "Payment gateway",
        "Order management",
        "Admin dashboard"
      ],
      technologies: ["React", "Spring Boot", "Stripe", "MySQL", "JWT"],
      color: "from-yellow-600 to-orange-600",
      price: "Starting at $999"
    },
    {
      id: 5,
      title: "Database Design",
      description: "Efficient database architecture and optimization for your applications",
      icon: Database,
      features: [
        "Database modeling",
        "Query optimization",
        "Data migration",
        "Backup strategies",
        "Performance tuning"
      ],
      technologies: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
      color: "from-red-600 to-rose-600",
      price: "Starting at $299"
    },
    {
      id: 6,
      title: "API Development",
      description: "Custom REST APIs with documentation and testing",
      icon: Globe,
      features: [
        "RESTful API design",
        "API documentation",
        "Authentication",
        "Rate limiting",
        "Testing & deployment"
      ],
      technologies: ["Spring Boot", "Node.js", "Express", "Swagger", "Postman"],
      color: "from-indigo-600 to-blue-600",
      price: "Starting at $499"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Consultation",
      description: "We discuss your requirements, goals, and project scope.",
      icon: Users
    },
    {
      step: 2,
      title: "Planning",
      description: "Detailed project plan, timeline, and technology stack selection.",
      icon: Clock
    },
    {
      step: 3,
      title: "Development",
      description: "Agile development with regular updates and feedback.",
      icon: Code
    },
    {
      step: 4,
      title: "Testing",
      description: "Comprehensive testing for quality and performance.",
      icon: Shield
    },
    {
      step: 5,
      title: "Deployment",
      description: "Smooth deployment and launch assistance.",
      icon: Zap
    },
    {
      step: 6,
      title: "Support",
      description: "Ongoing maintenance and technical support.",
      icon: Cpu
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>
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
                <span className="text-xs sm:text-sm font-medium">Full Stack Development Services</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-6">
                My <span className="heading-gradient">Services</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 glass p-4 md:p-6 rounded-2xl">
                Comprehensive full-stack development services from frontend to backend. 
                I build scalable, performant web applications tailored to your needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-5 sm:p-6 md:p-8 rounded-2xl hover:scale-[1.02] transition-all duration-500"
                  >
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 md:mb-6`}>
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3">{service.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 md:mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 md:px-3 md:py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-[10px] sm:text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-4 md:pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-base sm:text-lg md:text-xl font-bold text-purple-600">{service.price}</span>
                        </div>
                        <Link
                          to="/contact"
                          className="btn-primary py-1.5 md:py-2 px-4 md:px-6 text-xs sm:text-sm"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-purple-600/5 to-pink-600/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
                My <span className="heading-gradient">Process</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A systematic approach to deliver high-quality solutions
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {process.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="glass-card p-5 sm:p-6 md:p-8 rounded-2xl">
                      <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                        {step.step}
                      </div>
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3 md:mb-4">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3">{step.title}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="glass-card p-6 sm:p-8 md:p-12 rounded-3xl text-center bg-gradient-to-r from-purple-600 to-pink-600">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 text-white">
                Ready to Start Your Project?
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-white/90">
                Let's discuss your requirements and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-gray-100 transition-colors text-sm md:text-base"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="https://wa.me/918528511107?text=Hi%20Mehak!%20I%20saw%20your%20services%20and%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-white text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-white/10 transition-colors text-sm md:text-base"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;