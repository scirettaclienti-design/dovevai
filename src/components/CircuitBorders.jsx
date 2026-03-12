import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const CircuitBorders = () => {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // We can use SVG path lengths and map scroll progress to draw them
    
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden'
        }}>
            {/* SVG Filters for Supreme Aesthetic Glow */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="circuitGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    <linearGradient id="energyCore" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fff" />
                        <stop offset="50%" stopColor="#fdfbf7" />
                        <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                    <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--accent-orange)" />
                        <stop offset="50%" stopColor="var(--accent-peach)" />
                        <stop offset="100%" stopColor="var(--accent-orange)" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Left Circuit Fiber */}
            <svg 
                style={{ position: 'absolute', left: '2vw', top: 0, width: '100px', height: '100%' }}
                viewBox="0 0 100 1000" 
                preserveAspectRatio="none"
            >
                {/* Static Background Rail */}
                <path 
                    d="M 50 0 V 200 H 20 V 400 H 50 V 600 H 80 V 800 H 50 V 1000"
                    fill="none"
                    stroke="rgba(243, 120, 84, 0.08)"
                    strokeWidth="3"
                    strokeLinejoin="round"
                />
                
                {/* Flowing Energy Outline (tied to scroll) */}
                <motion.path 
                    d="M 50 0 V 200 H 20 V 400 H 50 V 600 H 80 V 800 H 50 V 1000"
                    fill="none"
                    stroke="url(#orangeGradient)"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    filter="url(#circuitGlow)"
                    style={{ pathLength: smoothProgress, opacity: 0.8 }}
                />

                {/* Pulsing Nodes */}
                <motion.circle cx="50" cy="200" r="5" fill="var(--accent-peach)" filter="url(#circuitGlow)"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.rect x="15" y="395" width="10" height="10" rx="2" fill="var(--accent-orange)" filter="url(#circuitGlow)"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <circle cx="50" cy="600" r="4" fill="var(--accent-peach)" />
                <rect x="76" y="800" width="8" height="8" fill="var(--accent-orange)" />
            </svg>

            {/* Right Circuit Fiber */}
            <svg 
                style={{ position: 'absolute', right: '2vw', top: 0, width: '100px', height: '100%' }}
                viewBox="0 0 100 1000" 
                preserveAspectRatio="none"
            >
                <path 
                    d="M 50 0 V 150 H 80 V 350 H 50 V 550 H 20 V 750 H 50 V 1000"
                    fill="none"
                    stroke="rgba(243, 120, 84, 0.08)"
                    strokeWidth="3"
                    strokeLinejoin="round"
                />
                <motion.path 
                    d="M 50 0 V 150 H 80 V 350 H 50 V 550 H 20 V 750 H 50 V 1000"
                    fill="none"
                    stroke="url(#orangeGradient)"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    filter="url(#circuitGlow)"
                    style={{ pathLength: smoothProgress, opacity: 0.8 }}
                />
                
                {/* Circuit Nodes */}
                <motion.circle cx="50" cy="150" r="5" fill="var(--accent-peach)" filter="url(#circuitGlow)"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.rect x="75" y="345" width="10" height="10" rx="2" fill="var(--accent-orange)" filter="url(#circuitGlow)"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
                <circle cx="50" cy="550" r="4" fill="var(--accent-peach)" />
                <rect x="16" y="750" width="8" height="8" fill="var(--accent-orange)" />
            </svg>
        </div>
    );
};

export default CircuitBorders;
