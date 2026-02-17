import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from "framer-motion";
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import TargetAudience from './components/TargetAudience';
import AiDrivenEra from './components/AiDrivenEra';
import Solution from './components/Solution';
import Speaker from './components/Speaker';
import EventDetails from './components/EventDetails';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="smooth-wrapper">
      <Preloader />
      <Navbar />
      <div className="noise-overlay"></div>
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #d4af37, #f3e5ab)",
          transformOrigin: "0%",
          zIndex: 10000,
          boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)'
        }}
      />

      <ParticlesBackground />
      <Hero />
      <Problem />
      <TargetAudience />
      <AiDrivenEra />
      <Solution />
      <Speaker />
      <EventDetails />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
