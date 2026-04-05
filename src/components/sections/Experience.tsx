"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resume';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4">
            <span className="text-accent">03.</span> Experience
            <div className="h-px flex-1 bg-white/10" />
          </h2>

          <div className="space-y-12">
            {resumeData.experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-8 border-l border-white/10"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm font-mono text-foreground/40 bg-white/5 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-foreground/60 leading-relaxed">
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
