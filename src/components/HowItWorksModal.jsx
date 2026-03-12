import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, Map, Globe, ShieldCheck, Check, Clock, Calendar, MessageCircle, Navigation, MapPin } from 'lucide-react';

const steps = [
    {
        id: 'scoperta',
        number: '01',
        subtitle: 'SCOPERTA',
        color: '#4f46e5', // Indigo/Blue
        title: 'Scegli la tua città',
        desc: 'Apri DoveVai e digita dove vuoi andare. La mappa si anima istantaneamente con decine di esperienze autentiche curate da chi vive davvero quei luoghi.',
        badges: [
            { icon: <Map size={14} />, text: 'Mappa live' },
            { icon: <MapPin size={14} />, text: 'Geo-rilevamento' },
            { icon: <StarIcon size={14} color="#eab308" />, text: 'Curato dagli esperti' }
        ],
        btnText: 'Prossimo',
    },
    {
        id: 'pianificazione',
        number: '02',
        subtitle: 'PIANIFICAZIONE',
        color: '#10b981', // Emerald/Green
        title: "L'AI costruisce il tuo percorso",
        desc: "In pochi secondi l'intelligenza artificiale analizza i tuoi interessi, il meteo, i tuoi orari e crea un itinerario con orari, prezzi e consigli su misura per te.",
        badges: [
            { icon: <Globe size={14} color="#f43f5e" />, text: 'AI personalizzata' },
            { icon: <Clock size={14} />, text: 'Tempo reale' },
            { icon: <ShieldCheck size={14} color="#eab308" />, text: 'Prezzi inclusi' }
        ],
        btnText: 'Prossimo',
    },
    {
        id: 'connessione',
        number: '03',
        subtitle: 'CONNESSIONE',
        color: '#f97316', // Orange
        title: 'Incontra la tua guida',
        desc: 'Scegli tra decine di guide locali verificate. Chatta direttamente, personalizza ogni dettaglio del tour e conferma il tuo appuntamento in pochi tap.',
        badges: [
            { icon: <Check size={14} color="#10b981" />, text: 'Guide verificate' },
            { icon: <MessageCircle size={14} />, text: 'Chat diretta' },
            { icon: <Calendar size={14} color="#a855f7" />, text: 'Prenotazione istantanea' }
        ],
        btnText: 'Prossimo',
    },
    {
        id: 'esperienza',
        number: '04',
        subtitle: 'ESPERIENZA',
        color: '#a855f7', // Purple
        title: "Vivi l'avventura in diretta",
        desc: "Il giorno del tour apri la navigazione live. Segui il percorso, ascolta le storie della guida su ogni luogo e crea ricordi che nessuna audioguida ti darà mai.",
        badges: [
            { icon: <Navigation size={14} color="#4f46e5" />, text: 'Navigazione live' },
            { icon: <Mic size={14} />, text: 'Storie in diretta' },
            { icon: <Camera size={14} color="#eab308" />, text: 'Momenti da salvare' }
        ],
        btnText: 'Inizia Gratis ora',
    }
];

// Helper Icons
function StarIcon(props) { return <svg {...props} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>; }
function Mic(props) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>; }
function Camera(props) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>; }


