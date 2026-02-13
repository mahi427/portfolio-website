import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle, Sparkles, Clock, CheckCircle } from 'lucide-react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      value: "+91 85285-11107",
      link: "https://wa.me/918528511107",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "aroarmehak0610@gmail.com",
      link: "mailto:aroarmehak0610@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jalandhar, Punjab, India",
      link: "https://maps.google.com/?q=Jalandhar,Punjab",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/mehak-arora", color: "from-blue-600 to-blue-700" },
    { icon: Github, label: "GitHub", href: "https://github.com/mahi427", color: "from-gray-700 to-gray-900" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/918528511107", color: "from-green-500 to-green-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      
      <main>
        {/* Hero Section with Glass Effect */}
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
                <span className="text-xs sm:text-sm font-medium">Available for Freelance Projects</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-6">
                Get In <span className="heading-gradient">Touch</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 glass p-4 md:p-6 rounded-2xl">
                Have a project in mind? Let's discuss how I can help bring your ideas to life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="pb-16 md:pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8"
              >
                {/* Contact Cards */}
                <div className="grid gap-4 md:gap-6">
                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={info.title}
                        href={info.link}
                        target={info.title === "Location" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-4 sm:p-5 md:p-6 flex items-center space-x-4 group hover:scale-[1.02]"
                      >
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm sm:text-base font-bold">{info.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">{info.value}</p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="glass-card p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-4 md:mb-6">Connect With Me</h3>
                  <div className="flex space-x-3 sm:space-x-4">
                    {socialLinks.map((social, idx) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                          aria-label={social.label}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Availability & Response Time */}
                <div className="glass-card p-4 sm:p-5 md:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm sm:text-base font-bold">Available for Work</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    <span>Response time: Within 24 hours</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="glass-card p-3 sm:p-4 text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">18+</div>
                    <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                  <div className="glass-card p-3 sm:p-4 text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-600">2.5+</div>
                    <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Years Exp</div>
                  </div>
                  <div className="glass-card p-3 sm:p-4 text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">5+</div>
                    <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Clients</div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="glass-card p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">Send a Message</h3>
                  
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 md:py-12"
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                        <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                      </div>
                      <h4 className="text-lg md:text-xl font-bold mb-2">Message Sent!</h4>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                        Thank you for reaching out. I'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 md:mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm sm:text-base"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 md:mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm sm:text-base"
                          placeholder="you@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-1.5 md:mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-sm sm:text-base"
                          placeholder="Project inquiry, collaboration, etc."
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 md:mb-2">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                          placeholder="Tell me about your project, timeline, and requirements..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary py-2.5 sm:py-3 text-sm sm:text-base flex items-center justify-center group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        I'll respond within 24 hours. Looking forward to hearing from you!
                      </p>
                    </form>
                  )}
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-4 md:mt-6 glass-card p-4 sm:p-5 md:p-6 bg-gradient-to-r from-green-600/10 to-emerald-600/10">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <h4 className="text-sm sm:text-base md:text-lg font-bold flex items-center justify-center sm:justify-start">
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600" />
                        Need instant response?
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Chat with me directly on WhatsApp
                      </p>
                    </div>
                    <a
                      href="https://wa.me/918528511107?text=Hi%20Mehak!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;