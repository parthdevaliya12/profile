import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "relative flex items-center justify-between px-6 h-16 rounded-2xl transition-all duration-300",
            scrolled
              ? "glass shadow-2xl border-white/10"
              : "bg-transparent border-transparent"
          )}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#home");
            }}
            className="group flex items-center gap-2 font-display text-xl font-bold text-white z-50"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Code2 size={20} />
            </div>
            <span className="tracking-tight">
              Parth<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1 font-body text-sm font-medium">
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
                      "relative px-4 py-2 rounded-full transition-colors duration-300 z-10 block",
                      isActive ? "text-white" : "text-muted hover:text-white"
                    )}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-white/10 rounded-full z-0 border border-white/5"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4 z-50">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#contact");
              }}
              className="relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-primary px-5 font-body text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 hover:shadow-primary/30 active:scale-95"
            >
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-primary opacity-0 hover:opacity-100 transition-opacity duration-300 z-0" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden relative z-50 p-2 -mr-2 text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-20 left-4 right-4 glass rounded-2xl overflow-hidden md:hidden border border-white/10 shadow-2xl flex flex-col p-4 origin-top"
            >
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => {
                  const isActive = active === link.href;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick(link.href);
                        }}
                        className={cn(
                          "block px-4 py-3 rounded-xl transition-all duration-200 font-medium",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
                <li className="mt-4">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick("#contact");
                    }}
                    className="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-transform active:scale-95 shadow-lg shadow-primary/20"
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
