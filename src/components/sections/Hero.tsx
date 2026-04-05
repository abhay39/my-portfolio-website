"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '@/data/resume';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Magnetic } from '@/components/Magnetic';

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = resumeData.expertise[roleIndex];
      const shouldDelete = isDeleting;
      
      if (shouldDelete) {
        setDisplayText(prev => prev.slice(0, -1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!shouldDelete && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (shouldDelete && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % resumeData.expertise.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const socials = [
    { icon: <Github size={20} />, href: resumeData.socials.github, label: "GitHub" },
    { icon: <Linkedin size={20} />, href: resumeData.socials.linkedin, label: "LinkedIn" },
    { icon: <Mail size={20} />, href: `mailto:${resumeData.email}`, label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-40 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-block px-4 py-1.5 mb-10 text-[10px] font-bold rounded-full glass border-white/10 text-primary uppercase tracking-[0.4em] relative group cursor-default overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-primary/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                initial={false}
              />
              <span className="relative z-10">Available for new projects</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-[80px] lg:text-[110px] font-black mb-10 tracking-tighter leading-[0.95] text-center w-full max-w-[95vw]">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block"
              >
                I build
              </motion.span>
              <span className="inline-flex items-center justify-center min-h-[1.1em] w-full mt-4">
                <span className="text-gradient relative wrap-break-word px-2">
                  {displayText}
                  <motion.span 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="absolute -right-2 top-0 h-full w-1 bg-primary/50"
                  />
                </span>
              </span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-2xl text-base md:text-xl text-foreground/50 mb-14 leading-relaxed font-medium px-4 md:px-0"
            >
              {resumeData.summary}
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 w-full px-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Magnetic>
                  <a
                    href="#projects"
                    className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-primary text-white rounded-full font-bold transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      View Projects
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </Magnetic>
                
                <Magnetic>
                  <a
                    href="/resume.pdf"
                    download
                    className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 glass border-white/10 rounded-full font-bold transition-all hover:bg-white/5 text-foreground/80 flex items-center justify-center gap-2"
                  >
                    Resume
                    <motion.span
                      animate={{ y: [0, 2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ↓
                    </motion.span>
                  </a>
                </Magnetic>
              </div>

              <div className="flex gap-4 justify-center">
                {socials.map((social, i) => (
                  <Magnetic key={i}>
                    <a
                      href={social.href}
                      target="_blank"
                      className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-all text-foreground/40 hover:text-primary border border-white/5"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-[10px] font-black text-foreground/15 uppercase tracking-[0.5em]"
            >
              <div className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/40 group-hover:bg-green-500 transition-colors shadow-[0_0_10px_rgba(34,197,94,0.3)]" />
                Production Ready
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shadow-[0_0_10px_#ec4899]" />
                Scalable Systems
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors shadow-[0_0_10px_#8b5cf6]" />
                Real-time Tech
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Improved Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5"
      >
        <div className="w-px h-24 bg-linear-to-b from-primary/20 to-transparent relative">
          <motion.div 
            animate={{ y: [0, 60, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_20px_#ec4899]"
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-foreground/10">Scroll</span>
      </motion.div>
    </section>
  );
};
