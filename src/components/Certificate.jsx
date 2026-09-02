import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Award, Cloud, Shield, Code2, Database, GitBranch, Brain, BarChart3, BookOpen } from "lucide-react";

const CERTIFICATES = [
  { title: "MERN Stack App Development", icon: Code2 },
  { title: "Introduction to Cyber Security", icon: Shield },
  { title: "Introduction to Cloud Computing", icon: Cloud },
  { title: "Hands-On Learning On Hibernate", icon: Database },
  { title: "Advanced Javascript", icon: Code2 },
  { title: "30-Days SQL Micro Course", icon: Database },
  { title: "Git and Github Profile", icon: GitBranch },
  { title: "Introduction to Artificial Intelligence", icon: Brain },
  { title: "Preparing For Job Market Success", icon: BarChart3 },
];

// 3D Tilt for certificate cards
function CertTiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;
    setTransform(`perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transform, transition: "transform 0.3s cubic-bezier(0.03, 0.98, 0.52, 0.99)" }}
    >
      {children}
    </div>
  );
}

export default function Certificate() {
  return (
    <section id="certificate" className="relative py-20 sm:py-28 lg:py-36 bg-ink overflow-hidden">
      
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[120px] pointer-events-none transform-gpu" />
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-20 text-center px-2"
        >
          <span className="section-tag">Validation</span>
          <h2 className="section-heading">
            Licenses & <span className="text-gradient-gold">Certifications</span>
          </h2>
          <p className="text-muted text-base lg:text-lg max-w-2xl mx-auto mt-2">
            Continuous learning and skill validation through industry-recognized courses.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATES.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
              >
                <CertTiltCard className="premium-glass-card group flex items-center gap-5 p-6 cursor-default">
                  {/* Icon */}
                  <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/20 group-hover:shadow-[0_0_20px_rgba(200,169,96,0.1)] transition-all duration-500">
                    <Icon size={22} className="text-gold/50 group-hover:text-gold transition-colors duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-medium text-white/80 group-hover:text-white/95 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Award size={12} className="text-gold/40" />
                      <span className="text-[10px] text-muted uppercase tracking-wider">Certified</span>
                    </div>
                  </div>
                </CertTiltCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
