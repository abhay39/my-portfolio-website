"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resume';
import { Award, Zap, Users } from 'lucide-react';

const icons = [<Award size={24} color="#ec4899" />, <Zap size={24} color="#8b5cf6" />, <Users size={24} color="#3b82f6" />];

export const Achievements = () => {
  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {resumeData.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-morphism rounded-3xl text-center flex flex-col items-center group"
            >
              <div className="mb-4 p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300">
                {icons[i] || icons[0]}
              </div>
              <div className="text-4xl font-black mb-2 text-gradient">{stat.value}</div>
              <div className="text-sm font-medium text-foreground/40 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <ul className="grid md:grid-cols-2 gap-4">
            {resumeData.achievements.map((item, i) => (
              <li key={i} className="flex gap-4 p-4 glass rounded-2xl text-left text-sm text-foreground/60 border-white/5">
                <span className="text-primary font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
