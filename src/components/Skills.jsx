import { motion } from "framer-motion";
import { Monitor, Server, Wrench } from "lucide-react";
import { cn } from "../lib/utils";

const SKILL_GROUPS = [
  {
    category: "Frontend",
    icon: Monitor,
    tag: "client",
    skills: [
      { name: "React.js", level: 60 },
      { name: "Tailwind CSS", level: 60 },
      { name: "JavaScript", level: 60 },
      { name: "HTML & CSS", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    tag: "server",
    skills: [
      { name: "Node.js", level: 60 },
      { name: "MongoDB", level: 60 },
      { name: "PHP", level: 80 },
      { name: "Java", level: 70 },
      { name: "Python", level: 50 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    tag: "workflow",
    skills: [
      { name: "Git & GitHub", level: 70 },
      { name: "VS Code", level: 90 },
      { name: "Vercel / Netlify", level: 70 },
    ],
  },
];

function SkillBar({ name, level, delay }) {
  return (
    <div className="relative group">
      <div className="flex justify-between items-baseline mb-2">
        <span className="font-mono text-sm text-white font-medium group-hover:text-primary transition-colors">{name}</span>
        <span className="font-mono text-xs text-muted font-semibold">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-ink-border overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: delay, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-orange-500 to-primary relative overflow-hidden"
        >
          {/* Shimmer effect inside the bar */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </motion.div>
      </div>
    </div>
  );
}

function SkillCard({ group, index }) {
  const Icon = group.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card rounded-2xl p-8 relative overflow-hidden group shadow-lg"
    >
      {/* Subtle background glow on hover */}
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary shadow-inner">
              <Icon size={20} />
            </div>
            <h3 className="font-display text-xl font-bold text-white tracking-wide">
              {group.category}
            </h3>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
            {group.tag}
          </span>
        </div>
        
        <div className="space-y-6">
          {group.skills.map((skill, i) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={0.2 + i * 0.1 + index * 0.15}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-ink-panel overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,black_10%,transparent_100%)] opacity-50" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 mb-4 md:mx-auto">
            <span className="font-mono text-xs text-primary uppercase tracking-wider">Expertise</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Technical <span className="text-gradient-primary">Arsenal</span>
          </h2>
          <p className="font-body text-muted mt-4 max-w-xl md:mx-auto text-lg leading-relaxed">
            A comprehensive overview of my technical skills, tools, and the technologies I use to build modern digital products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_GROUPS.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>

      <style jsx="true">{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
