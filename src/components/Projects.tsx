import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ExternalLink, Plus } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="font-display text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Check out my <br />
              <span className="text-primary italic">Latest Projects</span>
            </h2>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-2 bg-dark text-white rounded-full text-sm font-bold">
              All
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-500 rounded-full text-sm font-bold hover:bg-primary hover:text-dark transition-all">
              Web Design
            </button>
            <button className="px-6 py-2 bg-gray-100 text-gray-500 rounded-full text-sm font-bold hover:bg-primary hover:text-dark transition-all">
              UI/UX
            </button>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-gray-100"
            >

              {/* IMAGE */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* DESKTOP HOVER OVERLAY */}
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10 text-white">

                <div className="flex justify-between items-center">

                  <div>
                    <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>

                    <h3 className="text-2xl font-display font-bold">
                      {project.title}
                    </h3>

                    {/* ✅ MASSKARA LIVE PREVIEW BUTTON */}
                    {project.title.toLowerCase().includes('masskara') && (
                      <a
                        href="https://masskara-festival-city-of-smiles.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block px-4 py-2 bg-primary text-dark rounded-full text-sm font-bold hover:scale-105 transition-transform"
                      >
                        Live Preview
                      </a>
                    )}
                  </div>

                  {/* ICON */}
                  <div className="w-14 h-14 bg-primary text-dark rounded-full flex items-center justify-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    <ExternalLink size={24} />
                  </div>

                </div>
              </div>

              {/* MOBILE VIEW */}
              <div className="p-8 md:hidden bg-white">
                <span className="text-primary font-bold text-xs uppercase tracking-wider mb-1 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-display font-bold text-dark">
                  {project.title}
                </h3>

                {/* MOBILE LINK */}
                {project.title.toLowerCase().includes('masskara') && (
                  <a
                    href="https://masskara-festival-city-of-smiles.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-primary font-bold underline"
                  >
                    View Live Site
                  </a>
                )}
              </div>

            </motion.div>
          ))}

        </div>

        {/* FOOTER BUTTON */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 group font-display font-bold text-xl hover:text-primary transition-colors">
            View All Projects
            <div className="w-10 h-10 bg-primary text-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus size={20} />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}