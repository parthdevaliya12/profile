import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load sections below the fold for better performance
const Education = lazy(() => import("./components/Education"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Fallback loader while components are fetching
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
  </div>
);

export default function App() {
  return (
    <div className="bg-ink min-h-screen font-body text-white selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-32 bg-ink" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
