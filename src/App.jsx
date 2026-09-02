import { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load sections below the fold
const About = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Certificate = lazy(() => import("./components/Certificate"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading fallback
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="h-6 w-6 animate-spin rounded-full border-2 border-gold/20 border-t-gold" />
  </div>
);

// Scroll Progress Bar
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress" style={{ width: `${progress}%` }} />
  );
}



export default function App() {
  return (
    <div className="bg-ink min-h-screen font-body text-white/90">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Education />
          <Skills />
          <Projects />
          <Certificate />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-20 bg-ink" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
