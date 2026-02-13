import { motion } from 'framer-motion';
import { 
  GraduationCap, Target, Award, Trophy, 
  Calendar, MapPin, Mail, Phone, 
  Sparkles, Code, Users, Briefcase,
  CheckCircle, Star, Heart
} from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Personal Info from Resume
  const personalInfo = {
    name: "Mehak Arora",
    degree: "B.Tech Computer Science Engineering",
    college: "DAV Institute of Engineering & Technology, Jalandhar",
    cgpa: "7.78",
    passingYear: "2025",
    location: "Jalandhar, Punjab",
    email: "aroarmehak427@gmail.com",
    phone: "+91 85285-11107",
    experience: "3+ Years",
    projects: "6+ Projects",
    clients: "2+ Enterprise Clients"
  };

  // Education Details
  const education = [
    {
      degree: "B.Tech - Computer Science Engineering",
      institution: "DAV Institute of Engineering & Technology, Jalandhar",
      score: "CGPA: 7.78",
      year: "Expected March 2025",
      icon: GraduationCap,
      color: "from-blue-600 to-cyan-600"
    },
    {
      degree: "Senior Secondary (XII - CBSE)",
      institution: "Kendriya Vidyalaya, Suranussi, Jalandhar",
      score: "Percentage: 90%",
      year: "2022",
      icon: Award,
      color: "from-purple-600 to-pink-600"
    }
  ];

  // Achievements from Resume
  const achievements = [
    {
      title: "Winner - VISION BHARAT HACKATHON 2025",
      description: "First place in national-level hackathon",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Winner - WEBWIZ APEIJAY SPARK 2025",
      description: "Excellence in web development",
      icon: Award,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "NCC 'C' Certificate Holder",
      description: "Represented PHPH&C Directorate at Republic Day Camp 2024",
      icon: Users,
      color: "from-blue-600 to-indigo-600"
    },
    {
      title: "Head - Folk Dance Club (Gidha)",
      description: "DAVIET Cultural Committee",
      icon: Star,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Best Dancer - All India Folk Art Contest 2022",
      description: "2-time Winner - Youth Festival (Folk Dance 2022-2023)",
      icon: Heart,
      color: "from-red-500 to-rose-500"
    }
  ];

  // Sports Achievements
  const sportsAchievements = [
    "Badminton Team Member",
    "Volleyball Player", 
    "Basketball Player"
  ];

  // Founder Experience
  const founderExperience = {
    title: "Founder & Manager - Yakshi Studios",
    duration: "May 2023 - Present",
    description: "Established and manage a performing arts dance studio, promoting cultural expression through structured training and public performances."
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="glass inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium">About Me</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Who is <span className="heading-gradient">Mehak Arora?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
            Full Stack Developer | NCC 'C' Certificate Holder | Hackathon Winner | Dance Enthusiast
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Personal Info, Education & Achievements */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            className="space-y-6 md:space-y-8"
          >
            {/* Personal Info Card */}
            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Personal Profile</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Degree</p>
                    <p className="text-sm font-semibold">B.Tech CSE</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">7.78 CGPA</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Passing Year</p>
                    <p className="text-sm font-semibold">March 2025</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Expected</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-sm font-semibold">Jalandhar</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Punjab, India</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Briefcase className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
                    <p className="text-sm font-semibold">3+ Years</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Full Stack Dev</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">aroarmehak427@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">+91 85285-11107</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => {
                  const Icon = edu.icon;
                  return (
                    <div key={index} className="relative pl-8 pb-6 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                      <div className={`absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center`}>
                        <Icon className="w-3 h-3 text-white" />
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl">
                        <h4 className="text-base md:text-lg font-bold mb-1">{edu.degree}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                            {edu.score}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                            {edu.year}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* NCC & Achievements Card */}
            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Achievements</h3>
              </div>

              {/* NCC Badge */}
              <div className="mb-6 p-4 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">N</span>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-blue-600 dark:text-blue-400">NCC 'C' Certificate Holder</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Represented PHPH&C Directorate at Republic Day Camp 2024
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      Republic Day Camp 2024
                    </span>
                  </div>
                </div>
              </div>

              {/* Hackathon Wins */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-yellow-600/10 to-orange-600/10 p-4 rounded-xl">
                  <Trophy className="w-6 h-6 text-yellow-600 mb-2" />
                  <h4 className="text-sm font-bold">Vision Bharat Hackathon 2025</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Winner</p>
                </div>
                <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 p-4 rounded-xl">
                  <Award className="w-6 h-6 text-purple-600 mb-2" />
                  <h4 className="text-sm font-bold">WebWiz Apeijay Spark 2025</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Winner</p>
                </div>
              </div>

              {/* Other Achievements */}
              <div className="space-y-3">
                {achievements.slice(2).map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Icon className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{achievement.title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{achievement.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Professional Summary & Founder Experience */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            viewport="viewport"
            transition={{ delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Professional Summary Card */}
            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Professional Summary</h3>
              </div>
              
              <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a passionate <span className="font-bold text-purple-600 dark:text-purple-400">Full Stack Developer</span> with over 3 years of experience building modern web applications. 
                  I specialize in <span className="font-bold text-pink-600 dark:text-pink-400">React.js</span> and <span className="font-bold text-blue-600 dark:text-blue-400">Spring Boot</span>, creating responsive, user-friendly interfaces with smooth animations and robust backend systems.
                </p>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">6+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                  <div className="text-center p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-pink-600">3+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Years Exp</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">2+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Clients</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">7.78</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">CGPA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Yakshi Studios - Founder Experience */}
            <div className="glass-card p-6 md:p-8 rounded-2xl bg-gradient-to-br from-purple-600/10 to-pink-600/10">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Founder & Manager</h3>
                  <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">Yakshi Studios</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">May 2023 - Present</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                    Established and currently manage a performing arts dance studio. Promotes cultural expression 
                    through structured training and public performances. Successfully organized multiple dance 
                    events and training programs.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                      Dance Studio Management
                    </span>
                    <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-xs rounded-full">
                      Cultural Events
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      Team Leadership
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                      Public Performances
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Goals */}
            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Career Goals</h3>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Become a <span className="font-bold text-purple-600">Lead Full Stack Developer</span> and architect scalable web solutions
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Build products that <span className="font-bold text-pink-600">solve real-world problems</span> in education and healthcare
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Contribute to <span className="font-bold text-blue-600">open-source projects</span> and mentor aspiring developers
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Expand <span className="font-bold text-indigo-600">Yakshi Studios</span> into a recognized cultural arts platform
                  </span>
                </li>
              </ul>
            </div>

            {/* Sports & Cultural Achievements */}
            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Sports & Cultural</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl">
                  <h4 className="text-sm font-bold mb-2 flex items-center">
                    <Heart className="w-4 h-4 text-red-500 mr-2" />
                    Folk Dance
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">2-time Winner - Youth Festival (2022-2023)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Best Dancer - All India Folk Art Contest 2022</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl">
                  <h4 className="text-sm font-bold mb-2 flex items-center">
                    <Trophy className="w-4 h-4 text-yellow-500 mr-2" />
                    Sports
                  </h4>
                  <div className="space-y-1">
                    {sportsAchievements.map((sport, index) => (
                      <p key={index} className="text-xs text-gray-600 dark:text-gray-400">• {sport}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          <div className="glass-card p-4 md:p-6 text-center rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">3+</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="glass-card p-4 md:p-6 text-center rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-pink-600 mb-1">6+</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="glass-card p-4 md:p-6 text-center rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">2+</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Enterprise Clients</div>
          </div>
          <div className="glass-card p-4 md:p-6 text-center rounded-xl">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">7.78</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">CGPA</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;