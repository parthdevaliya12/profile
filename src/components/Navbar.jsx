import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Code2, MessageSquare } from "lucide-react";
import { cn } from "../lib/utils";
import { useTheme } from "../hooks/useTheme";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none flex justify-center">
      
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "pointer-events-auto flex items-center justify-between p-2 rounded-full transition-all duration-500 w-full lg:w-auto",
          scrolled
            ? "bg-paper/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-ink-border"
            : "bg-paper/40 backdrop-blur-md shadow-lg border border-transparent"
        )}
      >
        
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className="group flex items-center gap-3 pl-3 pr-4 py-2 relative z-50"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-secondary text-white shadow-md group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-shadow">
            <Code2 size={18} />
          </div>
          <span className="font-display text-lg font-bold text-[var(--theme-white)] tracking-tight">Parth</span>
        </a>

        {/* Desktop Links (Pill Style) */}
        <ul className="hidden lg:flex items-center gap-1 mx-4">
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
                    "relative px-5 py-2.5 text-sm font-semibold transition-colors z-10 block rounded-full",
                    isActive ? "text-[var(--theme-active-text)]" : "text-muted hover:text-[var(--theme-white)]"
                  )}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-[var(--theme-active-pill)] rounded-full z-0 shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2 pr-2 relative z-50">
          <button
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 hover:bg-ink/10 text-[var(--theme-white)] transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-2 pr-2">
            <button
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-[var(--theme-white)] transition-colors"
                aria-label="Toggle Theme"
            >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
                className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--theme-active-pill)] text-[var(--theme-active-text)] shadow-md"
                onClick={() => setOpen((o) => !o)}
            >
                {open ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 bg-paper/95 backdrop-blur-xl rounded-3xl border border-ink-border shadow-2xl p-6 lg:hidden overflow-hidden"
          >
            <ul className="flex flex-col gap-2 relative z-10">
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
                        "block px-5 py-4 rounded-2xl transition-all duration-200 font-bold",
                        isActive
                          ? "bg-[var(--theme-active-pill)] text-[var(--theme-active-text)] shadow-md"
                          : "text-muted hover:bg-black/5 dark:hover:bg-white/5 hover:text-[var(--theme-white)]"
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      
    </header>
  );
}
