"use client";

import React from 'react';
import { motion } from 'framer-motion';

const techIcons = [
  "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
  "FastAPI", "Django", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS"
];

export const TechMarquee = () => {
  return (
    <div className="py-12 overflow-hidden bg-black/20 border-y border-white/5 relative z-20">
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-20 pr-20"
        >
          {[...techIcons, ...techIcons].map((tech, i) => (
            <div
              key={i}
              className="text-2xl md:text-3xl font-black text-white/5 hover:text-primary/20 transition-colors uppercase tracking-[0.3em] cursor-default select-none"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
