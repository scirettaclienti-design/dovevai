import { motion } from 'framer-motion';
import { Send, Lock } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const FinalCTA = () => {
    const phoneNumber = "393476498357";
    const message = `Buongiorno,
richiedo l’accesso alla lista riservata con priorità per l'applicazione DoveVai.

Nome: 
Azienda: `;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const handleWhatsAppAccess = (e) => {
        e.preventDefault();
        window.location.href = whatsappUrl;
    };

    return (
        <section id="register" style={{ padding: '120px 0 100px', textAlign: 'center', background: 'transparent', borderTop: '1px solid rgba(243, 120, 84, 0.1)' }}>
            <div className="luxury-container">
                <SectionWrapper>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '15px', fontWeight: '700', letterSpacing: '-1px' }}>
                        Entra nella Lista Riservata.
                    </h2>
                    <p style={{ color: 'var(--accent-orange)', marginBottom: '60px', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        Ottieni l'accesso prioritario quando l'app sarà operativa.
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
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--accent-orange)',
                            color: 'var(--text-primary)',
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
                        <Lock size={18} color="var(--accent-orange)" />
                        ACCEDI ALLA LISTA RISERVATA
                        <div className="hover-fill"></div>
                    </motion.a>

                    <div style={{ marginTop: '20px', color: '#888', fontSize: '0.9rem', fontWeight: '300', letterSpacing: '0.5px' }}>
                        Apri WhatsApp, inserisci <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Nome e Azienda</span>, invia.
                    </div>

                    <p style={{ marginTop: '40px', fontSize: '0.75rem', color: '#444', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        *L'accettazione della richiesta garantirà la priorità d'accesso al lancio.
                    </p>
                </SectionWrapper>
            </div>

            <style>{`
                @keyframes pulseGlow {
                    0% { box-shadow: 0 0 0 0 rgba(243, 120, 84, 0.4); }
                    70% { box-shadow: 0 0 20px 10px rgba(243, 120, 84, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(243, 120, 84, 0); }
                }
                .cta-button {
                    animation: pulseGlow 2.5s infinite;
                }
                .cta-button .hover-fill {
                    position: absolute;
                    top: 0; left: 0; width: 0%; height: 100%;
                    background: var(--accent-orange);
                    z-index: -1;
                    transition: width 0.4s ease;
                }
                .cta-button:hover .hover-fill {
                    width: 100%;
                }
                .cta-button:hover {
                    color: #fff !important;
                    animation: none; /* Stop pulsing on hover */
                    box-shadow: 0 0 30px rgba(243, 120, 84, 0.4);
                }
                .cta-button:hover svg {
                    stroke: #fff !important;
                }
            `}</style>
        </section>
    );
};

export default FinalCTA;
