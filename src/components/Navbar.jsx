import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href) => {
    setActive(href);
    setOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
        className={cn(
          "pointer-events-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sm:py-4 transition-all duration-700",
          scrolled
            ? "bg-ink/80 backdrop-blur-2xl border-b border-gold/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        )}
      >
        
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className="group flex items-center gap-3 relative z-50"
        >
          <div className="relative h-10 w-10 rounded-full overflow-hidden border border-gold/20 group-hover:border-gold/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(200,169,96,0.2)]">
            <img src="/logo.png" alt="PA Logo" className="h-full w-full object-cover scale-150" />
          </div>
          <span className="font-display text-lg font-semibold text-white/90 tracking-wide group-hover:text-gold transition-colors duration-300">
            Parth<span className="text-gold">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className={cn(
                    "relative px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 block uppercase",
                    isActive ? "text-gold" : "text-muted hover:text-white/80"
                  )}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-gradient-to-r from-gold-dark via-gold to-gold-light rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3 relative z-50">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#contact");
            }}
            className="btn-gold inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold"
          >
            Hire Me
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 text-white/80 hover:text-gold hover:border-gold/40 transition-all"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="pointer-events-auto fixed inset-0 top-0 bg-ink/98 backdrop-blur-xl z-40 lg:hidden flex flex-col justify-center"
          >
            <ul className="flex flex-col items-center gap-2 px-8">
              {NAV_LINKS.map((link, i) => {
                const isActive = active === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="w-full max-w-sm"
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(link.href);
                      }}
                      className={cn(
                        "block px-6 py-4 rounded-xl text-center font-display text-2xl font-medium transition-all duration-300",
                        isActive
                          ? "text-gold bg-gold/5 border border-gold/10"
                          : "text-white/50 hover:text-white/80"
                      )}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-sm mt-6"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick("#contact");
                  }}
                  className="btn-gold block text-center px-8 py-4 rounded-xl text-lg font-semibold"
                >
                  Hire Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      
    </header>
  );
}
