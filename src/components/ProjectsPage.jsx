// src/components/ProjectsPage.jsx
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Smartphone, Database, Palette, Server } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectsPage = () => {
  const getTechIcon = (tech) => {
    const techIcons = {
      'React': <Code2 className="w-5 h-5" />,
      'JavaScript': <Code2 className="w-5 h-5" />,
      'HTML': <Code2 className="w-5 h-5" />,
      'CSS': <Palette className="w-5 h-5" />,
      'Bootstrap': <Palette className="w-5 h-5" />,
      'Tailwind CSS': <Palette className="w-5 h-5" />,
      'Java': <Code2 className="w-5 h-5" />,
      'Spring Boot': <Server className="w-5 h-5" />,
      'Node.js': <Server className="w-5 h-5" />,
      'MySQL': <Database className="w-5 h-5" />,
      'Firebase': <Database className="w-5 h-5" />,
      'TMDB API': <Database className="w-5 h-5" />,
    };
    return techIcons[tech] || <Code2 className="w-5 h-5" />;
  };

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="heading-gradient">Projects</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A collection of my web development projects showcasing skills in React, Spring Boot, and modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl card-hover group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Smartphone className="w-16 h-16 text-white opacity-80" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Project Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-indigo-600">Project #{index + 1}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.demoLink !== '#' && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
                        aria-label="Live Demo"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-800 hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                      title="View Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm rounded-full"
                      >
                        {getTechIcon(tech)}
                        <span className="ml-1.5">{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  {project.demoLink !== '#' ? (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 text-center"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <button className="btn-primary flex-1 text-center opacity-60 cursor-not-allowed">
                      Demo Coming Soon
                    </button>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1 text-center"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{projects.length}+</div>
              <div className="text-indigo-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">6+</div>
              <div className="text-indigo-100">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-indigo-100">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;