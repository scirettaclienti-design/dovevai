import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const mapY = useTransform(scrollY, [0, 500], [0, 150]);

    // Magnetic Button Logic
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 }); // Movement intensity
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <section style={{ height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>

            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
                zIndex: -2
            }}></div>

            <motion.div
                style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    y: mapY,
                    opacity: 0.1,
                    zIndex: -1,
                    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_Ben_Clock_Tower_and_Houses_of_Parliament%2C_London_%28Close-up%29.jpg/800px-Big_Ben_Clock_Tower_and_Houses_of_Parliament%2C_London_%28Close-up%29.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%) blur(4px) contrast(150%)'
                }}
            >
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(to top, #050505 10%, transparent 100%)' }}></div>
            </motion.div>

            <div className="luxury-container" style={{ textAlign: 'center', zIndex: 1, width: '100%', maxWidth: '1000px', paddingTop: '60px' }}>

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontSize: '0.8rem',
                        letterSpacing: '3px',
                        color: '#d4af37',
                        textTransform: 'uppercase',
                        marginBottom: '20px',
                        borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
                        display: 'inline-block',
                        paddingBottom: '5px'
                    }}
                >
                    Evento Riservato – Hospitality & Tourism
                </motion.div>

                <motion.div style={{ position: 'relative', overflow: 'hidden', marginBottom: '30px' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-gradient-gold" // From index.css
                        style={{
                            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
                            textTransform: 'uppercase',
                            letterSpacing: '-2px',
                            lineHeight: 1.1,
                            textShadow: '0 10px 40px rgba(0,0,0,0.8)',
                            position: 'relative',
                            zIndex: 2,
                            // Overriding gradient from class for specific hero feel if needed, but class handles it well
                        }}
                    >
                        Il Turismo Sta Cambiando.
                    </motion.h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    style={{
                        fontSize: '1.25rem',
                        maxWidth: '800px',
                        margin: '0 auto 60px',
                        color: '#a3a3a3',
                        fontWeight: '300',
                        lineHeight: '1.6'
                    }}
                >
                    Per hotel, B&B, tour operator, agenzie e guide che vogliono aumentare <span style={{ color: '#fff', borderBottom: '1px solid #d4af37' }}>prenotazioni dirette</span> e marginalità.
                </motion.p>

                <motion.div
                    style={{ position: 'relative', x, y }}
                    ref={ref}
                    onMouseMove={handleMouse}
                    onMouseLeave={reset}
                    animate={{ x, y }}
                    transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                >
                    <a href="#register" className="premium-btn">
                        Blocca il tuo posto
                        <div className="btn-flare"></div>
                    </a>
                </motion.div>
            </div>

            <motion.div
                style={{ position: 'absolute', bottom: '40px', left: '50%', x: '-50%' }}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, #d4af37, transparent)', margin: '0 auto 10px' }}></div>
            </motion.div>

            <style>{`
                .premium-btn {
                    display: inline-block;
                    padding: 22px 55px;
                    font-size: 1rem;
                    font-weight: 600;
                    color: #000;
                    background: linear-gradient(45deg, #d4af37, #f3e5ab);
                    border-radius: 2px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 0 30px rgba(212, 175, 55, 0.2);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    text-decoration: none;
                    z-index: 10;
                }
                .premium-btn:hover {
                    box-shadow: 0 0 60px rgba(212, 175, 55, 0.6);
                }
                .btn-flare {
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent);
                    animation: flare 3.5s infinite ease-in-out;
                }
                @keyframes flare {
                    0% { left: -100%; }
                    20% { left: 100%; }
                    100% { left: 100%; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
