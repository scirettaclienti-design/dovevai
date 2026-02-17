import { motion } from 'framer-motion';
import { Smartphone, MessageCircle, Sparkles } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const AiDrivenEra = () => {
    const innovations = [
        {
            icon: <Smartphone size={40} />,
            title: "Funnel Prenotazioni Dirette",
            desc: "Sganciati dalle OTA. Porta il cliente dalla scoperta alla conferma senza intermediari."
        },
        {
            icon: <MessageCircle size={40} />,
            title: "Automazioni WhatsApp",
            desc: "Risposte istantanee 24/7. Gestisci richieste, preventivi e upsell mentre dormi."
        },
        {
            icon: <Sparkles size={40} />,
            title: "Esperienze Personalizzate AI",
            desc: "Offri percorsi su misura che emozionano e aumentano il valore percepito del soggiorno."
        }
    ];

    return (
        <section style={{ padding: '120px 0', position: 'relative', background: 'radial-gradient(circle at 50% 50%, #151515 0%, #050505 100%)' }}>
            <div className="luxury-container">
                <SectionWrapper>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '20px' }}>
                            L'ERA <span style={{ color: '#0070f3', textShadow: '0 0 25px rgba(0,112,243,0.3)' }}>AI-DRIVEN</span>
                        </h2>
                        <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, transparent, #d4af37, transparent)', margin: '0 auto' }}></div>
                    </div>
                </SectionWrapper>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    {innovations.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10, boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}
                            style={{
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                borderRadius: '12px',
                                padding: '50px 30px',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                color: '#d4af37',
                                marginBottom: '25px',
                                filter: 'drop-shadow(0 0 15px rgba(212,175,55,0.2))'
                            }}>
                                {item.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: '#fff' }}>{item.title}</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>{item.desc}</p>

                            {/* Hover decorative element */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent, #0070f3, transparent)',
                                opacity: 0.5
                            }}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AiDrivenEra;