const HowItWorksModal = ({ isOpen, onClose }) => {
    const [currentStep, setCurrentStep] = useState(0);

    // Lock body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setCurrentStep(0);
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            onClose();
        }
    };
    
    const handlePrev = () => {
        if (currentStep > 0) setCurrentStep(prev => prev - 1);
    };

    const stepData = steps[currentStep];

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="how-modal-wrapper"
                style={{
                    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                    backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)',
                    zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '20px'
                }}
            >
                {/* Close Button Top Right */}
                <button onClick={onClose} style={{
                    position: 'absolute', top: '20px', right: '20px',
                    background: 'white', border: '1px solid #e5e7eb',
                    borderRadius: '50%', width: '45px', height: '45px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#444', cursor: 'pointer', zIndex: 10, transition: 'all 0.2s',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => { e.target.style.color='#000'; e.target.style.boxShadow='0 6px 16px rgba(0,0,0,0.1)'; }}
                onMouseLeave={(e) => { e.target.style.color='#444'; e.target.style.boxShadow='0 4px 12px rgba(0,0,0,0.05)'; }}
                >
                    <X size={20} />
                </button>

                {/* Main Modal Container */}
                <motion.div
                    initial={{ scale: 0.98, y: 10 }} animate={{ scale: 1, y: 0 }} transition={{ duration: 0.4, type: 'spring' }}
                    style={{
                        width: '100%', maxWidth: '1100px', height: 'auto', maxHeight: '90vh', minHeight: '600px',
                        background: '#ffffff', // Clean White Base
                        borderRadius: '24px', overflow: 'hidden',
                        display: 'flex', flexDirection: 'row',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
                        position: 'relative'
                    }}
                    className="how-modal-responsive"
                >
                    {/* Radial Glow tied to step color (very subtle on light theme) */}
                    <motion.div
                        animate={{ background: `radial-gradient(circle at 75% 50%, ${stepData.color}10 0%, transparent 60%)` }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
                    />

                    {/* LEFT COLUMN: Content */}
                    <div className="how-modal-left" style={{
                        flex: 1, padding: '50px', display: 'flex', flexDirection: 'column',
                        justifyContent: 'center', zIndex: 1, position: 'relative'
                    }}>
                        {/* Header Logo/Text */}
                        <div style={{ position: 'absolute', top: '30px', left: '50px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '24px', height: '24px', background: 'var(--accent-orange)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Globe size={14} color="white" />
                            </div>
                            <span style={{ color: '#1a1a1a', fontSize: '0.9rem', fontWeight: 600 }}>Come funziona DoveVai</span>
                        </div>

                        {/* Step Indicator */}
                        <div className="header-text" style={{ display: 'flex', alignItems: 'baseline', gap: '15px', marginBottom: '15px', marginTop: '40px' }}>
                            <motion.span 
                                key={stepData.number}
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                className="step-number"
                                style={{ fontSize: '3.5rem', fontWeight: 800, color: stepData.color, lineHeight: 1 }}
                            >
                                {stepData.number}
                            </motion.span>
                            <div>
                                <motion.div 
                                    key={stepData.subtitle}
                                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                                    className="step-subtitle"
                                    style={{ color: stepData.color, fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px' }}
                                >
                                    {stepData.subtitle}
                                </motion.div>
                                <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                                    {steps.map((_, i) => (
                                        <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: i === currentStep ? stepData.color : '#e5e7eb' }} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Title & Description */}
                        <AnimatePresence mode="wait">
                            <motion.div key={currentStep} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#1a1a1a', marginBottom: '20px', lineHeight: 1.1, fontWeight: 700, letterSpacing: '-0.5px' }}>
                                    {stepData.title}
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: '#666666', lineHeight: 1.6, maxWidth: '450px' }}>
                                    {stepData.desc}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Badges */}
                        <div className="badges-container" style={{ display: 'flex', gap: '10px', marginTop: '30px', flexWrap: 'wrap' }}>
                            <AnimatePresence mode="wait">
                                {stepData.badges.map((badge, idx) => (
                                    <motion.div
                                        key={`${currentStep}-${idx}`}
                                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 + (idx * 0.1) }}
                                        style={{
                                            padding: '8px 16px', background: '#f3f4f6',
                                            border: '1px solid #e5e7eb', borderRadius: '24px',
                                            color: '#374151', fontSize: '0.8rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px'
                                        }}
                                    >
                                        {badge.icon} {badge.text}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Actions */}
                        <div className="actions-container" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '50px' }}>
                            <button 
                                onClick={handlePrev}
                                disabled={currentStep === 0}
                                style={{
                                    width: '50px', height: '50px', borderRadius: '14px',
                                    background: '#f9fafb', border: '1px solid #e5e7eb',
                                    color: '#4b5563', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    cursor: currentStep === 0 ? 'not-allowed' : 'pointer', opacity: currentStep === 0 ? 0.4 : 1,
                                    transition: 'all 0.2s'
                                }}
                            >
                                <span style={{ transform: 'rotate(180deg)' }}>&#10140;</span>
                            </button>
                            
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleNext}
                                style={{
                                    background: `linear-gradient(135deg, ${stepData.color}, ${stepData.color}f0)`,
                                    color: '#fff', border: 'none',
                                    padding: '0 40px', height: '50px', borderRadius: '14px', fontSize: '1.05rem', fontWeight: 600,
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
                                    boxShadow: `0 10px 20px ${stepData.color}30`,
                                    transition: 'background 0.3s'
                                }}
                            >
                                {stepData.btnText} &#10140;
                            </motion.button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Visual/Mockup */}
                    <div className="how-modal-right" style={{
                        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1
                    }}>
                        {/* The Smartphone Mockup (Light Theme) */}
                        <div style={{
                                width: '280px', height: '580px', background: '#ffffff',
                                borderRadius: '40px', border: '8px solid #f3f4f6', // Silver edge
                                boxShadow: '0 30px 60px rgba(0,0,0,0.1), inset 0 0 0 1px #e5e7eb',
                                position: 'relative', overflow: 'hidden'
                            }}
                            className="phone-mockup-container"
                        >
                            {/* 'Dynamic Island' & Status Bar */}
                            <div style={{ position: 'absolute', top: 0, width: '100%', height: '30px', display: 'flex', justifyContent: 'center', zIndex: 100 }}>
                                <div style={{ marginTop: '10px', width: '80px', height: '22px', background: '#000', borderRadius: '12px' }} />
                                <div style={{ position: 'absolute', top: '12px', left: '20px', fontSize: '0.65rem', color: '#1a1a1a', fontWeight: 600 }}>9:41</div>
                                <div style={{ position: 'absolute', top: '12px', right: '20px', display: 'flex', gap: '3px' }}>
                                    <div style={{ width: '12px', height: '8px', border: '1px solid #1a1a1a', borderRadius: '2px', position: 'relative' }}><div style={{ position: 'absolute', inset: '1px', background: '#1a1a1a', width: '70%'} }/></div>
                                </div>
                            </div>

                            {/* Mockup Screens Content Container */}
                            <div style={{ width: '100%', height: '100%', paddingTop: '40px', position: 'relative', zIndex: 10 }}>
                                
                                <AnimatePresence mode="popLayout">
                                    
                                    {/* --- STEP 1: SCOPERTA (Nodes Map) --- */}
                                    {currentStep === 0 && (
                                        <motion.div key="step1" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ width: '100%', height: '100%', position: 'relative' }}>
                                            {/* Top Search Bar */}
                                            <div style={{ margin: '0 15px', background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: '20px', padding: '10px 15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: stepData.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Search size={10} color="white"/></div>
                                                <span style={{ color: '#444', fontSize: '0.8rem', flex: 1, fontWeight: 500 }}>Roma, Italia</span>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }}/>
                                            </div>

                                            {/* Map Nodes Layer */}
                                            <div style={{ position: 'relative', height: '400px', marginTop: '20px' }}>
                                                {/* Lines */}
                                                <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                                                    <motion.path d="M 140 100 Q 180 150 200 200 T 140 280" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.3, duration: 1 }} />
                                                    <motion.path d="M 60 180 Q 100 200 140 280" fill="none" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1 }} />
                                                </svg>
                                                {/* Nodes */}
                                                {[
                                                    { x: 140, y: 100, icon: "🏛️", label: 'Colosseo', active: true },
                                                    { x: 200, y: 200, icon: "🍝", label: 'Carbonara', delay: 0.4 },
                                                    { x: 60, y: 180, icon: "☕", label: 'Caffè', delay: 0.6 },
                                                    { x: 140, y: 280, icon: "🖼️", label: 'Museo', delay: 0.8 },
                                                ].map((node, i) => (
                                                    <motion.div key={i} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', delay: node.delay || 0.2 }}
                                                        style={{ position: 'absolute', top: node.y, left: node.x, transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                                        <div style={{ 
                                                            width: node.active ? '44px' : '34px', height: node.active ? '44px' : '34px', 
                                                            background: 'white', border: node.active ? `2px solid ${stepData.color}` : '1px solid #e5e7eb',
                                                            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: node.active ? '1.2rem' : '0.9rem',
                                                            boxShadow: node.active ? `0 8px 16px ${stepData.color}40` : '0 4px 6px rgba(0,0,0,0.05)', zIndex: node.active ? 10 : 1
                                                        }}>{node.icon}</div>
                                                        {node.active && <div style={{ background: stepData.color, color: 'white', fontSize: '0.6rem', padding: '3px 8px', borderRadius: '6px', marginTop: '6px', fontWeight: 600, boxShadow: `0 4px 8px ${stepData.color}40` }}>{node.label}</div>}
                                                    </motion.div>
                                                ))}
                                                {/* Active Pulse Ring */}
                                                <motion.div animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} style={{ position: 'absolute', top: 100, left: 140, width: '44px', height: '44px', transform: 'translate(-50%, -50%)', borderRadius: '50%', border: `2px solid ${stepData.color}` }} />
                                            </div>

                                            {/* Bottom Card */}
                                            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }} style={{ position: 'absolute', bottom: '20px', left: '15px', right: '15px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                                                <div style={{ width: '30px', height: '30px', background: '#f3f4f6', borderRadius: '8px', display:'flex', alignItems:'center', justifyContent:'center'}}><MapPin size={14} color={stepData.color}/></div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ color: '#1a1a1a', fontSize: '0.8rem', fontWeight: 700 }}>5 esperienze</div>
                                                    <div style={{ color: '#666', fontSize: '0.65rem' }}>Roma centro storico</div>
                                                </div>
                                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: stepData.color, display: 'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'12px'}}>&#10140;</div>
                                            </motion.div>
                                        </motion.div>
                                    )}

                                    {/* --- STEP 2: PIANIFICAZIONE (Itinerary List) --- */}
                                    {currentStep === 1 && (
                                        <motion.div key="step2" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ width: '100%', height: '100%', padding: '0 15px' }}>
                                            {/* Header */}
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <div style={{ width: '28px', height: '28px', background: stepData.color, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 8px ${stepData.color}40` }}><Globe size={14} color="white"/></div>
                                                    <div>
                                                        <div style={{ color: '#1a1a1a', fontSize: '0.8rem', fontWeight: 700 }}>AI DoveVai ✨</div>
                                                        <div style={{ color: '#666', fontSize: '0.6rem' }}>Itinerario Roma</div>
                                                    </div>
                                                </div>
                                                <div style={{ background: '#ecfdf5', color: '#10b981', border: '1px solid #a7f3d0', fontSize: '0.65rem', padding: '4px 8px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}><Check size={10}/> Pronto</div>
                                            </div>

                                            {/* List Items */}
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                {[
                                                    { time: '09:00', tag: 'START', title: 'Bar San Calisto', price: 'Gratis', icon: '☕' },
                                                    { time: '10:30', tag: 'CULTURA', title: 'Colosseo + Foro', price: '€18', icon: '🏛️' },
                                                    { time: '13:00', tag: 'PRANZO', title: 'Da Enzo al 29', price: '€28', icon: '🍝' },
                                                    { time: '15:30', tag: 'ARTE', title: 'Mercati di Traiano', price: '€15', icon: '🖼️' },
                                                    { time: '18:00', tag: 'SCENIC', title: 'Tramonto Gianicolo', price: 'Gratis', icon: '🌅' }
                                                ].map((item, i) => (
                                                    <motion.div key={i} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 + (i * 0.1) }}
                                                        style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '10px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                                                        <div style={{ fontSize: '1.2rem', background: '#f9fafb', border: '1px solid #f3f4f6', width: '32px', height: '32px', borderRadius: '8px', display:'flex', alignItems:'center', justifyContent:'center'}}>{item.icon}</div>
                                                        <div style={{ flex: 1 }}>
                                                            <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '2px' }}>
                                                                <span style={{ color: stepData.color, fontSize: '0.65rem', fontWeight: 700 }}>{item.time}</span>
                                                                <span style={{ color: '#4b5563', fontSize: '0.50rem', background: '#f3f4f6', padding: '2px 5px', borderRadius: '4px', fontWeight: 600 }}>{item.tag}</span>
                                                            </div>
                                                            <div style={{ color: '#1a1a1a', fontSize: '0.75rem', fontWeight: 600 }}>{item.title}</div>
                                                        </div>
                                                        <div style={{ color: '#6b7280', fontSize: '0.7rem', fontWeight: 500 }}>{item.price}</div>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Bottom Button */}
                                            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}
                                                style={{ position: 'absolute', bottom: '20px', left: '15px', right: '15px', background: stepData.color, borderRadius: '16px', padding: '14px', textAlign: 'center', color: 'white', fontSize: '0.85rem', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'8px', boxShadow: `0 8px 16px ${stepData.color}40` }}>
                                                <StarIcon size={14}/> Salva Itinerario
                                            </motion.div>
                                        </motion.div>
                                    )}

                                    {/* --- STEP 3: CONNESSIONE (Chat) --- */}
                                    {currentStep === 2 && (
                                        <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                            {/* Profile Header */}
                                            <div style={{ padding: '0 15px 15px', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#ffedd5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', overflow: 'hidden' }}>👩🏼</div>
                                                    <div>
                                                        <div style={{ color: '#1a1a1a', fontSize: '0.8rem', fontWeight: 700 }}>Giulia Romano</div>
                                                        <div style={{ color: '#666', fontSize: '0.65rem', display: 'flex', alignItems: 'center', gap: '2px' }}><StarIcon size={10} color="#eab308"/> 4.9 • 218 tour</div>
                                                    </div>
                                                </div>
                                                <MessageCircle size={18} color="#9ca3af"/>
                                            </div>

                                            {/* Chat Bubbles */}
                                            <div style={{ flex: 1, padding: '15px', display: 'flex', flexDirection: 'column', gap: '15px', overflow: 'hidden' }}>
                                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} style={{ alignSelf: 'flex-start', background: '#f3f4f6', border: '1px solid #e5e7eb', padding: '10px 14px', borderRadius: '14px 14px 14px 4px', maxWidth: '85%' }}>
                                                    <div style={{ color: '#1a1a1a', fontSize: '0.75rem', lineHeight: 1.4, fontWeight: 500 }}>Ciao! Sono Giulia 👋 Ho visto il tuo itinerario per Roma.</div>
                                                    <div style={{ color: '#9ca3af', fontSize: '0.55rem', marginTop: '4px', textAlign: 'right' }}>10:12</div>
                                                </motion.div>

                                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} style={{ alignSelf: 'flex-end', background: `linear-gradient(135deg, ${stepData.color}, #f97316)`, padding: '10px 14px', borderRadius: '14px 14px 4px 14px', maxWidth: '85%', boxShadow: `0 4px 8px ${stepData.color}30` }}>
                                                    <div style={{ color: 'white', fontSize: '0.75rem', lineHeight: 1.4, fontWeight: 500 }}>Perfetto! Sei disponibile sabato mattina?</div>
                                                    <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.55rem', marginTop: '4px', textAlign: 'right' }}>10:13</div>
                                                </motion.div>

                                                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.2 }} style={{ alignSelf: 'flex-start', background: '#f3f4f6', border: '1px solid #e5e7eb', padding: '10px 14px', borderRadius: '14px 14px 14px 4px', maxWidth: '85%' }}>
                                                    <div style={{ color: '#1a1a1a', fontSize: '0.75rem', lineHeight: 1.4, fontWeight: 500 }}>Sì! Ho uno slot libero dalle 9. Ti porto nei vicoli segreti di Trastevere 🌿</div>
                                                    <div style={{ color: '#9ca3af', fontSize: '0.55rem', marginTop: '4px', textAlign: 'right' }}>10:13</div>
                                                </motion.div>
                                                
                                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3 }} style={{ alignSelf: 'center', background: '#fff7ed', border: '1px solid #fdba74', padding: '8px 14px', borderRadius: '20px', width: '100%', marginTop: '10px' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                        <div style={{ width: '24px', height: '24px', background: stepData.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Check size={12} color="white"/></div>
                                                        <div>
                                                            <div style={{ color: '#9a3412', fontSize: '0.7rem', fontWeight: 700 }}>Tour Confermato</div>
                                                            <div style={{ color: '#c2410c', fontSize: '0.6rem', fontWeight: 500 }}>Sab 15 Feb - 09:00</div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </div>

                                            {/* Input Bar */}
                                            <div style={{ margin: '15px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '20px', padding: '10px 15px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                                                <span style={{ color: '#9ca3af', fontSize: '0.75rem', flex: 1 }}>Scrivi a Giulia...</span>
                                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: stepData.color, display: 'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'10px'}}>&#10140;</div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* --- STEP 4: ESPERIENZA (GPS) --- */}
                                    {currentStep === 3 && (
                                        <motion.div key="step4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ width: '100%', height: '100%', position: 'relative' }}>
                                            {/* Header */}
                                            <div style={{ padding: '0 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1a1a1a', fontSize: '0.8rem', fontWeight: 700 }}><Navigation size={14} color={stepData.color}/> Tour Live</div>
                                                <div style={{ color: '#666', fontSize: '0.65rem', fontWeight: 600 }}>2h 30m</div>
                                            </div>

                                            {/* Light Map Background (Subtle contours) */}
                                            <svg width="100%" height="100%" style={{ position: 'absolute', top: '50px', left: 0, opacity: 0.5 }}>
                                                 <path d="M 0 100 Q 100 80 280 120" fill="none" stroke="#f3f4f6" strokeWidth="15" strokeLinecap="round" />
                                                 <path d="M 50 0 Q 80 200 200 350" fill="none" stroke="#f3f4f6" strokeWidth="20" strokeLinecap="round" />
                                            </svg>

                                            {/* GPS Path Area */}
                                            <div style={{ position: 'absolute', top: '50px', left: 0, width: '100%', height: '350px' }}>
                                                <svg width="100%" height="100%" viewBox="0 0 200 350">
                                                    {/* Background muted path */}
                                                    <path d="M 40 300 Q 150 250 100 150 T 160 50" fill="none" stroke="#e5e7eb" strokeWidth="6" strokeLinecap="round" strokeDasharray="5 5" />
                                                    {/* Active animated path */}
                                                    <motion.path 
                                                        d="M 40 300 Q 150 250 100 150 T 160 50" 
                                                        fill="none" stroke={`url(#gradient-${currentStep})`} strokeWidth="6" strokeLinecap="round"
                                                        initial={{ pathLength: 0 }}
                                                        animate={{ pathLength: 0.6 }} // Stops halfway
                                                        transition={{ duration: 2.5, ease: 'easeOut' }}
                                                    />
                                                    <defs>
                                                        <linearGradient id={`gradient-${currentStep}`} x1="0" y1="1" x2="0" y2="0">
                                                            <stop offset="0%" stopColor="#8b5cf6" />
                                                            <stop offset="100%" stopColor={stepData.color} />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                {/* Point markers */}
                                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }} style={{ position: 'absolute', top: '300px', left: '40px', width: '12px', height: '12px', background: '#d8b4fe', borderRadius: '50%', transform: 'translate(-50%, -50%)', border: '2px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}} />
                                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.5 }} style={{ position: 'absolute', top: '150px', left: '100px', width: '18px', height: '18px', background: 'white', borderRadius: '50%', transform: 'translate(-50%, -50%)', border: `4px solid ${stepData.color}`, boxShadow: `0 4px 12px ${stepData.color}60`}} />
                                                
                                                {/* Pulse rings on active point */}
                                                <motion.div animate={{ scale: [1, 2.5], opacity: [0.6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ position: 'absolute', top: '150px', left: '100px', width: '18px', height: '18px', background: stepData.color, borderRadius: '50%', transform: 'translate(-50%, -50%)'}} />
                                            </div>

                                            {/* Bottom Next Stop Card */}
                                            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }} style={{ position: 'absolute', bottom: '20px', left: '15px', right: '15px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '20px', padding: '15px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}>
                                                <div style={{ width: '40px', height: '40px', background: '#f3f4f6', borderRadius: '12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize: '1.2rem'}}>🏛️</div>
                                                <div style={{ flex: 1 }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                                        <span style={{ color: stepData.color, fontSize: '0.6rem', fontWeight: 800, letterSpacing: '1px' }}>PROSSIMA TAPPA</span>
                                                        <span style={{ color: '#6b7280', fontSize: '0.6rem', fontWeight: 600 }}>3 min a piedi</span>
                                                    </div>
                                                    <div style={{ color: '#1a1a1a', fontSize: '0.85rem', fontWeight: 700 }}>Mercati di Traiano</div>
                                                </div>
                                                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: stepData.color, display: 'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'12px', boxShadow: `0 4px 8px ${stepData.color}40`}}>&#10140;</div>
                                            </motion.div>
                                        </motion.div>
                                    )}

                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <style>{`
                @media (max-width: 900px) {
                    .how-modal-wrapper {
                        align-items: flex-end !important;
                        padding: 0 !important;
                    }
                    .how-modal-responsive {
                        flex-direction: column !important;
                        height: 92vh !important;
                        max-height: 92vh !important;
                        width: 100% !important;
                        overflow-y: auto !important;
                        border-radius: 20px 20px 0 0 !important;
                        margin: 0 !important;
                        position: relative !important;
                    }
                    .how-modal-left {
                        padding: 25px 20px 15px !important;
                        flex: none !important;
                        min-height: min-content !important;
                    }
                    .how-modal-left .header-text {
                        margin-bottom: 20px !important;
                        margin-top: 20px !important;
                    }
                    .how-modal-left .step-number {
                        font-size: 2.5rem !important;
                    }
                    .how-modal-left .step-subtitle {
                        font-size: 0.7rem !important;
                    }
                    .how-modal-left h2 {
                        font-size: 1.6rem !important;
                        margin-bottom: 12px !important;
                    }
                    .how-modal-left p {
                        font-size: 0.95rem !important;
                        line-height: 1.4 !important;
                    }
                    .how-modal-left .badges-container {
                        margin-top: 15px !important;
                        gap: 8px !important;
                    }
                    .how-modal-left .badges-container > div {
                        padding: 6px 12px !important;
                        font-size: 0.75rem !important;
                    }
                    .how-modal-left .actions-container {
                        margin-top: 25px !important;
                    }
                    .how-modal-right {
                        min-height: auto;
                        padding: 5px 0 40px 0 !important;
                        transform: scale(0.85);
                        transform-origin: top center;
                        flex: none !important;
                    }
                    .phone-mockup-container {
                        box-shadow: 0 15px 30px rgba(0,0,0,0.06) !important;
                        margin: 0 auto !important;
                    }
                }
            `}</style>
        </AnimatePresence>
    );
};

export default HowItWorksModal;
