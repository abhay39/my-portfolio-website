"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resume';
import { GitBranch, Star, Users, Code2 } from 'lucide-react';

export const GithubStats = () => {
  const { github_stats } = resumeData as any;
  
  if (!github_stats) return null;

  const stats = [
    { label: "Contributions", value: github_stats.contributions, icon: <GitBranch className="text-primary" /> },
    { label: "Repositories", value: github_stats.repositories, icon: <Code2 className="text-secondary" /> },
    { label: "Followers", value: github_stats.followers, icon: <Users className="text-accent" /> },
    { label: "Top Languages", value: github_stats.top_languages.length, icon: <Star className="text-pink-400" /> },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center gap-4">
            <span className="text-primary">07.</span> GitHub Ecosystem
            <div className="h-px flex-1 bg-white/10" />
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 glass-morphism rounded-3xl text-center flex flex-col items-center group hover:border-primary/30 transition-all"
              >
                <div className="mb-4 p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-8 glass rounded-3xl border-white/5 flex flex-wrap gap-4 items-center justify-center"
          >
            <div className="text-sm font-medium text-foreground/60 mr-4">Top Tech:</div>
            {github_stats.top_languages.map((lang: string) => (
              <span key={lang} className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold border border-primary/20">
                {lang}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
