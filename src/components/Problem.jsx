import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const AnimatedNumber = ({ end, suffix = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        } else {
            setCount(0);
        }
    }, [isInView, end]);

    return <span ref={ref}>{count}{suffix}</span>;
}

const Problem = () => {
    const stats = [
        {
            number: 30,
            suffix: '%',
            label: "Margine Recuperato",
            detail: "Zero commissioni OTA. Il profitto resta a te."
        },
        {
            number: 100,
            suffix: '%',
            label: "Traffico Diretto",
            detail: "Nessun intermediario tra te e il cliente."
        },
        {
            number: 40,
            suffix: '%',
            label: "Crescita Automatica",
            detail: "Motore AI predittivo che lavora H24.",
            highlight: true
        }
    ];

    return (
        <section style={{ padding: '120px 0', position: 'relative', background: '#080808' }}>
            <div className="luxury-container" style={{ position: 'relative', zIndex: 1 }}>
                <SectionWrapper>
                    <h2 style={{ textAlign: 'center', marginBottom: '80px', fontSize: '2.5rem', fontWeight: '300', color: '#888' }}>
                        LA <span style={{ color: '#fff', fontWeight: 'bold' }}>SOLUZIONE DEFINITIVA</span>
                    </h2>
                </SectionWrapper>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
                            className="glass-panel" // Changed to use new CSS class
                            style={{
                                padding: '50px 30px',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'transform 0.4s ease'
                            }}
                        >
                            <div style={{
                                fontSize: '4rem',
                                fontWeight: '700',
                                color: stat.highlight ? '#d4af37' : '#fff',
                                lineHeight: 1,
                                marginBottom: '10px',
                                position: 'relative', zIndex: 2
                            }}>
                                <AnimatedNumber end={stat.number} suffix={stat.suffix} />
                            </div>
                            <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px', position: 'relative', zIndex: 2 }}>{stat.label}</h3>
                            <p style={{ color: '#888', fontSize: '0.95rem', position: 'relative', zIndex: 2 }}>{stat.detail}</p>

                            <div className="hover-glow"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                .glass-panel:hover {
                    transform: translateY(-10px);
                }
                .glass-panel:hover .hover-glow {
                    opacity: 1;
                }
                .hover-glow {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: radial-gradient(circle at center, rgba(212, 175, 55, 0.05), transparent 70%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                    z-index: 1;
                }
            `}</style>
        </section>
    );
};

export default Problem;
