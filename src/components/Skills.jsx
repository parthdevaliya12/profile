import { motion } from "framer-motion";
import { Monitor, Server, Wrench } from "lucide-react";

const SKILL_GROUPS = [
  {
    category: "Frontend",
    icon: Monitor,
    color: "from-primary",
    skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML & CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    color: "from-secondary",
    skills: ["Node.js", "MongoDB", "PHP", "Java", "Python", "MySQL"],
  },
  {
    category: "Workflow",
    icon: Wrench,
    color: "from-emerald-500",
    skills: ["Git & GitHub", "VS Code", "Vercel / Netlify", "Render", "Antigravity"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-ink overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 transform-gpu" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Technical <span className="text-gradient-primary">Arsenal</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            The core technologies and tools I use to build scalable, high-performance applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="premium-glass-card p-8 group flex flex-col"
              >
                <div className={`absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br ${group.color} to-transparent opacity-0 group-hover:opacity-20 blur-[50px] transition-opacity duration-700 rounded-full`} />

                <div className="flex items-center gap-4 mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <Icon size={24} className="text-white group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {group.skills.map((skill, j) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (i * 0.1) + (j * 0.05), duration: 0.4 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white/90 hover:bg-white/10 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
