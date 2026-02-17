import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const Speaker = () => {
    return (
        <section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden', background: '#050505' }}>
            <div className="luxury-container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <SectionWrapper>
                    <div style={{
                        border: '1px solid rgba(255,255,255,0.05)',
                        borderTop: '1px solid rgba(212, 175, 55, 0.3)',
                        display: 'inline-block',
                        padding: '80px 50px',
                        borderRadius: '2px',
                        background: 'linear-gradient(180deg, rgba(20,20,20,0.8), rgba(0,0,0,0.95))',
                        backdropFilter: 'blur(20px)',
                        maxWidth: '800px',
                        position: 'relative'
                    }}>
                        {/* Authority Badges */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
                            <span style={badgeStyle}>Founder AI-SPACE</span>
                            <span style={badgeStyle}>Modular Systems Architect</span>
                            <span style={badgeStyle}>International Projects</span>
                        </div>

                        <motion.h3
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: false }}
                            style={{ fontSize: '4rem', fontFamily: '"Great Vibes", cursive', color: '#fff', marginBottom: '10px' }}
                        >
                            Ivano Sciretta
                        </motion.h3>

                        <div style={{
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                            color: '#d4af37',
                            marginBottom: '40px'
                        }}>
                            Visionary & Tech Entrepreneur
                        </div>

                        <p style={{ margin: '0 auto', color: '#999', lineHeight: '1.8', fontSize: '1.1rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                            "L'innovazione nel turismo non è introdurre tecnologia ovunque.<br />È renderla invisibile, perché l'unica cosa che conta è l'esperienza umana."
                        </p>

                        <div style={{ marginTop: '50px', borderTop: '1px solid #222', paddingTop: '30px', display: 'flex', justifyContent: 'center', opacity: 0.6 }}>
                            <div style={{ marginRight: '30px' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>10+</div>
                                <div style={{ fontSize: '0.7rem' }}>ANNI ESPERIENZA</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>50+</div>
                                <div style={{ fontSize: '0.7rem' }}>SISTEMI INTEGRATI</div>
                            </div>
                        </div>

                    </div>
                </SectionWrapper>
            </div>

            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }}></div>
        </section>
    );
};

const badgeStyle = {
    fontSize: '0.7rem',
    color: '#888',
    border: '1px solid #333',
    padding: '5px 10px',
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
};

export default Speaker;
