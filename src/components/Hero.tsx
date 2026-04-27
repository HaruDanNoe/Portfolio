import { motion } from 'motion/react';
import { MousePointer2, ArrowRight } from 'lucide-react';
import profilePic from './img/Dan.JPG';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-dark font-medium text-sm mb-6">
            <MousePointer2 size={16} />
            Based in New York, US
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight mb-6">
            Hi! I'm Danea <br />
            <span className="text-primary italic">Zerudo -</span> <br />
           Web Designer
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
           I create simple, user-friendly, and visually engaging digital experiences. 
           I focus on designing interfaces that are not just beautiful, 
           but easy to understand and use.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-dark font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-primary-dark transition-all duration-300 transform hover:scale-105">
              Download CV
            </button>
            <button className="bg-dark text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              My Works <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="blob-shape bg-primary w-full aspect-square absolute top-0 left-0 -z-10 animate-pulse opacity-50 scale-105 blur-2xl"></div>
          <div className="blob-shape bg-primary/30 w-full aspect-square absolute top-10 left-10 -z-10 animate-bounce transition-all duration-[2000ms]"></div>
          
          <img
            src={profilePic}            
            alt="Danea Zerudo"
className="blob-shape w-full aspect-square object-cover object-[center_30%] shadow-2xl hover:scale-105 transition-all duration-700"          />
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 border-8 border-primary rounded-full animate-spin-slow"></div>
          <div className="absolute -bottom-8 -left-8 font-display text-9xl font-black text-gray-200 -z-20 opacity-40 select-none">
            HELLO
          </div>
        </motion.div>
      </div>
    </section>
  );
}
