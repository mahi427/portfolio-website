import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Medicine Recommendation System",
      description: "AI-powered system that suggests medications based on symptoms and disease patterns.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "TensorFlow.js"],
      features: [
        "Disease-based medicine suggestion",
        "Drug interaction checker",
        "Dosage calculator",
        "Patient history tracking"
      ],
      demoLink: "https://medrec-demo.vercel.app",
      githubLink: "https://github.com/yourusername/medicine-recommendation"
    },
    {
      id: 2,
      title: "Full Stack Portfolio Website",
      description: "Modern portfolio website with animations, contact form, and project showcase.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
      features: [
        "Smooth animations",
        "Responsive design",
        "Contact form integration",
        "SEO optimized"
      ],
      demoLink: "https://portfolio-demo.vercel.app",
      githubLink: "https://github.com/yourusername/portfolio-website"
    },
    {
      id: 3,
      title: "Freelancing Dashboard UI",
      description: "Admin dashboard design for freelancers to manage projects, clients, and payments.",
      technologies: ["React", "Tailwind CSS", "Chart.js", "React Query"],
      features: [
        "Project management",
        "Client dashboard",
        "Payment tracking",
        "Analytics charts"
      ],
      demoLink: "https://dashboard-demo.vercel.app",
      githubLink: "https://github.com/yourusername/freelance-dashboard"
    },
    {
      id: 4,
      title: "Authentication System",
      description: "Secure authentication system with role-based access control and OAuth integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      features: [
        "Login/Signup with email",
        "Google OAuth integration",
        "Role-based UI",
        "Password reset functionality"
      ],
      demoLink: "https://auth-demo.vercel.app",
      githubLink: "https://github.com/yourusername/auth-system"
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Featured <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real-world projects that showcase my skills and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-white" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-secondary hover:text-white transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Project Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-center"
                  >
                    Live Demo
                  </a>
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
                Let's work together to bring your ideas to life with cutting-edge technology
              </p>
              <a href="#contact" className="btn-primary">
                Start a Project
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;