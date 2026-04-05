import { Navbar } from "@/components/Navbar";
import { Background } from "@/components/Background";
import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { Education } from "@/components/sections/Education";
import { GithubStats } from "@/components/sections/GithubStats";
import { Contact } from "@/components/sections/Contact";
import { TechMarquee } from "@/components/TechMarquee";
import { resumeData } from "@/data/resume";
import { Github, Linkedin, Mail } from "lucide-react";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Background />
      <Navbar />
      <ScrollToTop />
      
      <div className="space-y-0">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <GithubStats />
        <Education />
        <Contact />
      </div>
      
      <footer className="pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/5 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="text-3xl font-black tracking-tighter">
                AKG<span className="text-primary">.</span>
              </div>
              <p className="text-foreground/40 text-sm max-w-xs text-center md:text-left leading-relaxed">
                Specialized in building high-performance backend systems and fluid mobile experiences.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-6">
                {[
                  { icon: <Github size={20} />, href: resumeData.socials.github },
                  { icon: <Linkedin size={20} />, href: resumeData.socials.linkedin },
                  { icon: <Mail size={20} />, href: `mailto:${resumeData.email}` }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href}
                    target="_blank"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/5 text-foreground/40 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="text-[10px] uppercase tracking-[0.4em] font-black text-foreground/20">
                Let&apos;s Connect
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-foreground/20 text-[10px] uppercase tracking-[0.2em] font-medium">
              © {new Date().getFullYear()} Abhay Kumar Gupta. Handcrafted with passion.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-foreground/20 hover:text-primary text-[10px] uppercase tracking-[0.2em] transition-colors">Privacy</a>
              <a href="#" className="text-foreground/20 hover:text-primary text-[10px] uppercase tracking-[0.2em] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
