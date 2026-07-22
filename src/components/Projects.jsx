import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";

// Re-enable image imports from the original codebase
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/esvio.png";
import p4 from "../assets/p4.png";

const PROJECTS = [
  {
    name: "Esvio – Property Booking Platform",
    type: "Marketplace Platform",
    description: "Esvio is a modern, responsive property listing and booking web application built using the MERN Stack. Users can list properties, browse listings, book properties, and manage bookings.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    repo: "https://github.com/parthdevaliya12/Airbnb-Clone",
    live: "https://esvio.vercel.app",
    featured: true,
    img: p3,
  },
  {
    name: "TeleMart – TV Shopping",
    type: "E-Commerce Platform",
    description: "A complete TV Selling / E-Commerce Website built using Django and SQLite. Includes an Admin Panel to manage products, categories, and orders.",
    stack: ["Django", "SQLite", "JavaScript", "Bootstrap"],
    repo: "https://github.com/parthdevaliya12/TeleMart-TV-Django",
    live: "",
    featured: false,
    img: p2,
  },
  {
    name: "AirWell – AC Shopping System",
    type: "E-Commerce Platform",
    description: "This project includes product listing, customer management, cart system, and an admin panel to manage products and orders effortlessly.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    repo: "https://github.com/parthdevaliya12/AirWell-AC-PHP",
    live: "",
    featured: false,
    img: p1,
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "group relative rounded-3xl border border-white/10 bg-ink-soft/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] hover:-translate-y-2",
        project.featured ? "lg:col-span-2 grid lg:grid-cols-2" : "col-span-1 flex flex-col"
      )}
    >
      {/* Project Image Box */}
      <div className={cn(
        "relative overflow-hidden bg-ink",
        project.featured ? "h-full min-h-[300px]" : "h-56"
      )}>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-panel to-transparent z-10 opacity-60" />
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Project Links Overlay */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-primary transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-primary transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={cn(
        "relative p-8 z-20 flex flex-col justify-center",
        project.featured ? "h-full" : "flex-grow"
      )}>
        {/* Background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10" />

        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            {project.type}
          </span>
        </div>

        <h3 className="font-display text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300 mb-3">
          {project.name}
        </h3>

        <p className="font-body text-muted/90 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] text-white/70 bg-white/5 border border-white/10 rounded-md px-2.5 py-1.5 transition-colors group-hover:border-primary/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-ink overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[150px] mix-blend-screen" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 mb-4 md:mx-auto">
            <span className="font-mono text-xs text-primary uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="font-body text-muted mt-4 max-w-xl md:mx-auto text-lg leading-relaxed">
            A selection of robust applications I've built, focusing on clean code, seamless user experiences, and scalable architecture.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/parthdevaliya12"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 font-body text-sm font-medium text-white transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary active:scale-95"
          >
            <span className="flex items-center gap-2 relative z-10">
              View All on GitHub
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
