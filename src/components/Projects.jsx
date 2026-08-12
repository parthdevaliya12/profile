import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight, Building2, Tv, Wind } from "lucide-react";

const PROJECTS = [
  {
    name: "Esvio – Property Booking Platform",
    type: "Marketplace Platform",
    description: "Esvio is a modern, responsive property listing and booking web application built using the MERN Stack. Users can list properties, browse listings, book properties, and manage bookings.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    repo: "https://github.com/parthdevaliya12/Airbnb-Clone",
    live: "https://esvio.vercel.app",
    featured: true,
    icon: Building2,
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconColor: "text-amber-400",
  },
  {
    name: "TeleMart – TV Shopping",
    type: "E-Commerce Platform",
    description: "A complete TV Selling / E-Commerce Website built using Django and SQLite. Includes an Admin Panel to manage products, categories, and orders.",
    stack: ["Django", "SQLite", "JavaScript", "Bootstrap"],
    repo: "https://github.com/parthdevaliya12/TeleMart-TV-Django",
    live: "",
    featured: false,
    icon: Tv,
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    iconColor: "text-blue-400",
  },
  {
    name: "AirWell – AC Shopping System",
    type: "E-Commerce Platform",
    description: "This project includes product listing, customer management, cart system, and an admin panel to manage products and orders effortlessly.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    repo: "https://github.com/parthdevaliya12/AirWell-AC-PHP",
    live: "",
    featured: false,
    icon: Wind,
    gradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
    iconColor: "text-cyan-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 bg-ink overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Selected <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A showcase of my recent engineering efforts, focusing on fluid interfaces and robust backend architectures.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className={`premium-glass-card group overflow-hidden ${project.featured ? 'lg:col-span-2 grid lg:grid-cols-2' : 'flex flex-col'}`}
              >
                
                {/* Icon Container */}
                <div className={`relative overflow-hidden p-8 flex items-center justify-center bg-gradient-to-br ${project.gradient} border-b border-white/5 ${project.featured ? 'lg:border-b-0 lg:border-r min-h-[280px]' : 'h-48'}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />
                  
                  <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                    <div className={`p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md ${project.iconColor} group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 shadow-xl`}>
                      <IconComponent size={44} className="stroke-[1.75]" />
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className={`p-8 lg:p-10 flex flex-col justify-center relative ${!project.featured ? 'flex-grow' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="relative z-10">
                    <span className="text-xs font-semibold text-secondary mb-3 uppercase tracking-wider block">
                      {project.type}
                    </span>
                    
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    
                    <p className="text-muted leading-relaxed mb-8 text-sm md:text-base">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 text-xs font-medium text-white/90 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors">
                          <Github size={18} />
                          Source Code
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-secondary transition-colors">
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/parthdevaliya12"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
          >
            Explore all on GitHub
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
