import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, MapPin, Download, Sparkles } from "lucide-react";

const ROLES = ["Full Stack Developer", "Software Developer", "MERN Stack Developer"];

// 3D Tilt card component
function TiltCard({ children, className = "", style = {} }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ ...style, transform, transition: "transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)" }}
    >
      {children}
    </div>
  );
}

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
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-ink overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Gold aurora blobs */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gold/8 blur-[150px] mix-blend-screen animate-blob transform-gpu" />
        <div className="absolute top-[30%] -right-[15%] w-[40%] h-[40%] rounded-full bg-gold-dark/10 blur-[130px] mix-blend-screen animate-blob transform-gpu" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-bronze/5 blur-[120px] mix-blend-screen animate-blob transform-gpu" style={{ animationDelay: "4s" }} />
        
        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
        
        {/* Grain overlay */}
        <div className="absolute inset-0 grain-overlay opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="bento-grid">

          {/* ═══ Main Hero Card ═══ */}
          <TiltCard className="premium-glass-card bento-col-span-2 bento-row-span-2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 text-xs font-medium text-gold bg-gold/5 border border-gold/10 rounded-full px-4 py-1.5 mb-8"
              >
                <Sparkles size={13} className="animate-pulse" />
                <span className="tracking-wider uppercase">Open to opportunities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight mb-4 sm:mb-5"
              >
                I craft digital
                <br />
                <span className="text-gradient-gold">masterpieces.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-base sm:text-lg md:text-xl font-body text-muted mb-6 sm:mb-8 h-7 sm:h-8"
              >
                I'm a <span className="text-white/90 font-medium">{text}</span>
                <span className="inline-block w-[2px] h-5 bg-gold ml-1 align-middle animate-pulse" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-muted text-sm sm:text-base leading-relaxed max-w-lg mb-8 sm:mb-10 font-body"
              >
                Building immersive, performant, and beautifully designed digital experiences with modern web technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
              >
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-gold inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold w-full sm:w-auto justify-center"
                >
                  View My Work
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-gold/15 text-gold text-sm font-medium hover:bg-gold/5 hover:border-gold/25 transition-all w-full sm:w-auto justify-center"
                >
                  Know More
                </a>
              </motion.div>
            </div>
          </TiltCard>

          {/* ═══ 3D Logo / Visual Card ═══ */}
          <TiltCard className="premium-glass-card p-6 flex flex-col items-center justify-center text-center group relative overflow-hidden">
            {/* Orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-40 h-40 rounded-full border border-gold/10 animate-spinSlow" style={{ animationDuration: "20s" }} />
              <div className="absolute w-52 h-52 rounded-full border border-gold/5" style={{ animation: "spinReverse 25s linear infinite" }} />
              <div className="absolute w-64 h-64 rounded-full border border-gold/[0.03]" style={{ animation: "spinSlow 30s linear infinite" }} />
            </div>
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative z-10 h-28 w-28 rounded-full overflow-hidden border-2 border-gold/20 shadow-[0_0_40px_rgba(200,169,96,0.15)] group-hover:shadow-[0_0_60px_rgba(200,169,96,0.25)] transition-shadow duration-700 animate-float"
            >
              <img src="/logo.png" alt="PA Monogram" className="h-full w-full object-cover scale-[1.6]" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-5 text-xs text-muted uppercase tracking-[0.3em] font-medium relative z-10"
            >
              Parth Devaliya
            </motion.p>
          </TiltCard>

          {/* ═══ Location Card ═══ */}
          <TiltCard className="premium-glass-card p-6 flex flex-col items-center justify-center text-center group">
            <div className="h-14 w-14 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(200,169,96,0.15)]">
              <MapPin size={24} className="text-gold/70 group-hover:text-gold transition-colors" />
            </div>
            <h3 className="text-base font-display font-semibold text-white/90 mb-1">Location</h3>
            <p className="text-sm text-muted mb-3">Gujarat, India</p>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase">Available</span>
            </div>
          </TiltCard>

          {/* ═══ Tech Stack Card (Spans 2 cols) ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="premium-glass-card bento-col-span-2 p-7 flex items-center justify-between gap-4 group relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50%] bg-gold/[0.03] blur-[50px] rounded-full group-hover:bg-gold/[0.06] transition-colors duration-700" />

            <div className="relative z-10 max-w-[45%]">
              <h3 className="text-lg font-display font-semibold text-white/90 mb-2">My Stack</h3>
              <p className="text-sm text-muted leading-relaxed">
                Passionate about modern web technologies and building scalable architectures.
              </p>
            </div>

            <div className="relative z-10 flex gap-2 flex-wrap max-w-[50%] justify-end">
              {['React', 'Node.js', 'Tailwind', 'MongoDB', 'Express'].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  className="gold-chip text-xs cursor-default"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ═══ Socials Card ═══ */}
          <TiltCard className="premium-glass-card p-6 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/[0.04] blur-[50px] -mr-16 -mt-16 group-hover:bg-gold/[0.08] transition-colors duration-700" />
            <h3 className="text-base font-display font-semibold text-white/90 mb-5 relative z-10">Connect</h3>
            <div className="flex gap-3 relative z-10">
              <a
                href="https://github.com/parthdevaliya12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02] hover:bg-gold/5 border border-white/5 hover:border-gold/15 transition-all hover:-translate-y-1"
              >
                <Github className="text-white/60 group-hover:text-gold transition-colors" size={24} />
                <span className="text-[10px] font-medium text-muted uppercase tracking-wider">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/parthdevaliya12"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02] hover:bg-gold/5 border border-white/5 hover:border-gold/15 transition-all hover:-translate-y-1"
              >
                <Linkedin className="text-[#0A66C2] opacity-70 hover:opacity-100 transition-opacity" size={24} />
                <span className="text-[10px] font-medium text-muted uppercase tracking-wider">LinkedIn</span>
              </a>
            </div>
          </TiltCard>

          {/* ═══ Resume Card ═══ */}
          <TiltCard className="premium-glass-card p-6 flex flex-col items-center justify-center text-center cursor-pointer group">
            <a href="/Parth_Devaliya_Resume.pdf" className="flex flex-col items-center">
              <div className="h-14 w-14 rounded-2xl bg-gold/5 border border-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(200,169,96,0.15)]">
                <Download size={22} className="text-gold/70 group-hover:text-gold group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-base font-display font-semibold text-white/90 group-hover:text-gold transition-colors">Resume</h3>
              <p className="text-[10px] text-muted mt-1 uppercase tracking-[0.2em]">Download PDF</p>
            </a>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}
