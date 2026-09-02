import { motion } from "framer-motion";
import { Monitor, Server, Wrench, Sparkles } from "lucide-react";

const SKILL_GROUPS = [
  {
    category: "Frontend",
    icon: Monitor,
    description: "Building responsive, interactive user interfaces",
    skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML & CSS", "Framer Motion"],
    accentColor: "gold",
  },
  {
    category: "Backend",
    icon: Server,
    description: "Server-side logic and database architecture",
    skills: ["Node.js", "MongoDB", "Express.js", "PHP", "Java", "Python", "MySQL"],
    accentColor: "gold-light",
  },
  {
    category: "Workflow",
    icon: Wrench,
    description: "Tools and platforms for efficient development",
    skills: ["Git & GitHub", "VS Code", "Vercel / Netlify", "Render", "Postman"],
    accentColor: "bronze",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 lg:py-36 bg-ink overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[120px] -translate-y-1/2 transform-gpu" />
        <div className="absolute inset-0 dot-pattern opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="section-tag">Expertise</span>
          <h2 className="section-heading">
            Technical <span className="text-gradient-gold">Arsenal</span>
          </h2>
          <p className="text-muted text-base lg:text-lg max-w-2xl mx-auto mt-2">
            The core technologies and tools I use to build scalable, high-performance applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="premium-glass-card p-7 group flex flex-col relative overflow-hidden"
              >
                {/* Gold corner glow */}
                <div className="absolute -right-16 -top-16 w-40 h-40 bg-gold/[0.04] rounded-full blur-[50px] group-hover:bg-gold/[0.08] transition-colors duration-700" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-3 relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(200,169,96,0.1)]">
                    <Icon size={20} className="text-gold/60 group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white/90">{group.category}</h3>
                    <p className="text-xs text-muted mt-0.5">{group.description}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="gold-divider my-5 opacity-50" />

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5 mt-auto relative z-10">
                  {group.skills.map((skill, j) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (i * 0.1) + (j * 0.05), duration: 0.4 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="gold-chip text-xs cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom decorative bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 gold-divider"
        />

      </div>
    </section>
  );
}
