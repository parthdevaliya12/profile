import { Github, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/parthdevaliya12", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/parthdevaliya12", icon: Linkedin },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-ink overflow-hidden pt-20 pb-10">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[200px] w-[500px] rounded-full bg-primary/5 blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="group flex items-center gap-3 font-display text-xl font-bold text-white transition-colors"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-primary text-white shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-transform duration-300 group-hover:scale-110">
              <span className="font-mono text-sm font-black">&lt;/&gt;</span>
            </span>
            parth<span className="text-primary">.</span>dev
          </a>

          {/* Social Links */}
          <ul className="flex items-center gap-4">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-muted hover:text-white transition-all duration-300 hover:border-white/30"
          >
            <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted/70">
            © {year} Parth Gajjar. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted/70 flex items-center gap-1.5">
            Crafted with <span className="text-primary animate-pulse">♥</span> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
