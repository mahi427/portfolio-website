import { motion } from 'framer-motion';
import { GraduationCap, Target, User } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            About <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-primary to-accent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <User className="w-12 h-12 text-white" />
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Professional Summary</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate full-stack developer with over 3 years of experience building modern web applications. 
              I specialize in React.js and create responsive, user-friendly interfaces with smooth animations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    B.Tech in Computer Science<br />
                    University of Technology, 2020-2024
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Career Goals</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    To become a lead developer and build products that solve real-world problems. 
                    I aim to work on challenging projects that push my boundaries.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
              <h4 className="font-bold mb-2">Current Focus</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Currently freelancing and building my own projects while looking for exciting opportunities 
                to collaborate with innovative teams.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;