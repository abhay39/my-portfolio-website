"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resume';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary">01.</span> About Me
            <div className="h-px flex-1 bg-white/10" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 space-y-6 text-lg text-foreground/70 leading-relaxed">
              <p>
                Hello! I&apos;m Abhay, a backend specialist who loves building things that live on the internet. 
                My journey in software development started with a curiosity about how data flows across the web, 
                which led me to specialize in high-performance backend architectures.
              </p>
              <p>
                Fast-forward to today, and I&apos;ve had the privilege of working at a cybersecurity firm like 
                <span className="text-primary font-medium"> FireCompass</span>, where I focused on reducing latency 
                and building robust data pipelines.
              </p>
              <p>
                My main focus these days is building scalable, real-time applications that provide seamless 
                experiences for users worldwide. I thrive on solving complex distributed system problems 
                and optimizing every millisecond of API response time.
              </p>
            </div>

            <div className="relative group lg:ml-auto">
              <div className="absolute -inset-4 bg-linear-to-r from-primary to-secondary rounded-[32px] opacity-20 group-hover:opacity-40 transition duration-700 blur-2xl" />
              <div className="relative aspect-4/5 md:aspect-square w-full max-w-[320px] mx-auto md:max-w-none rounded-[32px] overflow-hidden glass border-white/10 group-hover:border-primary/50 transition-all duration-700 shadow-2xl">
                <motion.img 
                  src="/profile.png" 
                  alt="Abhay Kumar Gupta"
                  className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
