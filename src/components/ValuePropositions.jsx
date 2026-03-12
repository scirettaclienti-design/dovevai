import { motion } from 'framer-motion';
import { Shield, FastForward, Cpu, MapPin, Map, Star, Award, Navigation } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const valueProps = [
    {
        id: 'guide',
        category: 'Marketplace Professionale',
        title: 'Formule per le GUIDE',
        icon: <Shield size={32} color="var(--accent-orange)" />,
        description: "L'obiettivo è la sicurezza totale e l'eliminazione dei 'salti' fuori piattaforma.",
        features: [
            {
                title: 'Modalità A: Prenotazione Tour',
                desc: 'L\'utente seleziona un tour. Conferma sicura e link di pagamento via chat.',
                highlight: 'Garanzia DoveVai Safe'
            },
            {
                title: 'Modalità B: Tour su Misura',
                desc: 'L\'utente lancia un\'idea (es. "Street food a Testaccio"). Le guide in zona offrono preventivi.',
                highlight: 'Bidding Dinamico'
            },
            {
                title: 'Recensioni 2-Way',
                desc: 'Al termine, utente e guida si valutano a vicenda per mantenere alta la qualità.',
                highlight: 'Community Verificata'
            }
        ]
    },
    {
        id: 'utenti',
        category: 'DNA del Viaggiatore',
        title: 'Formule per gli UTENTI',
        icon: <Cpu size={32} color="var(--accent-orange)" />,
        description: "La fidelizzazione tramite una personalizzazione algoritmica profonda.",
        features: [
            {
                title: 'Il Modello 10 Free',
                desc: '10 Tour AI gratuiti per sbloccare il valore e iniziare a "nutrire" l\'algoritmo.',
                highlight: 'Apprendimento Veloce'
            },
            {
                title: 'Apprendimento (DNA Mapping)',
                desc: 'L\'AI analizza tappe, tempi di sosta e preferenze per profilare l\'utente.',
                highlight: 'Profilazione Silenziosa'
            },
            {
                title: 'L\'Evoluzione Adattiva',
                desc: 'Dall\'11° tour, non più percorsi standard ma itinerari sartoriali basati sulle abitudini.',
                highlight: 'Itinerari Sartoriali'
            }
        ]
    },
    {
        id: 'attivita',
        category: 'Contextual Commerce',
        title: 'Formule per le ATTIVITÀ',
        icon: <MapPin size={32} color="var(--accent-orange)" />,
        description: "Portiamo clienti fisici all'attività commerciale in modo tracciabile e garantito.",
        features: [
            {
                title: 'Match Contestuale',
                desc: 'Non appare in tutti i tour, ma solo nel tour giusto per l\'utente giusto. L\'AI inserisce la tua attività quando c\'è massima propensione.',
                highlight: 'Conversione Estrema'
            },
            {
                title: 'Il Livello Premium (Top Visual)',
                desc: 'Icona 3D aurata sulla mappa rigenerata, priorità nei suggerimenti AI e dashboard insights.',
                highlight: 'Signature Icon & AI Priority'
            },
            {
                title: 'La Fee Pay-per-Claim',
                desc: 'Paghi una commissione esclusiva solo quando un coupon generato dall\'app viene effettivamente consumato in sede.',
                highlight: 'Zero Costi Fissi'
            },
            {
                title: 'Visualizzazione e Riscatto',
                desc: 'Il cliente clicca su "Riscatta", genera il codice e tu lo confermi tramite App/Dashboard.',
                highlight: 'Conversione Reale'
            }
        ]
    }
];

const ValuePropositions = () => {
    return (
        <section id="values" style={{ padding: '120px 0', background: 'transparent', position: 'relative' }}>
            <div className="luxury-container">
                <SectionWrapper>
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '20px', letterSpacing: '-1px' }}>
                            Un ecosistema dove <span style={{ color: 'var(--accent-orange)', fontStyle: 'italic' }}>tutti vincono.</span>
                        </h2>
                        <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                            Abbiamo progettato DoveVai per allineare gli incentivi di guide professionali, turisti esigenti e attività commerciali locali in un unico flusso di valore generato dall'Intelligenza Artificiale.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                        {valueProps.map((prop, index) => (
                            <motion.div
                                key={prop.id}
                                initial={{ opacity: 0, y: 150, scale: 0.85, rotateX: 20 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                                viewport={{ once: false, margin: "-150px" }}
                                transition={{ duration: 1.2, delay: index * 0.1, ease: [0.175, 0.885, 0.32, 1.275] }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                                    gap: '60px',
                                    background: 'rgba(255, 255, 255, 0.7)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(243, 120, 84, 0.1)',
                                    borderRadius: '24px',
                                    padding: '50px',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Decorative Gradient */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, width: '30%', height: '100%',
                                    background: 'radial-gradient(circle at 0% 50%, rgba(243, 120, 84, 0.05), transparent 70%)',
                                    zIndex: 0, pointerEvents: 'none'
                                }}/>

                                <div style={{ position: 'relative', zIndex: 1, perspective: '1000px' }}>
                                    <div style={{ 
                                        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                        width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(243, 120, 84, 0.1)', 
                                        marginBottom: '30px' 
                                    }}>
                                        {prop.icon}
                                    </div>
                                    <div style={{ color: 'var(--accent-orange)', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
                                        {prop.category}
                                    </div>
                                    <h3 style={{ fontSize: '2.5rem', marginBottom: '20px', lineHeight: '1.1', color: 'var(--text-primary)' }}>
                                        {prop.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                        {prop.description}
                                    </p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative', zIndex: 1 }}>
                                    {prop.features.map((feature, fIdx) => (
                                        <motion.div 
                                            key={fIdx} 
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: false, margin: "-50px" }}
                                            transition={{ duration: 0.6, delay: 0.3 + (fIdx * 0.15), ease: "easeOut" }}
                                            style={{ display: 'flex', gap: '20px' }}
                                        >
                                            <div style={{ marginTop: '5px' }}>
                                                <Star size={18} color="var(--accent-orange)" />
                                            </div>
                                            <div>
                                                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                                                    {feature.title}
                                                </h4>
                                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '10px' }}>
                                                    {feature.desc}
                                                </p>
                                                <span style={{ 
                                                    display: 'inline-block', padding: '4px 12px', background: 'rgba(243, 120, 84, 0.15)', 
                                                    border: '1px solid rgba(243, 120, 84, 0.3)', borderRadius: '30px', 
                                                    color: 'var(--accent-orange)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px'
                                                }}>
                                                    {feature.highlight}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
};

export default ValuePropositions;
