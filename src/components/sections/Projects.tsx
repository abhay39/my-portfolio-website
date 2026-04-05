"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '@/data/resume';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Magnetic } from '@/components/Magnetic';

const categories = ["All", "Mobile", "Full-Stack", "Backend", "Frontend"];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = resumeData.projects.filter(p => 
    activeCategory === "All" || (p as any).category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 flex items-center gap-4 px-4 overflow-hidden">
            <span className="text-primary">04.</span> Featured Projects
            <div className="h-px flex-1 bg-white/10" />
          </h2>

          {/* Category Filter - Scrollable on mobile */}
          <div className="flex overflow-x-auto pb-4 mb-10 md:mb-16 gap-3 no-scrollbar px-4 justify-start md:justify-center -mx-4 md:mx-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "glass border-white/5 text-foreground/40 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col bg-card/40 border border-white/5 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 glass-morphism"
                >
                  {/* Project Image Placeholder / Top Section */}
                  <div className="relative h-48 w-full bg-linear-to-br from-white/5 to-white/10 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Code size={48} className="text-white/10 group-hover:text-primary transition-colors duration-500 group-hover:scale-110" />
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-primary">
                      {(project as any).category}
                    </div>
                    
                    {/* Floating Tech Badges */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md rounded-lg border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((h) => (
                          <span key={h} className="text-[11px] text-primary/70 font-medium">
                            • {h}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 flex items-center gap-4 border-t border-white/5">
                        {project.github && (
                          <Magnetic>
                            <a
                              href={project.github}
                              target="_blank"
                              className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-foreground/70 block"
                              title="View Source"
                            >
                              <Github size={18} />
                            </a>
                          </Magnetic>
                        )}
                        {(project as any).link && (project as any).link !== "#" && (
                          <Magnetic>
                            <a
                              href={(project as any).link}
                              target="_blank"
                              className="px-6 py-2.5 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors text-center text-sm font-bold flex items-center justify-center gap-2 group/btn border border-primary/20"
                            >
                              <ExternalLink size={16} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                              {(project as any).isLive ? "Live" : "Visit"}
                            </a>
                          </Magnetic>
                        )}
                        {(project as any).website && (
                          <Magnetic>
                            <a
                              href={(project as any).website}
                              target="_blank"
                              className="px-6 py-2.5 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-center text-sm font-bold flex items-center justify-center gap-2 group/btn"
                            >
                              <ExternalLink size={16} />
                              Website
                            </a>
                          </Magnetic>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
