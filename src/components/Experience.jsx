// src/components/Experience.jsx
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle, Briefcase, Award } from 'lucide-react';
import { experience } from '../data/projects';

const Experience = () => {
  return (
    <section id="experience" className="section-padding gradient-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="heading-gradient">Experience</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and accomplishments
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-300 via-purple-300 to-cyan-300 transform md:-translate-x-1/2"></div>

            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto md:w-1/2' : 'md:pl-12 md:w-1/2'} ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white transform -translate-x-1/2 z-10"></div>

                {/* Content Card */}
                <div className="ml-6 md:ml-0 card-light p-6 shadow-lg card-hover">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <Briefcase className="w-5 h-5 text-indigo-600" />
                      <h3 className="text-xl font-bold text-primary-dark">{exp.position}</h3>
                    </div>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full font-medium">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Remote
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            <div className="text-center p-6 card-light card-hover">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">6+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-6 card-light card-hover">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-gray-600">Months Experience</div>
            </div>
            <div className="text-center p-6 card-light card-hover">
              <div className="text-3xl md:text-4xl font-bold text-cyan-500 mb-2">2</div>
              <div className="text-gray-600">Hackathon Wins</div>
            </div>
            <div className="text-center p-6 card-light card-hover">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;