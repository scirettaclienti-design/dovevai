import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar = ({ onOpenHowItWorks }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 1 }} // Appear after preloader
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 9990,
                padding: scrolled ? '15px 0' : '30px 0',
                background: scrolled ? 'rgba(255, 255, 255, 0.75)' : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
                transition: 'all 0.4s ease'
            }}
        >
            <div className="luxury-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: '700', letterSpacing: '-1px', color: '#1a1a1a' }}>
                    Dove<span style={{ color: '#f37854' }}>VAI</span>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <button
                        onClick={onOpenHowItWorks}
                        style={{
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            color: '#1a1a1a',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#f37854'}
                        onMouseLeave={(e) => e.target.style.color = '#1a1a1a'}
                    >
                        Come Funziona
                    </button>

                    <a
                        href="#register"
                        style={{
                            fontSize: '0.85rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            color: '#f37854',
                            border: '1px solid rgba(243, 120, 84, 0.3)',
                            padding: '8px 20px',
                            borderRadius: '2px',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(243, 120, 84, 0.1)';
                            e.target.style.boxShadow = '0 0 15px rgba(243, 120, 84, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.boxShadow = 'none';
                        }}
                    >
                        Accedi alla Lista
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
