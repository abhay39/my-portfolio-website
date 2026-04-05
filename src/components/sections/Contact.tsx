"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resume';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="text-pink-500">05.</span> Get In Touch
            <div className="h-px flex-1 bg-white/10" />
          </h2>

          <div className="flex flex-col items-center text-center">
            <h3 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter max-w-3xl">
              Let&apos;s build something <span className="text-gradient">exceptional</span> together.
            </h3>
            
            <p className="text-xl text-foreground/60 mb-16 leading-relaxed max-w-2xl px-4">
              I&apos;m currently open to new opportunities and interesting projects. 
              The best way to reach me is via email.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group mb-20"
            >
              <div className="absolute inset-x-0 inset-y-0 bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-all duration-500 opacity-0 group-hover:opacity-100" />
              <a 
                href={`mailto:${resumeData.email}`}
                className="relative z-10 flex flex-col items-center gap-4 px-12 py-8 glass rounded-[40px] border-white/5 group-hover:border-primary/50 transition-all duration-500"
              >
                <div className="p-5 bg-primary/10 rounded-3xl group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(236,72,153,0.1)]">
                  <Mail size={40} className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] uppercase tracking-[0.5em] text-foreground/40 font-black">Direct Email</div>
                  <div className="text-2xl md:text-4xl font-bold text-foreground/90 group-hover:text-primary transition-colors">
                    {resumeData.email}
                  </div>
                </div>
              </a>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/20 font-black">Also find me on</span>
              <div className="flex gap-4">
                <a 
                  href={resumeData.socials.github}
                  target="_blank"
                  className="flex items-center gap-3 px-8 py-4 glass rounded-full border-white/5 hover:border-secondary/30 transition-all font-bold text-sm tracking-widest uppercase"
                >
                  <Github size={20} className="text-secondary" />
                  GitHub
                </a>
                <a 
                  href={resumeData.socials.linkedin}
                  target="_blank"
                  className="flex items-center gap-3 px-8 py-4 glass rounded-full border-white/5 hover:border-accent/30 transition-all font-bold text-sm tracking-widest uppercase"
                >
                  <Linkedin size={20} className="text-accent" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/10 blur-[120px] rounded-full -z-10" />
    </section>
  );
};
