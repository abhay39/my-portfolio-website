"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '@/data/resume';
import { 
  Code2, 
  Database, 
  Cloud, 
  Terminal, 
  Cpu, 
  Globe, 
  Layers, 
  CpuIcon, 
  Server, 
  ShieldCheck, 
  Github, 
  Smartphone,
  Workflow
} from 'lucide-react';

const skillIconMap: Record<string, { icon: React.ReactNode, color: string }> = {
  // Languages
  "Python": { icon: <Terminal size={14} />, color: "text-blue-400" },
  "JavaScript": { icon: <Code2 size={14} />, color: "text-yellow-400" },
  "TypeScript": { icon: <Code2 size={14} />, color: "text-blue-500" },
  "C++": { icon: <Cpu size={14} />, color: "text-blue-600" },
  "SQL": { icon: <Database size={14} />, color: "text-orange-400" },
  // Backend
  "FastAPI": { icon: <Server size={14} />, color: "text-green-400" },
  "Django": { icon: <Layers size={14} />, color: "text-green-600" },
  "Node.js": { icon: <Globe size={14} />, color: "text-green-500" },
  "Express.js": { icon: <Globe size={14} />, color: "text-gray-400" },
  "REST APIs": { icon: <Workflow size={14} />, color: "text-blue-400" },
  "WebSockets": { icon: <Globe size={14} />, color: "text-yellow-500" },
  // Databases
  "PostgreSQL": { icon: <Database size={14} />, color: "text-blue-300" },
  "MongoDB": { icon: <Database size={14} />, color: "text-green-500" },
  "Redis": { icon: <CpuIcon size={14} />, color: "text-red-500" },
  // Cloud & DevOps
  "AWS (EC2, S3)": { icon: <Cloud size={14} />, color: "text-orange-400" },
  "DigitalOcean": { icon: <Cloud size={14} />, color: "text-blue-400" },
  "Docker": { icon: <ShieldCheck size={14} />, color: "text-blue-500" },
  "CI/CD": { icon: <Workflow size={14} />, color: "text-green-400" },
  "Nginx": { icon: <Server size={14} />, color: "text-green-500" },
  "Git": { icon: <Github size={14} />, color: "text-orange-600" },
};

const skillGroups = [
  {
    title: "Languages",
    icon: <Terminal className="text-primary" />,
    color: "primary",
    skills: resumeData.skills.languages
  },
  {
    title: "Backend",
    icon: <Code2 className="text-secondary" />,
    color: "secondary",
    skills: resumeData.skills.backend
  },
  {
    title: "Databases",
    icon: <Database className="text-accent" />,
    color: "accent",
    skills: resumeData.skills.databases
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="text-pink-400" />,
    color: "primary",
    skills: resumeData.skills.cloud_devops
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center mb-16">
            <div className="text-[10px] uppercase tracking-[0.5em] text-primary font-black mb-4">Technical Proficiency</div>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-center">
              Tech Stack<span className="text-primary">.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass-morphism rounded-3xl hover:border-primary/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                    {group.icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const skillData = skillIconMap[skill];
                    return (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-white/5 border border-white/5 rounded-2xl text-sm text-foreground/70 hover:text-white hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 cursor-default flex items-center gap-2 group/tag"
                      >
                        <span className={skillData?.color || "text-foreground/40"}>
                          {skillData?.icon || <Code2 size={14} />}
                        </span>
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

