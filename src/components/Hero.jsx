import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, Sparkles, MapPin, Code2, Download } from "lucide-react";

const ROLES = ["Full Stack Developer", "Software Developer"];

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
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center bg-ink overflow-hidden">

      {/* Animated Aurora Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-blob transform-gpu" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] mix-blend-screen animate-blob animation-delay-2000 transform-gpu" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full bg-emerald-500/10 blur-[120px] mix-blend-screen animate-blob animation-delay-4000 transform-gpu" />

        {/* Starfield overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="bento-grid" style={{ perspective: 1000 }}>

          {/* Main Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotateX: 1, rotateY: -1, scale: 1.01 }}
            className="premium-glass-card bento-col-span-2 bento-row-span-2 p-8 md:p-12 flex flex-col justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              >
                <Sparkles size={14} className="animate-pulse" />
                <span>Available for hire</span>
              </motion.div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight mb-4 break-words">
                Crafting digital
                <br />
                <span className="text-gradient-primary">masterpieces.</span>
              </h1>

              <div className="text-xl sm:text-2xl font-medium text-muted mb-8 h-8 font-body">
                I'm a <span className="text-white">{text}</span>
                <span className="inline-block w-[3px] h-6 bg-primary ml-1 align-middle animate-pulse" />
              </div>

              <p className="text-muted text-base leading-relaxed max-w-md mb-10 font-body">
                I build immersive, performant, and beautifully designed digital experiences using modern web technologies.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-ink font-semibold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
                >
                  Explore Work
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
            className="premium-glass-card p-6 flex flex-col items-center justify-center text-center group"
          >
            <div className="h-16 w-16 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(139,92,246,0.2)]">
              <MapPin size={28} className="text-white group-hover:text-secondary transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Location</h3>
            <p className="text-sm text-muted">Gujarat, India</p>
            <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] text-green-400 font-semibold tracking-wider uppercase">Online</span>
            </div>
          </motion.div>

          {/* Socials Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
            className="premium-glass-card p-6 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] -mr-16 -mt-16 group-hover:bg-primary/40 transition-colors duration-500" />
            <h3 className="text-lg font-bold text-white mb-6 relative z-10">Connect</h3>
            <div className="flex gap-4 relative z-10">
              <a
                href="https://github.com/parthdevaliya12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1"
              >
                <Github className="text-white/70 hover:text-white transition-colors" size={28} />
                <span className="text-[10px] font-medium text-muted uppercase tracking-wider">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/parthdevaliya12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1"
              >
                <Linkedin className="text-[#0A66C2] opacity-80 hover:opacity-100 transition-opacity" size={28} />
                <span className="text-[10px] font-medium text-muted uppercase tracking-wider">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Stack Summary Card (Spans 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.01 }}
            className="premium-glass-card bento-col-span-2 p-8 relative overflow-hidden group flex items-center justify-between"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50%] bg-secondary/10 blur-[40px] rounded-full group-hover:bg-secondary/20 transition-colors duration-700" />

            <div className="relative z-10 max-w-[50%]">
              <div className="flex items-center gap-2 mb-3">
                <Code2 size={20} className="text-secondary" />
                <h3 className="text-xl font-bold text-white">Stack</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Passionate about modern web technologies and building scalable architectures.
              </p>
            </div>

            <div className="relative z-10 flex gap-2 flex-wrap max-w-[40%] justify-end">
              {['React', 'Node.js', 'Tailwind', 'MongoDB'].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-xs font-medium text-white shadow-lg backdrop-blur-md"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Resume Card */}
          <motion.a
            href="/Parth_Devaliya_Resume.pdf"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ rotateX: -5, rotateY: 5, scale: 1.02 }}
            className="premium-glass-card p-6 flex flex-col items-center justify-center text-center cursor-pointer group"
          >
            <div className="h-16 w-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
              <Download size={28} className="text-white group-hover:-translate-y-1 transition-transform" />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">Resume</h3>
            <p className="text-xs text-muted mt-1 uppercase tracking-wider">Download PDF</p>
          </motion.a>

          {/* Aesthetic visual block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="premium-glass-card p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10 group-hover:via-white/5 transition-colors duration-700" />
            <div className="h-full w-full border border-white/5 rounded-2xl flex items-center justify-center animate-float">
              <div className="h-24 w-24 rounded-full border border-primary/30 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full border border-secondary/40 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-secondary blur-sm" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
