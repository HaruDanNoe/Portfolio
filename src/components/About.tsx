import { motion } from 'motion/react';
import { Palette, Camera, Laptop } from 'lucide-react';
import type { ReactNode } from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="blob-shape-alt bg-primary w-4/5 aspect-square absolute -top-8 -left-8 -z-10 opacity-30"></div>
             <img 
               src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" 
               alt="About me" 
               className="blob-shape-alt w-full aspect-square object-cover"
             />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[15rem] font-black text-primary/10 -z-20">
               ME
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Need Creative Design? <br />
              <span className="text-primary italic">I can Help You!</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              I create simple, user-friendly, and visually engaging digital experiences. 
              I focus on designing interfaces that are not just beautiful, 
              but easy to understand and use.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AboutCard 
                icon={<Laptop className="text-dark" />} 
                title="UI/UX Designer" 
                desc="Creative websites for you." 
              />
              <AboutCard 
                icon={<Camera className="text-dark" />} 
                title="Photographer" 
                desc="Awesome photo & video." 
                active
              />
              <AboutCard 
                icon={<Palette className="text-dark" />} 
                title="Freelancer" 
                desc="You can hire me now." 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutCard({ icon, title, desc, active = false }: { icon: ReactNode, title: string, desc: string, active?: boolean }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`p-6 rounded-3xl border ${active ? 'bg-primary border-primary shadow-xl shadow-primary/20' : 'bg-white border-gray-100 shadow-sm'} transition-all`}
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${active ? 'bg-white' : 'bg-primary/20'}`}>
        {icon}
      </div>
      <h3 className="font-display font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </motion.div>
  );
}
