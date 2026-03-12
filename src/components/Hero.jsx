import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            gsap.fromTo(textRef.current.children,
                { opacity: 0, y: 30, filter: 'blur(10px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.5, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
            );
        }
    }, []);

    return (
        <section style={{ height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>

            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(circle at center, #1a1a24 0%, #000 100%)',
                zIndex: -2
            }}></div>

            <motion.div
                style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    opacity: 0.4,
                    zIndex: -1,
                    backgroundImage: 'url("https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=2000")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(50%) contrast(120%)'
                }}
            >
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(to top, #000 0%, transparent 100%)' }}></div>
            </motion.div>

            <div className="luxury-container" style={{ textAlign: 'center', zIndex: 1, width: '100%', paddingTop: '80px' }}>
                <div ref={textRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <h1
                        className="text-gradient-gold"
                        style={{
                            fontSize: 'clamp(5rem, 15vw, 12rem)',
                            textTransform: 'uppercase',
                            letterSpacing: '-5px',
                            lineHeight: 0.9,
                            fontWeight: 800,
                            margin: 0,
                            textShadow: '0 20px 50px rgba(0,0,0,0.5)'
                        }}
                    >
                        DOVEVAI.
                    </h1>
                    <p
                        style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                            color: '#fff',
                            fontWeight: 300,
                            letterSpacing: '5px',
                            textTransform: 'uppercase',
                            margin: 0
                        }}
                    >
                        The AI Travel Platform
                    </p>
                    <p
                        style={{
                            fontSize: '1.2rem',
                            color: '#888',
                            maxWidth: '600px',
                            marginTop: '20px',
                            lineHeight: 1.6
                        }}
                    >
                        Scorri per scoprire come stiamo ridefinendo l'esplorazione globale attraverso intelligenza artificiale e connessione umana reale.
                    </p>
                </div>
            </div>

            <motion.div
                style={{ position: 'absolute', bottom: '50px', left: '50%', x: '-50%' }}
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, #d4af37, transparent)' }}></div>
            </motion.div>
        </section>
    );
};

export default Hero;
