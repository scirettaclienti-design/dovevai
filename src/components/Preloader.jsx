import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const Preloader = ({ isLoading, setIsLoading }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2200);
        return () => clearTimeout(timer);
    }, [setIsLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
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
                        background: '#fdfbf7', // Light ivory background
                        pointerEvents: 'all'
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
                                color: '#1a1a1a', // Dark text for light theme
                                marginBottom: '20px',
                                position: 'relative'
                            }}
                        >
                            Dove<span style={{ color: '#f37854' }}>VAI</span>
                        </motion.div>

                        <div style={{ width: '200px', height: '2px', background: 'rgba(243, 120, 84, 0.2)', overflow: 'hidden', borderRadius: '2px' }}>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.8, ease: "easeInOut" }}
                                style={{
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, #f37854, #f5a75d)',
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
