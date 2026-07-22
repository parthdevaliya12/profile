import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

const ROLES = ["Full Stack Developer", "Web Enthusiast"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-ink"
    >
      {/* Background Gradients & Particles (Framer Motion) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-10 right-0 h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[150px] mix-blend-screen" />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-center w-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-xs text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md"
          >
            <Sparkles size={14} className="animate-pulse" />
            <span>Available for new opportunities</span>
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
            Building digital
            <br />
            <span className="text-gradient-primary">experiences.</span>
          </h1>

          <div className="font-display text-2xl sm:text-3xl font-medium text-muted mt-6 h-10">
            I'm a <span className="text-white">{text}</span>
            <span className="inline-block w-[3px] h-7 bg-primary ml-1 align-middle animate-pulse" />
          </div>

          <p className="font-body text-muted mt-6 max-w-lg text-lg leading-relaxed">
            Frontend-focused developer turning ideas into interactive, premium digital experiences. I specialize in React, Tailwind, and crafting flawless UIs.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <a
              href="#projects"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-body text-base font-medium text-white shadow-[0_0_40px_-10px_rgba(239,68,68,0.5)] transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0" />
            </a>
            <a
              href="/Parth_Devaliya_Resume.pdf"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 font-body text-base font-medium text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-12">
            {[
              { icon: Github, href: "https://github.com/parthdevaliya12", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/parthdevaliya12", label: "LinkedIn" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="group flex items-center gap-2 text-muted hover:text-white transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:text-primary">
                  <social.icon size={18} />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Code Editor Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
          style={{ perspective: 1000 }}
        >
          <div className="relative animate-float rounded-2xl border border-white/10 bg-ink-panel/80 backdrop-blur-2xl shadow-2xl shadow-primary/10 overflow-hidden">
            {/* Window Controls */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-4 font-mono text-xs text-muted">developer.config.js</span>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-[13px] leading-loose overflow-x-auto text-muted/90">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">parth</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-yellow-300">{"{"}</span>
              </p>
              <div className="pl-6 border-l border-white/5 ml-2">
                <p>
                  <span className="text-cyan-400">role</span>:{" "}
                  <span className="text-green-400">"Full Stack Developer"</span>,
                </p>
                <p>
                  <span className="text-cyan-400">skills</span>: <span className="text-purple-300">[</span>
                </p>
                <p className="pl-4">
                  <span className="text-green-400">"React.js"</span>, <span className="text-green-400">"Node.js"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-green-400">"Tailwind CSS"</span>, <span className="text-green-400">"MongoDB"</span>
                </p>
                <p>
                  <span className="text-purple-300">]</span>,
                </p>
                <p>
                  <span className="text-cyan-400">passion</span>:{" "}
                  <span className="text-green-400">"Building pixel-perfect UIs"</span>,
                </p>
                <p>
                  <span className="text-cyan-400">location</span>:{" "}
                  <span className="text-green-400">"India"</span>
                </p>
              </div>
              <p>
                <span className="text-yellow-300">{"}"}</span>;
              </p>
              <p className="mt-4">
                <span className="text-purple-400">export default</span> parth;
              </p>
            </div>
          </div>

          {/* Floating Accents */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 flex items-center gap-2 rounded-xl border border-white/10 bg-ink-soft/90 backdrop-blur-xl px-4 py-3 shadow-xl"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/20 text-green-400">
              <Sparkles size={16} />
            </div>
            <div>
              <p className="font-body text-xs font-medium text-white">Clean Code</p>
              <p className="font-mono text-[10px] text-muted">0 Errors</p>
            </div>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-8 flex items-center gap-2 rounded-xl border border-white/10 bg-ink-soft/90 backdrop-blur-xl px-4 py-3 shadow-xl"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div>
              <p className="font-body text-xs font-medium text-white">Modern UI</p>
              <p className="font-mono text-[10px] text-muted">Premium Design</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
