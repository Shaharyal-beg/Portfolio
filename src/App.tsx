import { Suspense, lazy, useEffect, useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { CursorGlow } from '@/components/animations/CursorGlow';
import { ScrollProgress } from '@/components/animations/ScrollProgress';

/* Below-the-fold sections are code-split so the hero paints fast. */
const About = lazy(() => import('@/components/sections/About').then((m) => ({ default: m.About })));
const Skills = lazy(() => import('@/components/sections/Skills').then((m) => ({ default: m.Skills })));
const Experience = lazy(() => import('@/components/sections/Experience').then((m) => ({ default: m.Experience })));
const Projects = lazy(() => import('@/components/sections/Projects').then((m) => ({ default: m.Projects })));
const Certificates = lazy(() => import('@/components/sections/Certificates').then((m) => ({ default: m.Certificates })));
const Education = lazy(() => import('@/components/sections/Education').then((m) => ({ default: m.Education })));
const TechStack = lazy(() => import('@/components/sections/TechStack').then((m) => ({ default: m.TechStack })));
const Testimonials = lazy(() => import('@/components/sections/Testimonials').then((m) => ({ default: m.Testimonials })));
const Contact = lazy(() => import('@/components/sections/Contact').then((m) => ({ default: m.Contact })));

/** Simple page-load entrance: fades the whole app in once mounted. */
function usePageEntrance() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return ready;
}

export default function App() {
  const ready = usePageEntrance();

  return (
    <div
      className="relative min-h-screen bg-bg text-white transition-opacity duration-700"
      style={{ opacity: ready ? 1 : 0 }}
    >
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <CursorGlow />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certificates />
          <Education />
          <TechStack />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
