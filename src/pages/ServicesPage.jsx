// src/pages/ServicesPage.jsx
import { motion } from 'framer-motion';
import { 
  Code, Layout, Globe, ShoppingCart, Database,
  Palette, Smartphone, Check, Clock, Users, Headphones
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Complete web applications from frontend to backend using modern technologies like React, Spring Boot, and Node.js.",
      icon: Code,
      features: [
        "Custom web application development",
        "Database design and integration",
        "REST API development",
        "Deployment and maintenance"
      ],
      timeline: "2-8 weeks",
      price: "Starting at ₹15,000"
    },
    {
      id: 2,
      title: "React Application Development",
      description: "Building responsive and interactive React applications with modern UI/UX principles and best practices.",
      icon: Layout,
      features: [
        "Single Page Applications (SPA)",
        "State management with Context/Redux",
        "Component-based architecture",
        "Performance optimization"
      ],
      timeline: "1-4 weeks",
      price: "Starting at ₹10,000"
    },
    {
      id: 3,
      title: "Website Design & Development",
      description: "Creating beautiful, functional websites tailored to your business needs with responsive design.",
      icon: Globe,
      features: [
        "Responsive website design",
        "Custom UI/UX design",
        "SEO optimization",
        "Fast loading performance"
      ],
      timeline: "1-3 weeks",
      price: "Starting at ₹8,000"
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      description: "Building secure online stores with payment gateway integration and inventory management.",
      icon: ShoppingCart,
      features: [
        "Product catalog management",
        "Shopping cart functionality",
        "Payment gateway integration",
        "Order management system"
      ],
      timeline: "4-12 weeks",
      price: "Starting at ₹25,000"
    },
    {
      id: 5,
      title: "API Development",
      description: "Creating robust REST APIs for seamless integration between applications and services.",
      icon: Database,
      features: [
        "REST API design and development",
        "Authentication and authorization",
        "Database integration",
        "API documentation"
      ],
      timeline: "1-3 weeks",
      price: "Starting at ₹12,000"
    },
    {
      id: 6,
      title: "UI/UX Design",
      description: "Designing user-friendly interfaces with focus on user experience and modern design trends.",
      icon: Palette,
      features: [
        "User interface design",
        "User experience research",
        "Wireframing and prototyping",
        "Design system development"
      ],
      timeline: "1-2 weeks",
      price: "Starting at ₹6,000"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "Understanding your requirements and planning the project scope",
      icon: Users
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "Creating wireframes and design prototypes for approval",
      icon: Palette
    },
    {
      step: 3,
      title: "Development",
      description: "Building the solution with regular progress updates",
      icon: Code
    },
    {
      step: 4,
      title: "Testing & Deployment",
      description: "Thorough testing and deployment to production",
      icon: Check
    },
    {
      step: 5,
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance services",
      icon: Headphones
    }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                My <span className="text-cyan-300">Services</span>
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Comprehensive web development services tailored to help your business succeed online
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-dark">
                What I <span className="heading-gradient">Offer</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Professional web development services to bring your ideas to life
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card-light p-6 shadow-lg card-hover"
                  >
                    <div className="p-3 rounded-lg bg-indigo-100 inline-block mb-4">
                      <IconComponent className="w-8 h-8 text-indigo-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-primary-dark">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <div className="text-lg font-bold text-indigo-600">{service.price}</div>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.timeline}
                        </div>
                      </div>
                      <a
                        href="#contact"
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        Get Quote
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-dark">
                My <span className="heading-gradient">Process</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A structured approach to ensure successful project delivery
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="text-center">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-white border-4 border-indigo-100 mx-auto mb-4 flex items-center justify-center shadow-lg">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {step.step}
                          </div>
                        </div>
                        {index < processSteps.length - 1 && (
                          <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 -z-10"></div>
                        )}
                      </div>
                      <h3 className="font-bold text-primary-dark mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create something amazing together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+918528511107"
                  className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Call Now: +91 85285 11107
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;