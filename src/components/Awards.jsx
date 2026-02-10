// src/components/Awards.jsx
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target, Users, Medal } from 'lucide-react';
import { awards } from '../data/projects';

const Awards = () => {
  const awardIcons = [Trophy, Award, Star, Target, Users, Medal];
  
  return (
    <section id="awards" className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Awards & <span className="heading-gradient">Achievements</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognitions and accomplishments in academics, hackathons, cultural activities, and sports
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => {
            const IconComponent = awardIcons[index % awardIcons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-100 to-purple-100">
                    <IconComponent className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800">{award}</h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl mb-2">🇮🇳</div>
              <h4 className="font-bold mb-1">Hindi</h4>
              <p className="text-gray-600 text-sm">Native Speaker</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl mb-2">🇮🇳</div>
              <h4 className="font-bold mb-1">Punjabi</h4>
              <p className="text-gray-600 text-sm">Native Speaker</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl mb-2">🇺🇸</div>
              <h4 className="font-bold mb-1">English</h4>
              <p className="text-gray-600 text-sm">Fluent</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;