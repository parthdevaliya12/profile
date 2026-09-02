import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2, Zap, Heart, Coffee } from "lucide-react";

// Animated counter hook
function useCountUp(target, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  
  return count;
}

const STATS = [
  { value: 3, suffix: "+", label: "Projects Built", icon: Briefcase },
  { value: 9.2, suffix: "", label: "Current CGPA", icon: GraduationCap, isDecimal: true },
  { value: 10, suffix: "+", label: "Technologies", icon: Code2 },
  { value: 100, suffix: "%", label: "Dedication", icon: Zap },
];

const INTERESTS = ["Clean Code", "UI/UX Design", "Open Source", "Problem Solving", "Cricket", "New Technologies"];

export default function About() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 sm:py-28 lg:py-36 bg-ink overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px] transform-gpu" />
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-bronze/[0.04] rounded-full blur-[100px] transform-gpu" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-20 text-center px-2"
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-heading">
            The story behind <span className="text-gradient-gold">the code.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Left — Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative gold line */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-transparent mb-8" />
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-white/90 mb-5 sm:mb-6 leading-snug">
              Passionate about turning ideas into<br />
              <span className="text-gold italic">elegant digital solutions.</span>
            </h3>

            <div className="space-y-5 text-muted leading-relaxed font-body">
              <p>
                Hi, I'm <span className="text-white/90 font-medium">Parth Devaliya</span>, currently pursuing my MCA (Master of Computer Applications) at Kadi Sarva Vishwavidyalaya, Gandhinagar. My journey in tech started with curiosity and evolved into a deep passion for building full-stack web applications.
              </p>
              <p>
                I specialize in the <span className="text-gold/80 font-medium">MERN Stack</span> — React.js, Node.js, Express, and MongoDB — alongside modern tools like Tailwind CSS, Framer Motion, and cloud deployment platforms. I love creating responsive, user-friendly interfaces that are both beautiful and functional.
              </p>
              <p>
                Beyond coding, I'm continuously expanding my knowledge in Data Structures, Object-Oriented Programming, and Database Management. I believe in writing clean, maintainable code and embracing the latest technologies to solve real-world problems.
              </p>
            </div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 pl-5 border-l-2 border-gold/30"
            >
              <p className="text-base font-display italic text-white/60 leading-relaxed">
                "Code is poetry — every line should tell a story and every function should serve a purpose."
              </p>
            </motion.blockquote>

            {/* Interests */}
            <div className="mt-10">
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted mb-4 font-medium">Interests & Hobbies</h4>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest, i) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="gold-chip text-xs"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => {
                const Icon = stat.icon;
                const count = stat.isDecimal ? (inView ? stat.value : 0) : useCountUp(stat.value, 1500, inView);
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="premium-glass-card p-6 text-center group hover:border-gold/20"
                  >
                    <div className="h-10 w-10 mx-auto rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-500">
                      <Icon size={18} className="text-gold/70 group-hover:text-gold transition-colors" />
                    </div>
                    <div className="text-3xl font-display font-bold text-white/90 mb-1">
                      {stat.isDecimal ? count.toFixed(1) : count}{stat.suffix}
                    </div>
                    <div className="text-xs text-muted uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Fun facts card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="premium-glass-card p-6 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <Coffee size={18} className="text-gold/60" />
                <h4 className="text-sm font-display font-semibold text-white/80 uppercase tracking-wider">Quick Facts</h4>
              </div>
              <ul className="space-y-3 text-sm text-muted">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold/40" />
                  <span>Based in <span className="text-white/80">Gujarat, India</span></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold/40" />
                  <span>Currently pursuing <span className="text-white/80">MCA</span> with 9.2 CGPA</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold/40" />
                  <span>Completed <span className="text-white/80">BCA</span> with 8.6 CGPA</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold/40" />
                  <span>Love <span className="text-white/80">Cricket</span> & exploring new tech</span>
                </li>
              </ul>
            </motion.div>

            {/* Availability CTA */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-between p-5 rounded-2xl border border-gold/10 bg-gold/[0.02] hover:bg-gold/[0.05] hover:border-gold/20 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Heart size={18} className="text-gold/60 group-hover:text-gold transition-colors" />
                <span className="text-sm font-medium text-white/80 group-hover:text-white/90 transition-colors">Let's work together</span>
              </div>
              <span className="text-xs text-gold/60 group-hover:text-gold uppercase tracking-wider transition-colors">Get in touch →</span>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
