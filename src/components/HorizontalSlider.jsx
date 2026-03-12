import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Map, Bot, Users, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        icon: <Cpu size={40} strokeWidth={1.5} />,
        title: "Il Tuo Motore AI",
        subtitle: "L'ECOSISTEMA",
        desc: "Dimentica le mappe classiche. L'Intelligenza Artificiale impara dalle tue scelte e dai tuoi interessi per costruire, in un istante, l'itinerario perfetto per te.",
    },
    {
        icon: <MapPin size={40} strokeWidth={1.5} />,
        title: "Il Match Perfetto",
        subtitle: "VISIBILITÀ MIRATA",
        desc: "Le attività locali non compaiono a caso. Il nostro algoritmo le inserisce in modo naturale solo nel tour perfetto per l'utente perfetto, massimizzando l'esperienza e la conversione.",
    },
    {
        icon: <Bot size={40} strokeWidth={1.5} />,
        title: "Itinerari Su Misura",
        subtitle: "FLESSIBILITÀ TOTALE",
        desc: "Scordati i percorsi rigidi. Se cambia il meteo, se trovi traffico o se hai semplicemente cambiato idea, l'assistente ricalcola istantaneamente il viaggio adattandosi ai tuoi ritmi.",
    },
    {
        icon: <Users size={40} strokeWidth={1.5} />,
        title: "Guide Certificate",
        subtitle: "ESPERIENZA UMANA",
        desc: "La tecnologia traccia la rotta, l'umano crea l'emozione. Entra in contatto diretto con guide professioniste verificate dalla nostra piattaforma per farti svelare i veri segreti della città.",
    }
];

