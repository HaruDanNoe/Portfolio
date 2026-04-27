import { motion } from 'motion/react';
import { Palette, Camera, Laptop } from 'lucide-react';
import type { ReactNode } from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        
        {/* Background Text */}
        <div className="absolute font-display text-[12rem] font-black text-primary/10 -z-10">
          ME
        </div>

        {/* Title */}
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Need Creative Design? <br />
          <span className="text-primary italic">I can Help You!</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-12 leading-relaxed max-w-2xl">
          I create simple, user-friendly, and visually engaging digital experiences. 
          I focus on designing interfaces that are not just beautiful, but easy to understand and use.
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          <AboutCard 
            icon={<Laptop className="text-dark" />} 
            title="UI/UX Designer" 
            desc="Creative websites for you." 
          />
          <AboutCard 
            icon={<Camera className="text-dark" />} 
            title="Layout Designer" 
            desc="Clean and structured visual layouts."
            active
          />
          <AboutCard 
            icon={<Palette className="text-dark" />} 
            title="Graphic Designer" 
            desc="Creative visuals and branding designs." 
          />
        </div>

      </div>
    </section>
  );
}

function AboutCard({
  icon,
  title,
  desc,
  active = false,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
  active?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`p-6 rounded-3xl border w-[220px] text-center transition-all ${
        active
          ? 'bg-primary border-primary shadow-xl shadow-primary/20'
          : 'bg-white border-gray-100 shadow-sm'
      }`}
    >
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 mx-auto ${
          active ? 'bg-white' : 'bg-primary/20'
        }`}
      >
        {icon}
      </div>

      <h3 className="font-display font-bold text-lg mb-1">
        {title}
      </h3>

      <p className="text-gray-600 text-sm">
        {desc}
      </p>
    </motion.div>
  );
}