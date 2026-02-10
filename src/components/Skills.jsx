// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { skills } from '../data/projects';

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium text-primary-dark">{skill.name}</span>
        <span className="text-muted-dark font-bold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="heading-gradient">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg card-hover"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mr-4">
                <span className="text-2xl">🎨</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Frontend</h3>
                <p className="text-gray-600">UI/UX Development</p>
              </div>
            </div>
            {skills.frontend.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg card-hover"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mr-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Backend</h3>
                <p className="text-gray-600">Server-side Development</p>
              </div>
            </div>
            {skills.backend.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg card-hover"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mr-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Tools & Platforms</h3>
                <p className="text-gray-600">Development Workflow</p>
              </div>
            </div>
            {skills.tools.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100"
        >
          <h3 className="text-2xl font-bold text-center mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Responsive Design', 'REST APIs', 'Database Design', 'Git Version Control', 'Agile Methodology', 'Problem Solving', 'Team Leadership', 'Project Management'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white rounded-full text-secondary-dark font-medium hover:shadow-md transition-shadow text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;