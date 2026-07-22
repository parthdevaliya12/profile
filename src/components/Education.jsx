import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { cn } from "../lib/utils";

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Kadi Sarva Vishwavidyalaya, Gandhinagar",
    period: "Pursuing",
    detail: "Focused on software engineering, cloud computing, and AI technologies while building scalable enterprise solutions.",
    score: "CGPA: 9.2 / 10",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Saurashtra University, Rajkot",
    period: "2022 — 2025",
    detail: "Built a strong foundation in programming, data structures, and database management systems.",
    score: "CGPA: 8.6 / 10",
  },
];

function EducationItem({ item, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-8 sm:pl-32 py-6 group"
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[15px] sm:left-[6.5rem] top-16 bottom-[-24px] w-[2px] bg-gradient-to-b from-primary/30 to-transparent" />
      )}

      {/* Timeline Dot/Icon */}
      <div className="absolute left-0 sm:left-[5.5rem] top-8 flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-ink shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] z-10">
        <GraduationCap size={14} className="text-primary" />
      </div>

      {/* Mobile Period (Hidden on sm) */}
      <div className="sm:hidden mb-2 font-mono text-xs text-muted flex items-center gap-1.5">
        <Calendar size={12} className="text-primary" />
        {item.period}
      </div>

      {/* Desktop Period (Absolute positioned left) */}
      <div className="hidden sm:block absolute left-0 top-9 w-16 text-right font-mono text-xs text-muted">
        {item.period}
      </div>

      {/* Content Card */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        {/* Subtle hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <div className="relative z-10">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                {item.degree}
              </h3>
              <p className="font-mono text-sm text-muted mt-1">{item.school}</p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 font-mono text-xs text-orange-400 whitespace-nowrap">
              <Award size={14} />
              {item.score}
            </div>
          </div>
          <p className="font-body text-sm text-muted/90 leading-relaxed">
            {item.detail}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative py-24 bg-ink overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 mb-4">
            <span className="font-mono text-xs text-primary uppercase tracking-wider">Experience</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Education <span className="text-muted font-light">&</span> Journey
          </h2>
          <p className="font-body text-muted mt-4 max-w-xl mx-auto text-lg">
            A timeline of my academic background and the foundation of my engineering career.
          </p>
        </motion.div>

        <div className="relative">
          {EDUCATION.map((item, i) => (
            <EducationItem
              key={item.degree}
              item={item}
              index={i}
              isLast={i === EDUCATION.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
