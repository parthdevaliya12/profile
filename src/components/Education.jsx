import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

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

export default function Education() {
  return (
    <section id="education" className="relative py-32 bg-ink overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] transform-gpu" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Academic <span className="text-gradient-primary">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {EDUCATION.map((item, i) => {
            const isLast = i === EDUCATION.length - 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="relative pl-10 sm:pl-32 py-8 group"
              >
                {/* Timeline Line */}
                {!isLast && (
                  <div className="absolute left-[19px] sm:left-[6.5rem] top-20 bottom-[-32px] w-[2px] bg-gradient-to-b from-primary/30 via-secondary/30 to-transparent" />
                )}

                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-[5.5rem] top-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-ink-panel shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] z-10">
                  <GraduationCap size={18} className="text-primary group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Mobile Period */}
                <div className="sm:hidden mb-4 inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wide">
                  {item.period}
                </div>

                {/* Desktop Period */}
                <div className="hidden sm:block absolute left-0 top-11 w-16 text-right text-sm font-bold text-primary">
                  {item.period}
                </div>

                {/* Content Card */}
                <div className="premium-glass-card p-8 group-hover:translate-x-2 transition-transform duration-500">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                        {item.degree}
                      </h3>
                      <h4 className="text-secondary font-medium">{item.school}</h4>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-inner">
                      <Award size={14} className="text-emerald-400" />
                      {item.score}
                    </div>
                  </div>
                  <p className="text-muted leading-relaxed mt-4">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
