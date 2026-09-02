import { motion } from "framer-motion";
import { Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-ink relative overflow-hidden">
      {/* Gold top divider */}
      <div className="absolute top-0 left-0 w-full gold-divider" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">

        {/* Logo + Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <div className="h-8 w-8 rounded-full overflow-hidden border border-gold/15">
            <img src="/logo.png" alt="PA Logo" className="h-full w-full object-cover scale-150" />
          </div>
          <p className="text-muted text-sm font-medium flex items-center gap-1.5">
            © {currentYear} Parth Devaliya. Built with 
            <Heart size={12} className="text-gold/60 fill-gold/40" />
          </p>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <a href="https://github.com/parthdevaliya12" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-white/[0.02] border border-gold/8 flex items-center justify-center text-muted hover:text-gold hover:bg-gold/5 hover:border-gold/15 transition-all" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href="https://linkedin.com/in/parthdevaliya12" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-white/[0.02] border border-gold/8 flex items-center justify-center text-muted hover:text-gold hover:bg-gold/5 hover:border-gold/15 transition-all" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
        </motion.div>

      </div>
    </footer>
  );
}
