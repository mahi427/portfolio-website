import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Award, Target, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Tech Solutions Inc.",
      position: "Frontend Developer",
      duration: "June 2023 - Present",
      location: "Remote",
      responsibilities: [
        "Developed responsive user interfaces using React and Tailwind CSS",
        "Implemented animations and micro-interactions with Framer Motion",
        "Collaborated with design team to implement pixel-perfect designs",
        "Optimized website performance reducing load time by 40%"
      ],
      technologies: ["React", "TypeScript", "Tailwind", "Framer Motion", "Next.js"],
      icon: Briefcase,
      color: "bg-blue-500"
    },
    {
      id: 2,
      company: "Digital Agency",
      position: "Web Developer",
      duration: "Jan 2022 - May 2023",
      location: "New York, NY",
      responsibilities: [
        "Built and maintained client websites using modern frameworks",
        "Implemented SEO best practices improving search rankings",
        "Created reusable components reducing development time by 30%",
        "Integrated third-party APIs and services"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      icon: Target,
      color: "bg-purple-500"
    },
    {
      id: 3,
      company: "Startup Accelerator",
      position: "Software Engineering Intern",
      duration: "Aug 2021 - Dec 2021",
      location: "San Francisco, CA",
      responsibilities: [
        "Assisted in full-stack development of web applications",
        "Participated in agile development processes and code reviews",
        "Contributed to UI/UX improvements and bug fixes",
        "Learned industry best practices and coding standards"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "AWS", "Docker"],
      icon: Users,
      color: "bg-green-500"
    },
    {
      id: 4,
      company: "Freelance Projects",
      position: "Freelance Developer",
      duration: "2020 - Present",
      location: "Remote",
      responsibilities: [
        "Completed 50+ projects for various clients worldwide",
        "Specialized in React applications and responsive web design",
        "Managed client relationships and project timelines",
        "Maintained 100% client satisfaction rate"
      ],
      technologies: ["React", "Tailwind", "Firebase", "Stripe", "Vercel"],
      icon: Award,
      color: "bg-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Work <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            My professional journey and career milestones
          </p>
        </motion.div>

        {/* Experience Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className={`${exp.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                  </div>
                </div>

                {/* Duration & Location */}
                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">30+</div>
            <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
            <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">3+</div>
            <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;