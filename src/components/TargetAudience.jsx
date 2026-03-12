import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { BedDouble, Plane, Map, Building2 } from 'lucide-react';

const TargetAudience = () => {
    const targets = [
        { icon: <BedDouble size={32} />, title: "Hotel & Resort", subtitle: "Aumenta i margini diretti" },
        { icon: <Plane size={32} />, title: "Tour Operator", subtitle: "Viaggi creati su misura dall'AI" },
        { icon: <Map size={32} />, title: "Guide Locali", subtitle: "Scala le tue competenze" },
        { icon: <Building2 size={32} />, title: "Brand", subtitle: "Nuove esperienze per i clienti" }
    ];

    return (
        <section style={{ padding: '100px 0', background: '#080808' }}>
            <div className="luxury-container">
                <SectionWrapper>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                        {targets.map((target, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                whileHover={{ scale: 1.05, background: 'linear-gradient(to bottom, #1a1a1a, #0d0d0d)' }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: '30px 20px',
                                    background: 'linear-gradient(to bottom, #111, #0a0a0a)',
                                    border: '1px solid #222',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                                }}
                            >
                                <div style={{
                                    color: '#d4af37',
                                    marginBottom: '15px',
                                    padding: '15px',
                                    background: 'rgba(212, 175, 55, 0.05)',
                                    borderRadius: '50%',
                                    border: '1px solid rgba(212, 175, 55, 0.2)'
                                }}>
                                    {target.icon}
                                </div>
                                <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '5px' }}>{target.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: '#666' }}>{target.subtitle}</p>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
};

export default TargetAudience;
