import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-ink-panel relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted text-sm flex items-center gap-1.5 font-medium"
        >
          © {currentYear} All Rights Reserved | Parth Gajjar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          <a href="https://github.com/parthdevaliya12" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-white/10 transition-all hover:scale-110" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/parthdevaliya12" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-[#0A66C2] hover:bg-white/10 hover:border-[#0A66C2]/30 transition-all hover:scale-110" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </motion.div>

      </div>
    </footer>
  );
}
