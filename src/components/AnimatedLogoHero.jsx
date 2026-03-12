import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import logoSrc from '../assets/DoveVai_Logo_Original.png';

const piecesData = [
    // shatter
    { id: 0, x: 265, y: 291, w: 7, h: 7, shatter: true },
    { id: 1, x: 246, y: 295, w: 8, h: 8, shatter: true },
    { id: 2, x: 827, y: 297, w: 12, h: 12, shatter: true },
    { id: 3, x: 214, y: 299, w: 14, h: 14, shatter: true },
    { id: 4, x: 863, y: 302, w: 8, h: 7, shatter: true },
    { id: 6, x: 261, y: 310, w: 9, h: 8, shatter: true },
    { id: 8, x: 840, y: 318, w: 15, h: 16, shatter: true },
    { id: 9, x: 804, y: 328, w: 27, h: 27, shatter: true },
    { id: 11, x: 251, y: 333, w: 14, h: 14, shatter: true },
    { id: 12, x: 851, y: 348, w: 17, h: 17, shatter: true },
    { id: 15, x: 907, y: 356, w: 24, h: 24, shatter: true },
    { id: 23, x: 102, y: 441, w: 15, h: 15, shatter: true },
    { id: 24, x: 154, y: 464, w: 14, h: 15, shatter: true },
    { id: 25, x: 97, y: 472, w: 7, h: 7, shatter: true },
    { id: 26, x: 136, y: 481, w: 10, h: 9, shatter: true },
    { id: 27, x: 113, y: 487, w: 8, h: 8, shatter: true },
    // core
    { id: 5, x: 102, y: 307, w: 105, h: 128, shatter: false },
    { id: 7, x: 211, y: 311, w: 40, h: 40, shatter: false },
    { id: 10, x: 183, y: 332, w: 46, h: 46, shatter: false },
    { id: 13, x: 700, y: 353, w: 115, h: 121, shatter: false },
    { id: 14, x: 153, y: 354, w: 108, h: 168, shatter: false },
    { id: 16, x: 307, y: 360, w: 100, h: 114, shatter: false },
    { id: 17, x: 505, y: 371, w: 97, h: 103, shatter: false },
    { id: 18, x: 414, y: 387, w: 91, h: 89, shatter: false },
    { id: 19, x: 594, y: 387, w: 90, h: 89, shatter: false },
    { id: 20, x: 810, y: 387, w: 85, h: 89, shatter: false },
    { id: 21, x: 907, y: 389, w: 24, h: 86, shatter: false },
    { id: 22, x: 117, y: 416, w: 60, h: 59, shatter: false }
];

const AnimatedLogoHero = ({ animationReady = false }) => {
    return (
        <section style={{ height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            
            {/* Background pattern similar to references (light warm gradient) */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(circle at center, #ffffff 0%, #fdfbf7 100%)',
                zIndex: -2
            }}></div>

            <div className="luxury-container" style={{ textAlign: 'center', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                
                {/* Visually hidden h1 for SEO semantics */}
                <h1 className="visually-hidden" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
                    Dove Vai
                </h1>

                {/* CV Rigged Pixel-Shatter Logo Container */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '900px', aspectRatio: '1024/824', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {piecesData.map(p => {
                        // Math logic to accurately map precise sprite locations inside response containers.
                        const leftPct = (p.x / 1024) * 100;
                        const topPct = (p.y / 824) * 100;
                        const widthPct = (p.w / 1024) * 100;
                        const heightPct = (p.h / 824) * 100;
                        
                        const imgLeft = -(p.x / p.w) * 100;
                        const imgTop = -(p.y / p.h) * 100;
                        const imgWidth = (1024 / p.w) * 100;
                        const imgHeight = (824 / p.h) * 100;

                        // Pseudo-random generation seeded by ID for deterministic explosion
                        const seed = p.id;
                        const explodeX = (seed % 3 - 1) * 300 + (seed * 15 % 100);
                        const explodeY = (seed % 4 - 1.5) * 200 + (seed * 11 % 100);
                        const explodeRot = (seed * 47) % 360;

                        const initialState = p.shatter ? { opacity: 0, x: explodeX, y: explodeY, rotate: explodeRot, scale: 0.2 } : { opacity: 0, filter: 'blur(10px)', scale: 1.1 };
                        const finalState = { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: 'blur(0px)' };

                        return (
                            <motion.div 
                                key={p.id}
                                initial={initialState}
                                animate={animationReady ? finalState : initialState}
                                transition={{ 
                                    duration: p.shatter ? 5.5 : 3.5, 
                                    delay: p.shatter ? 0.3 + (seed % 5) * 0.4 : 2.5, 
                                    ease: [0.22, 1, 0.36, 1] 
                                }}
                                style={{
                                    position: 'absolute',
                                    left: `${leftPct}%`,
                                    top: `${topPct}%`,
                                    width: `${widthPct}%`,
                                    height: `${heightPct}%`,
                                    overflow: 'hidden'
                                }}
                            >
                                <img 
                                    src={logoSrc} 
                                    alt="DoveVai Logo Fragment"
                                    style={{ 
                                        position: 'absolute', 
                                        left: `${imgLeft}%`, 
                                        top: `${imgTop}%`, 
                                        width: `${imgWidth}%`,
                                        height: `${imgHeight}%`, 
                                        maxWidth: 'none',
                                        pointerEvents: 'none'
                                    }} 
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Subtext Reveal */}
                <motion.div
                    initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
                    animate={animationReady ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(12px)' }}
                    transition={{ duration: 1.6, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '-150px' // Pull it closer to the logo base
                    }}
                >
                    <p style={{
                        fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                        color: '#333',
                        fontWeight: 400,
                        letterSpacing: '0.02em',
                        margin: 0,
                        textAlign: 'center'
                    }}>
                        The Future of Travel is Here
                    </p>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#777',
                        fontWeight: 300,
                        marginTop: '10px',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>
                        Connect with Local Guides through AI
                    </p>
                </motion.div>
            </div>

            {/* Scroll indicator integrated with circuit theme */}
            <motion.div
                style={{ position: 'absolute', bottom: '40px', left: '50%', x: '-50%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-orange)' }}></div>
                <div style={{ width: '2px', height: '40px', background: 'linear-gradient(to bottom, var(--accent-orange), transparent)' }}></div>
            </motion.div>
        </section>
    );
};

export default AnimatedLogoHero;
