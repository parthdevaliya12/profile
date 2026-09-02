import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight, Building2, Tv, Wind } from "lucide-react";

const PROJECTS = [
  {
    name: "Esvio — Property Booking Platform",
    type: "Marketplace Platform",
    description: "A modern, responsive property listing and booking web application built using the MERN Stack. Users can list properties, browse listings, book properties, and manage bookings seamlessly.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    repo: "https://github.com/parthdevaliya12/Airbnb-Clone",
    live: "https://esvio.vercel.app",
    featured: true,
    icon: Building2,
  },
  {
    name: "TeleMart — TV Shopping",
    type: "E-Commerce Platform",
    description: "A complete TV Selling / E-Commerce Website built using Django and SQLite. Includes an Admin Panel to manage products, categories, and orders.",
    stack: ["Django", "SQLite", "JavaScript", "Bootstrap"],
    repo: "https://github.com/parthdevaliya12/TeleMart-TV-Django",
    live: "",
    featured: false,
    icon: Tv,
  },
  {
    name: "AirWell — AC Shopping System",
    type: "E-Commerce Platform",
    description: "This project includes product listing, customer management, cart system, and an admin panel to manage products and orders effortlessly.",
    stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    repo: "https://github.com/parthdevaliya12/AirWell-AC-PHP",
    live: "",
    featured: false,
    icon: Wind,
  },
];

// 3D Tilt card for projects
function ProjectTiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transform, transition: "transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)" }}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 lg:py-36 bg-ink overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none transform-gpu" />
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="section-tag">Portfolio</span>
          <h2 className="section-heading">
            Selected <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="text-muted text-base lg:text-lg max-w-2xl mx-auto mt-2">
            A showcase of my recent engineering efforts, focusing on fluid interfaces and robust backend architectures.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={project.featured ? 'lg:col-span-2' : ''}
              >
                <ProjectTiltCard
                  className={`premium-glass-card group overflow-hidden ${project.featured ? 'grid lg:grid-cols-2' : 'flex flex-col'}`}
                >
                  {/* Icon Area */}
                  <div className={`relative overflow-hidden p-8 flex items-center justify-center border-b border-gold/5 ${project.featured ? 'lg:border-b-0 lg:border-r min-h-[280px]' : 'h-48'}`}
                    style={{ background: 'linear-gradient(135deg, rgba(200,169,96,0.04) 0%, rgba(15,14,19,0.9) 50%, rgba(200,169,96,0.02) 100%)' }}
                  >
                    {/* Grid pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,96,0.04)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
                    
                    <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                      <div className="p-5 rounded-2xl bg-gold/5 border border-gold/10 text-gold/60 group-hover:text-gold group-hover:bg-gold/10 group-hover:border-gold/20 group-hover:shadow-[0_0_30px_rgba(200,169,96,0.15)] transition-all duration-500">
                        <IconComponent size={40} className="stroke-[1.5]" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-7 lg:p-9 flex flex-col justify-center relative ${!project.featured ? 'flex-grow' : ''}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative z-10">
                      <span className="text-[11px] font-semibold text-gold/60 uppercase tracking-[0.15em] block mb-3">
                        {project.type}
                      </span>
                      
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white/90 mb-4 group-hover:text-gold transition-colors duration-300">
                        {project.name}
                      </h3>
                      
                      <p className="text-muted leading-relaxed mb-7 text-sm">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-7">
                        {project.stack.map((tech) => (
                          <span key={tech} className="gold-chip text-[11px]">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-5 mt-auto">
                        {project.repo && (
                          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-gold transition-colors">
                            <Github size={16} />
                            Source
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-gold transition-colors">
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </ProjectTiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/parthdevaliya12"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gold/15 text-gold/80 font-medium text-sm hover:bg-gold/5 hover:border-gold/25 hover:text-gold transition-all"
          >
            Explore all on GitHub
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
