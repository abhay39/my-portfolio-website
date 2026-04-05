"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resume';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4">
            <span className="text-primary">06.</span> Education
            <div className="h-px flex-1 bg-white/10" />
          </h2>

          <div className="space-y-8">
            {resumeData.education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 glass-morphism rounded-3xl border border-white/5 hover:border-primary/20 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl h-fit">
                      <GraduationCap className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-foreground/60">{edu.institution}</p>
                    </div>
                  </div>
                  <span className="text-sm font-mono text-primary bg-primary/5 px-4 py-1 rounded-full w-fit h-fit">
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