const HorizontalSlider = () => {
    const containerRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const panels = gsap.utils.toArray('.slide-panel');

            // Capture the horizontal scroll tween to use as containerAnimation
            const scrollTween = gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: {
                        snapTo: 1 / (panels.length - 1),
                        duration: { min: 0.2, max: 0.8 },
                        ease: "power1.inOut"
                    },
                    end: () => "+=" + scrollRef.current.offsetWidth
                }
            });

            // Parallax Images and Entrances inside panels
            panels.forEach((panel) => {
                const img = panel.querySelector('.slide-bg');
                if (img) {
                    gsap.fromTo(img,
                        { x: '-20%' },
                        {
                            x: '20%',
                            ease: "none",
                            scrollTrigger: {
                                trigger: panel,
                                containerAnimation: scrollTween, 
                                start: 'left right',
                                end: 'right left',
                                scrub: true,
                            }
                        }
                    );
                }

                // Dramatic 3D Glass Card Entrance
                const glassCard = panel.querySelector('.glass-card');
                const core = panel.querySelector('.data-core');
                const texts = panel.querySelectorAll('.stagger-text');
                const slideIndicator = panel.querySelector('.slide-indicator');

                if (glassCard) {
                    // Card body elastic entrance
                    gsap.fromTo(glassCard,
                        { y: 150, opacity: 0, rotationY: -15, rotationX: 10, scale: 0.9, transformPerspective: 1500 },
                        {
                            y: 0,
                            opacity: 1,
                            rotationY: 0,
                            rotationX: 0,
                            scale: 1,
                            ease: "back.out(1.4)",
                            duration: 1.2,
                            scrollTrigger: {
                                trigger: panel,
                                containerAnimation: scrollTween,
                                start: 'left center+=300', 
                                toggleActions: "play none none reverse",
                            }
                        }
                    );
                }

                // Internal stagger for contents to elevate the "wow" factor
                if (core && texts.length) {
                    const elements = [core, ...Array.from(texts)];
                    if (slideIndicator) elements.push(slideIndicator);

                    gsap.fromTo(elements, 
                        { opacity: 0, x: 40 },
                        {
                            opacity: 1,
                            x: 0,
                            stagger: 0.1,
                            ease: "power3.out",
                            duration: 0.8,
                            scrollTrigger: {
                                trigger: panel,
                                containerAnimation: scrollTween,
                                start: 'left center+=150',
                                toggleActions: "play none none reverse",
                            }
                        }
                    );
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: 'transparent', overflow: 'hidden' }}>
            <div
                ref={scrollRef}
                style={{
                    display: 'flex',
                    width: `${slides.length * 100}vw`,
                    height: '100%'
                }}
            >
                {slides.map((slide, idx) => (
                    <div
                        key={idx}
                        className="slide-panel"
                        style={{
                            position: 'relative',
                            width: '100vw',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Minimalist Background Setup (Replacing Photos) */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
                            <div
                                className="slide-bg"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: '-20%',
                                    width: '140%', 
                                    height: '100%',
                                    background: 'transparent',
                                }}
                            >
                                {/* Abstract Geometric Decoration per Slide */}
                                <div style={{
                                    position: 'absolute',
                                    top: '30%',
                                    right: '20%',
                                    width: '400px',
                                    height: '400px',
                                    borderRadius: '50%',
                                    border: '2px solid rgba(243, 120, 84, 0.1)',
                                    opacity: 0.5,
                                    transform: 'scale(1.5) rotate(15deg)'
                                }}></div>
                            </div>
                        </div>

                        {/* Content Overlay */}
                        <div className="luxury-container" style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center', perspective: '1000px' }}>
                            <div className="glass-card" style={{
                                padding: '80px',
                                maxWidth: '900px',
                                width: '90%',
                                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                                backdropFilter: 'blur(40px)',
                                WebkitBackdropFilter: 'blur(40px)',
                                borderTop: '1px solid rgba(255, 255, 255, 0.9)',
                                borderLeft: '1px solid rgba(255, 255, 255, 0.9)',
                                borderRight: '1px solid rgba(255, 255, 255, 0.4)',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                                borderRadius: '40px',
                                boxShadow: '0 50px 100px rgba(243, 120, 84, 0.15), inset 0 20px 40px rgba(255,255,255,0.8), inset 0 -10px 40px rgba(0,0,0,0.02)',
                                textAlign: 'left',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '50px'
                            }}>
                                {/* Floating 3D Data Core inside the card */}
                                <div className="data-core" style={{
                                    flexShrink: 0,
                                    width: '200px',
                                    height: '200px',
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {/* Volumetric Sphere */}
                                    <div style={{
                                        position: 'absolute',
                                        width: '180px',
                                        height: '180px',
                                        borderRadius: '50%',
                                        background: 'radial-gradient(circle at 30% 30%, #fff 0%, rgba(245, 167, 93, 0.8) 40%, rgba(243, 120, 84, 0.9) 100%)',
                                        boxShadow: 'inset -20px -20px 40px rgba(243,120,84,0.6), inset 15px 15px 30px #fff, 0 30px 60px rgba(243, 120, 84, 0.3)',
                                        animation: 'floatOrb 6s ease-in-out infinite'
                                    }}></div>
                                    
                                    {/* Floating Icon over the sphere */}
                                    <div style={{
                                        position: 'relative',
                                        zIndex: 2,
                                        color: '#fff',
                                        filter: 'drop-shadow(0 10px 20px rgba(243, 120, 84, 0.5))',
                                        animation: 'floatIcon 4s ease-in-out infinite reverse'
                                    }}>
                                        {slide.icon}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                                    <div className="stagger-text" style={{ fontSize: '0.9rem', color: '#f37854', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px', fontWeight: 700 }}>
                                        {slide.subtitle}
                                    </div>
                                    
                                    <h2 className="stagger-text" style={{ fontSize: 'clamp(2.5rem, 3.5vw, 3.5rem)', color: '#1a1a1a', lineHeight: 1.1, marginBottom: '25px', fontWeight: 800, letterSpacing: '-1.5px' }}>
                                        {slide.title}
                                    </h2>
                                    
                                    <p className="stagger-text" style={{ fontSize: '1.2rem', color: '#555', lineHeight: 1.8, fontWeight: 400 }}>
                                        {slide.desc}
                                    </p>
                                </div>

                                {/* Inner subtle glow */}
                                <div style={{
                                    position: 'absolute', top: '-50%', right: '-50%', width: '150%', height: '150%',
                                    background: 'radial-gradient(circle at 80% 20%, rgba(243, 120, 84, 0.08), transparent 60%)',
                                    pointerEvents: 'none'
                                }}/>
                            </div>
                            
                            <style>{`
                                @keyframes floatOrb {
                                    0%, 100% { transform: translateY(0) scale(1); }
                                    50% { transform: translateY(-15px) scale(1.05); }
                                }
                                @keyframes floatIcon {
                                    0%, 100% { transform: translateY(0); }
                                    50% { transform: translateY(10px); }
                                }
                                
                                /* Mobile Responsiveness */
                                @media (max-width: 768px) {
                                    .glass-card {
                                        flex-direction: column !important;
                                        padding: 30px !important;
                                        gap: 20px !important;
                                        text-align: center !important;
                                    }
                                    .glass-card .data-core {
                                        width: 130px !important;
                                        height: 130px !important;
                                        margin: 0 auto !important;
                                    }
                                    .glass-card .data-core > div:first-child {
                                        width: 120px !important;
                                        height: 120px !important;
                                    }
                                    .glass-card h2.stagger-text {
                                        font-size: clamp(2rem, 8vw, 2.5rem) !important;
                                        margin-bottom: 15px !important;
                                    }
                                    .glass-card p.stagger-text {
                                        font-size: 1rem !important;
                                    }
                                }
                            `}</style>
                        </div>

                        {/* Slide Indicator */}
                        <div className="slide-indicator" style={{ position: 'absolute', bottom: '50px', left: '50px', zIndex: 2, fontSize: '3rem', fontWeight: 200, color: 'rgba(243, 120, 84, 0.3)' }}>
                            0{idx + 1} <span style={{ fontSize: '1.2rem', color: 'rgba(26,26,26,0.3)' }}>/ 0{slides.length}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HorizontalSlider;
