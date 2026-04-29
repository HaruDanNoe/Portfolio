import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

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
              <span className="text-primary italic">Projects</span>
            </h2>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => setFilter('All')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === 'All'
                  ? 'bg-dark text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-dark'
              }`}
            >
              All
            </button>

            <button
              onClick={() => setFilter('Web Design')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === 'Web Design'
                  ? 'bg-dark text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-dark'
              }`}
            >
              Web Design
            </button>

            <button
              onClick={() => setFilter('UI/UX')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === 'UI/UX'
                  ? 'bg-dark text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-dark'
              }`}
            >
              UI/UX
            </button>

            <button
              onClick={() => setFilter('Design')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === 'Design'
                  ? 'bg-dark text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-primary hover:text-dark'
              }`}
            >
              Layout & Graphic
            </button>
          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {PROJECTS
            .filter((project) => {
              if (filter === 'All') return true;

              if (filter === 'Design') {
                return (
                  project.category === 'Layout Design' ||
                  project.category === 'Graphic Design'
                );
              }

              return project.category === filter;
            })
            .slice(0, showAll ? PROJECTS.length : 4)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-gray-100"
              >

                {/* IMAGE (AUTO STYLE BASED ON CATEGORY) */}
                <div
                  className={`overflow-hidden ${
                    project.category === 'Layout Design' ||
                    project.category === 'Graphic Design'
                      ? 'aspect-[4/5]'   // 📸 PHOTO STYLE
                      : 'aspect-[16/10]' // 💻 PROJECT STYLE
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* DESKTOP OVERLAY */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10 text-white">

                  <div>
                    <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>

                    <h3 className="text-2xl font-display font-bold">
                      {project.title}
                    </h3>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block px-4 py-2 bg-primary text-dark rounded-full text-sm font-bold hover:scale-105 transition-transform"
                      >
                        Case Study Preview
                      </a>
                    )}
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

                  {project.link && (
                    <a
                      href={project.link}
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
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 group font-display font-bold text-xl hover:text-primary transition-colors"
          >
            {showAll ? 'Show Less' : 'View All Projects'}

            <div className="w-10 h-10 bg-primary text-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plus size={20} />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}