import { motion } from "framer-motion";
import { Award } from "lucide-react";

import cc from "../assets/cc.png";
import cs from "../assets/cs.png";
import mern from "../assets/mern.png";
import hibernate from "../assets/hibernate.png";
import javascript from "../assets/javascript.jpg";
import gitandgithub from "../assets/git_and_github.jpg";
import ai from "../assets/ai.jpg";
import sql from "../assets/sql.jpg";
import marketing from "../assets/marketing.jpg";

const CERTIFICATES = [
  { img: mern, title: "MERN Stack App Development" },
  { img: cs, title: "Introduction to Cyber Security" },
  { img: cc, title: "Introduction to Cloud Computing" },
  { img: hibernate, title: "Hands-On Learning On Hibernate" },
  { img: javascript, title: "Advanced Javascript" },
  { img: sql, title: "30-Days SQL Micro Course" },
  { img: gitandgithub, title: "Git and Github Profile" },
  { img: ai, title: "Introduction to Artificial Intelligence" },
  { img: marketing, title: "Preparing For Job Market Success" },
];

export default function Certificate() {
  return (
    <section id="certificate" className="relative py-32 bg-ink overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none transform-gpu" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
            Validation
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Licenses & <span className="text-gradient-primary">Certifications</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Continuous learning and skill validation through industry-recognized courses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" style={{ perspective: 1000 }}>
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05 }}
              className="premium-glass-card group flex flex-col cursor-pointer"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-ink/40 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100">
                    <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        <Award size={24} />
                    </div>
                </div>
              </div>
              
              <div className="p-5 text-center flex-grow flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors line-clamp-2 relative z-10">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
