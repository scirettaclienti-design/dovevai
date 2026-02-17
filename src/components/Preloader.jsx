import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }} // Global fade out for the entire preloader container
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }} // Smooth fade duration
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        zIndex: 10001,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        background: '#000', // moved background here for simpler fade
                    }}
                >
                    <motion.div
                        exit={{ opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.5 } }} // Elements fade out slightly faster/earlier
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                textShadow: ['0 0 0px #000', '0 0 30px rgba(212,175,55,0.5)', '0 0 0px #000']
                            }}
                            transition={{ duration: 2 }}
                            style={{
                                fontSize: 'clamp(3rem, 5vw, 4rem)',
                                fontWeight: '700',
                                letterSpacing: '-2px',
                                color: '#fff',
                                marginBottom: '20px',
                                position: 'relative'
                            }}
                        >
                            Dove<span style={{ color: '#0070f3' }}>VAI</span>
                        </motion.div>

                        <div style={{ width: '200px', height: '2px', background: '#333', overflow: 'hidden', borderRadius: '2px' }}>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.8, ease: "easeInOut" }}
                                style={{
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, #d4af37, #f3e5ab)',
                                }}
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            style={{
                                marginTop: '20px',
                                fontSize: '0.8rem',
                                letterSpacing: '4px',
                                color: '#666',
                                textTransform: 'uppercase',
                                fontFamily: "'Outfit', sans-serif"
                            }}
                        >
                            Premium Experience
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
