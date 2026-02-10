// src/components/About.jsx
import { motion } from 'framer-motion';
import { GraduationCap, Target, User, Calendar, School, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="heading-gradient">Me</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Computer Science Engineering Student | Full Stack Developer | Cultural Enthusiast
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-indigo-600" />
                Education
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-l-4 border-indigo-500">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-lg">B.Tech - Computer Science Engineering</h4>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full font-medium">
                      2021-2025
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">DAV Institute of Engineering & Technology, Jalandhar</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      CGPA: 7.78
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Expected: March 2025
                    </span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-lg">Senior Secondary (XII - CBSE)</h4>
                    <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm rounded-full font-medium">
                      2022
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2">Kendriya Vidyalaya, Suranussi, Jalandhar</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      Percentage: 90%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">Current Status</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Final Year B.Tech CSE Student
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Available for freelance projects
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Seeking full-time opportunities from March 2025
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Professional Summary */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-indigo-600" />
                Professional Summary
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Passionate Computer Science Engineering student with expertise in Full Stack Development. 
                Experienced in building responsive web applications using React, Spring Boot, and modern web technologies. 
                Strong problem-solving skills combined with leadership experience as NCC Cadet and Founder of Yakshi Studios.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">6+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">6</div>
                  <div className="text-sm text-gray-600">Months Experience</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">2</div>
                  <div className="text-sm text-gray-600">Hackathon Wins</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">Languages</div>
                </div>
              </div>
            </div>

            {/* Career Goals */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-cyan-600" />
                Career Goals
              </h4>
              <p className="text-gray-700">
                To work as a Full Stack Developer in a challenging environment where I can utilize my skills 
                and contribute to innovative projects. Interested in opportunities involving React, Spring Boot, 
                and modern web technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;