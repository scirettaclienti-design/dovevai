import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from "framer-motion";
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Floating3DElements from './components/Floating3DElements';
import AnimatedLogoHero from './components/AnimatedLogoHero';
import CircuitBorders from './components/CircuitBorders';
import Problem from './components/Problem';
import TargetAudience from './components/TargetAudience';
import AiDrivenEra from './components/AiDrivenEra';
import Solution from './components/Solution';
import Speaker from './components/Speaker';
import EventDetails from './components/EventDetails';
import ValuePropositions from './components/ValuePropositions';
import FinalCTA from './components/FinalCTA';
import EventFooter from './components/EventFooter';
import HorizontalSlider from './components/HorizontalSlider';
import HowItWorksModal from './components/HowItWorksModal';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Only init Lenis after loading finishes, or keep it running. 
    // We'll keep it running to not break existing hooks.
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // Critical: Disable hijack on mobile touch
      touchMultiplier: 2,
      syncTouch: true // Syncs touch scroll with native scroll perfectly
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
    <div className="smooth-wrapper" style={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
      <Preloader isLoading={isLoading} setIsLoading={setIsLoading} />
      
      {/* 
        Floating elements must be placed before content, 
        with extreme negative z-index to stay true background 
      */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -10 }}>
          <Floating3DElements />
      </div>

      <Navbar onOpenHowItWorks={() => setIsHowItWorksOpen(true)} />
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
          background: "linear-gradient(90deg, var(--accent-orange), var(--accent-peach))",
          transformOrigin: "0%",
          zIndex: 10000,
          boxShadow: '0 0 10px var(--glow-orange)'
        }}
      />

      <CircuitBorders />
      
      {/* The main content hierarchy */}
      <main style={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent', paddingBottom: '10vh' }}>
          <AnimatedLogoHero animationReady={!isLoading} />
          <HorizontalSlider />
          <ValuePropositions />
          <FinalCTA />
      </main>
      
      <EventFooter />
      
      <HowItWorksModal 
        isOpen={isHowItWorksOpen} 
        onClose={() => setIsHowItWorksOpen(false)} 
      />
    </div>
  );
}

export default App;
