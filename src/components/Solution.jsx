import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const Solution = () => {
    return (
        <section style={{ padding: '120px 0', background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)', overflow: 'hidden' }}>
            <div className="luxury-container">
                <SectionWrapper>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '80px' }}>
                        <div style={{
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                            color: '#d4af37',
                            marginBottom: '20px'
                        }}>
                            Piattaforma Next-Gen
                        </div>

                        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '30px', fontWeight: '700', letterSpacing: '-2px' }}>
                            Dove<span style={{ color: '#0070f3' }}>VAI</span>
                        </h2>

                        <p style={{ maxWidth: '700px', fontSize: '1.4rem', color: '#e5e5e5', lineHeight: '1.6' }}>
                            <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#888' }}>Non è solo tecnologia.</span><br />
                            È il modo in cui farai innamorare i tuoi ospiti prima ancora che arrivino.
                        </p>
                    </div>
                </SectionWrapper>

                {/* Smartphone Mockup with dramatic entrance */}
                <motion.div
                    initial={{ y: 200, opacity: 0, rotateX: 30 }}
                    whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                    viewport={{ once: false, margin: "-100px" }} // Re-animates on scroll
                    transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
                    style={{
                        perspective: '1000px',
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative'
                    }}
                >
                    {/* Glow behind phone */}
                    <div style={{ position: 'absolute', width: '300px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(0, 112, 243, 0.2), transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}></div>

                    <motion.div
                        whileHover={{ y: -10, rotateY: 5 }}
                        style={{
                            width: '320px',
                            height: '650px',
                            background: '#111',
                            borderRadius: '40px',
                            border: '8px solid #333',
                            boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.7), inset 0 0 20px rgba(0,0,0,0.8)',
                            position: 'relative',
                            zIndex: 1,
                            overflow: 'hidden',
                            transformStyle: 'preserve-3d'
                        }}
                    >
                        {/* Dynamic Island / Notch */}
                        <div style={{ position: 'absolute', top: '15px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '20px', background: '#000', borderRadius: '15px', zIndex: 10 }}></div>

                        {/* Screen Content */}
                        <div style={{ width: '100%', height: '100%', overflow: 'hidden', background: '#fff', position: 'relative' }}>
                            {/* Simulated App Demo Animation */}
                            <div className="app-screen-animation">
                                {/* Header */}
                                <div style={{ height: '250px', background: "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop')", backgroundSize: 'cover', position: 'relative' }}>
                                    <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Suite Imperiale</div>
                                        <div style={{ fontSize: '0.9rem' }}>Vista Colosseo</div>
                                    </div>
                                </div>
                                {/* Body */}
                                <div style={{ padding: '20px' }}>
                                    <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', marginBottom: '20px', paddingBottom: '10px' }}>
                                        {['Esperienze', 'Ristoranti', 'Spa'].map((tag, t) => (
                                            <div key={t} style={{ padding: '8px 15px', background: '#f0f0f0', borderRadius: '20px', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>{tag}</div>
                                        ))}
                                    </div>
                                    <div style={{ height: '8px', width: '60%', background: '#eee', borderRadius: '4px', marginBottom: '10px' }}></div>
                                    <div style={{ height: '8px', width: '90%', background: '#eee', borderRadius: '4px', marginBottom: '10px' }}></div>
                                    <div style={{ height: '8px', width: '80%', background: '#eee', borderRadius: '4px', marginBottom: '30px' }}></div>

                                    <div style={{ padding: '15px', background: '#0070f3', borderRadius: '12px', color: 'white', textAlign: 'center', fontWeight: '600', boxShadow: '0 5px 15px rgba(0,112,243,0.3)' }}>
                                        Prenota Esperienza Esclusiva
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <style>{`
                .app-screen-animation {
                    animation: scrollApp 6s ease-in-out infinite alternate;
                }
                @keyframes scrollApp {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-40px); }
                }
            `}</style>
        </section>
    );
};

export default Solution;
