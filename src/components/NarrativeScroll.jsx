import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const narrativeSteps = [
    {
        title: "La Mappa che sente.",
        text: "Dimentica i punti di interesse standard. La nostra mappa rileva la tua posizione e ti svela cosa sta accadendo intorno a te, in tempo reale.",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=2000",
    },
    {
        title: "L'AI che disegna il tuo tempo.",
        text: "Non pianificare. Lascia fare all'AI. Inserisci i tuoi interessi, ottieni un itinerario ottimizzato, completo di costi e tempi di percorrenza. Perfetto, fino all'ultimo minuto.",
        image: "https://images.unsplash.com/photo-1542820229-081e0c12af0b?auto=format&fit=crop&q=80&w=2000",
    },
    {
        title: "La tua guida, il tuo alleato.",
        text: "Non sei mai solo. Connettiti direttamente con esperti locali verificati. Chatta, chiedi consigli, conferma il tour. È come avere un amico del posto che ti aspetta all'angolo.",
        image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&q=80&w=2000",
    },
    {
        title: "La tua avventura live.",
        text: "Vivi la storia, non leggerla. Navigazione live e momenti da conservare. Questa è la vera Italia.",
        image: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?auto=format&fit=crop&q=80&w=2000",
    }
];

const NarrativeScroll = () => {
    const containerRef = useRef(null);
    const imagesRef = useRef([]);
    const textBlocksRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Pin the entire container
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                pin: '.narrative-pin-area',
                scrub: 1,
            });

            // Set initial states
            gsap.set(imagesRef.current, { opacity: 0, scale: 1.1 });
            if (imagesRef.current[0]) {
                gsap.set(imagesRef.current[0], { opacity: 1, scale: 1 });
            }

            textBlocksRef.current.forEach((block, index) => {
                const isLast = index === textBlocksRef.current.length - 1;

                // Animate Text
                gsap.fromTo(
                    block,
                    { opacity: 0, y: 100, filter: 'blur(10px)' },
                    {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: block,
                            start: 'top center+=30%',
                            end: 'bottom center-=30%',
                            scrub: 1,
                            toggleActions: "play reverse play reverse",
                        },
                    }
                );

                // Fade out Text if not last
                if (!isLast) {
                    gsap.to(block, {
                        opacity: 0,
                        y: -100,
                        filter: 'blur(10px)',
                        ease: "power3.in",
                        scrollTrigger: {
                            trigger: block,
                            start: 'bottom center-=30%',
                            end: 'bottom top',
                            scrub: 1,
                        }
                    });
                }

                // Animate Images Crossfade
                if (index > 0) {
                    const prevImage = imagesRef.current[index - 1];
                    const currentImage = imagesRef.current[index];

                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: block,
                            start: 'top center',
                            end: 'top top',
                            scrub: 1,
                        }
                    });

                    tl.to(prevImage, { opacity: 0, scale: 1.05, duration: 1 }, 0)
                        .to(currentImage, { opacity: 1, scale: 1, duration: 1 }, 0);
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} style={{ position: 'relative', backgroundColor: '#000' }}>

            {/* Pinned Viewport */}
            <div className="narrative-pin-area" style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden' }}>

                {/* Background Images */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                    {narrativeSteps.map((step, idx) => (
                        <div
                            key={`bg-${idx}`}
                            ref={el => imagesRef.current[idx] = el}
                            style={{
                                position: 'absolute', inset: 0,
                                backgroundImage: `url(${step.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* Overlay Gradient for readability */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)'
                            }}></div>
                        </div>
                    ))}
                </div>

                <div className="luxury-container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
                    {/* The text will visually appear here because of the fixed bounding box, but we drive it via invisible scroll sections below */}
                    <div style={{ width: '50%', height: '100%', display: 'flex', alignItems: 'center', position: 'relative' }}>
                        {/* We render the text fixed in the pinned area, but control opacity/y via the scroll triggers! Wait, no, we need the actual DOM elements to be pinned or scrolled. Let's make the text blocks absolute within the pinned area, and use the scroll progress to animate them. */}
                    </div>
                </div>
            </div>

            {/* Invisible Scroll Track */}
            <div style={{ position: 'relative', zIndex: 10, marginTop: '-100vh' }}>
                {narrativeSteps.map((step, idx) => (
                    <div
                        key={`track-${idx}`}
                        className="luxury-container"
                        style={{
                            height: '150vh', // long scroll track for each step
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start'
                        }}
                    >
                        {/* Actual Text Block animated by GSAP */}
                        <div
                            ref={el => textBlocksRef.current[idx] = el}
                            className="glass-panel"
                            style={{
                                flex: '0 0 55%',
                                padding: '60px',
                                opacity: 0,
                                background: 'rgba(10, 10, 10, 0.6)',
                                border: '1px solid rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: '24px',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                            }}
                        >
                            <div style={{
                                fontSize: '1rem', color: '#d4af37', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '15px'
                            }}>
                                Fase 0{idx + 1}
                            </div>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '25px', lineHeight: 1.1, color: '#fff' }}>
                                {step.title}
                            </h2>
                            <p style={{ fontSize: '1.4rem', color: '#ccc', lineHeight: 1.6, fontWeight: 300 }}>
                                {step.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default NarrativeScroll;
