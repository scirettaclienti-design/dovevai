import { motion } from 'framer-motion';
import { Send, Lock } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const FinalCTA = () => {
    const phoneNumber = "393476498357";
    const message = `Buongiorno,
richiedo l’accesso alla lista riservata per l’evento DoveVAI del 21.

Nome: 
Azienda: 
Settore (Hotel / Tour Operator / Agenzia / Altro): 

Confermo la mia presenza.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const handleWhatsAppAccess = (e) => {
        e.preventDefault();
        window.location.href = whatsappUrl;
    };

    return (
        <section id="register" style={{ padding: '120px 0 100px', textAlign: 'center', background: '#050505', borderTop: '1px solid #111' }}>
            <div className="luxury-container">
                <SectionWrapper>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '15px', fontWeight: '700', letterSpacing: '-1px' }}>
                        Selezioniamo solo realtà che vogliono crescere.
                    </h2>
                    <p style={{ color: '#d4af37', marginBottom: '60px', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        Non è un evento informativo. È un tavolo strategico.
                    </p>

                    <motion.a
                        href={whatsappUrl}
                        onClick={handleWhatsAppAccess}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        className="cta-button"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '15px',
                            background: '#0a0a0a',
                            border: '1px solid #d4af37',
                            color: '#fff',
                            padding: '25px 60px',
                            minWidth: '350px',
                            borderRadius: '2px',
                            fontSize: '1.2rem',
                            fontWeight: '500',
                            letterSpacing: '1px',
                            textDecoration: 'none',
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer'
                        }}
                    >
                        <Lock size={18} color="#d4af37" />
                        ACCEDI ALLA LISTA RISERVATA
                        <div className="hover-fill"></div>
                    </motion.a>

                    <div style={{ marginTop: '20px', color: '#888', fontSize: '0.9rem', fontWeight: '300', letterSpacing: '0.5px' }}>
                        Apri WhatsApp, inserisci <span style={{ color: '#fff', fontWeight: '500' }}>Nome e Azienda</span>, invia.
                    </div>

                    <p style={{ marginTop: '40px', fontSize: '0.75rem', color: '#444', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        *L'accettazione della richiesta è soggetta a conferma della segreteria.
                    </p>
                </SectionWrapper>
            </div>

            <style>{`
                .cta-button .hover-fill {
                    position: absolute;
                    top: 0; left: 0; width: 0%; height: 100%;
                    background: #d4af37;
                    z-index: -1;
                    transition: width 0.4s ease;
                }
                .cta-button:hover .hover-fill {
                    width: 100%;
                }
                .cta-button:hover {
                    color: #000 !important;
                }
                .cta-button:hover svg {
                    stroke: #000 !important;
                }
            `}</style>
        </section>
    );
};

export default FinalCTA;
