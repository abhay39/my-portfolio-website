"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { resumeData } from '@/data/resume';
import { Magnetic } from './Magnetic';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'py-4 glass border-white/10' 
          : 'py-6 border-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Magnetic>
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-black tracking-tighter hover:text-primary transition-colors"
          >
            AKG<span className="text-primary">.</span>
          </motion.a>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link, i) => (
              <Magnetic key={link.name}>
                <motion.a
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-xs font-bold uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors py-2"
                >
                  {link.name}
                </motion.a>
              </Magnetic>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-8">
            <Magnetic>
              <a 
                href="/resume.pdf" 
                download 
                className="px-6 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest border border-primary/20 hover:bg-primary hover:text-white transition-all"
              >
                Resume
              </a>
            </Magnetic>
            <div className="flex items-center gap-3">
              <Magnetic>
                <a href={resumeData.socials.github} target="_blank" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-foreground/60 hover:text-primary hover:bg-white/10 transition-all border border-white/5">
                  <Github size={18} />
                </a>
              </Magnetic>
              <Magnetic>
                <a href={resumeData.socials.linkedin} target="_blank" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-foreground/60 hover:text-primary hover:bg-white/10 transition-all border border-white/5">
                  <Linkedin size={18} />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 glass border-white/10 rounded-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-black text-foreground/60 hover:text-primary transition-all flex items-center justify-between group"
                >
                  {link.name}
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
