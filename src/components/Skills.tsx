import { motion } from 'motion/react';
import { SKILLS, SOFTWARE_SKILLS } from '../constants';
import * as Icons from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <span className="font-display text-primary font-bold uppercase tracking-widest text-sm mb-4 block">My Skills</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              What My Design <br /> Skills Included
            </h2>
            
            <div className="space-y-8">
              {SKILLS.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-dark">{skill.name}</span>
                    <span className="text-gray-500">{skill.percentage}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6">
            {SOFTWARE_SKILLS.map((skill, index) => {
              const IconComponent = (Icons as any)[skill.icon];
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-4 hover:shadow-xl hover:border-primary transition-all group"
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    {IconComponent && <IconComponent size={32} className="text-dark" />}
                  </div>
                  <span className="font-bold text-dark">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 font-display text-[20rem] font-black text-gray-100 -z-10">
        SKILLS
      </div>
    </section>
  );
}
