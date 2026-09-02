import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Kadi Sarva Vishwavidyalaya, Gandhinagar",
    period: "Pursuing",
    detail: "Focused on software engineering, cloud computing, and AI technologies while building scalable enterprise solutions.",
    score: "CGPA: 9.2 / 10",
    current: true,
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Saurashtra University, Rajkot",
    period: "2022 — 2025",
    detail: "Built a strong foundation in programming, data structures, and database management systems.",
    score: "CGPA: 8.6 / 10",
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28 lg:py-36 bg-ink overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px] transform-gpu" />
        <div className="absolute inset-0 dot-pattern opacity-15" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-20 text-center px-2"
        >
          <span className="section-tag">Experience</span>
          <h2 className="section-heading">
            Academic <span className="text-gradient-gold">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Gold timeline line */}
          <div className="absolute left-[19px] sm:left-[6.5rem] top-12 bottom-8 w-[1px] bg-gradient-to-b from-gold/30 via-gold/10 to-transparent hidden sm:block" />

          {EDUCATION.map((item, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="relative pl-0 sm:pl-32 py-6 group"
              >
                {/* Timeline Dot */}
                <div className="hidden sm:flex absolute left-[5.5rem] top-8 h-9 w-9 items-center justify-center rounded-full border border-gold/20 bg-ink-panel shadow-[0_0_20px_rgba(200,169,96,0.1)] transition-all duration-500 group-hover:scale-110 group-hover:border-gold/40 group-hover:shadow-[0_0_30px_rgba(200,169,96,0.2)] z-10">
                  <GraduationCap size={16} className="text-gold/60 group-hover:text-gold transition-colors duration-500" />
                </div>

                {/* Period badge - mobile */}
                <div className="sm:hidden mb-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/5 border border-gold/10 text-gold text-xs font-medium">
                  <Calendar size={12} />
                  {item.period}
                </div>

                {/* Period - desktop */}
                <div className="hidden sm:block absolute left-0 top-9 w-16 text-right text-xs font-medium text-gold/70">
                  {item.period}
                </div>

                {/* Content Card */}
                <div className="premium-glass-card p-7 lg:p-8 group-hover:border-gold/15 transition-all duration-500">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl lg:text-2xl font-display font-bold text-white/90">
                          {item.degree}
                        </h3>
                        {item.current && (
                          <span className="px-2.5 py-0.5 rounded-full bg-gold/10 border border-gold/15 text-[10px] text-gold font-semibold uppercase tracking-wider">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm text-gold/70 font-medium">{item.school}</h4>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-gold/5 border border-gold/10 px-4 py-1.5 text-xs font-semibold text-gold/80">
                      <Award size={13} className="text-emerald-400" />
                      {item.score}
                    </div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mt-3">
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
