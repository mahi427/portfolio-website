// src/components/Services.jsx
import { motion } from 'framer-motion';
import { 
  Code, Layout, Globe, ShoppingCart, Database,
  Palette, Smartphone, Zap, Shield, Check
} from 'lucide-react';
import { services } from '../data/projects';

const Services = () => {
  const iconComponents = {
    Code, Layout, Globe, ShoppingCart, Database, Palette, Smartphone, Zap, Shield, Check
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="heading-gradient">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconComponents[service.icon] || Code;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-light p-6 shadow-lg card-hover group"
              >
                <div className="inline-flex p-3 rounded-lg bg-indigo-100 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-indigo-600" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-primary-dark">{service.title}</h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Custom development
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    Responsive design
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    SEO optimized
                  </li>
                </ul>
                
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-lg font-bold text-indigo-600">{service.price}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-dark">Ready to Start Your Project?</h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Let's work together to bring your ideas to life with cutting-edge technology
              </p>
              <a href="#contact" className="btn-primary">
                Get Started
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;