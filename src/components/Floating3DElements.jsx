import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Floating3DElements = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Fast moving foreground element (Scale up to simulate coming closer)
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -800]);
    const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 1.6]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.5]);

    // Slow moving background element (Scale down to stay far away)
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.9, 0.7]);
    const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 180]); // 2D rotation is fine for rings

    // Very slow, massive ambient glow
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const scale3 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);

    // Extra enriching elements
    const y4 = useTransform(scrollYProgress, [0, 1], [0, -1200]); // Ultra fast foreground orb
    const scale4 = useTransform(scrollYProgress, [0, 1], [1.5, 2.5]);

    const y5 = useTransform(scrollYProgress, [0, 1], [0, -300]); // Subtle midground

    // Micro particles (float upwards)
    const yMicro1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
    const yMicro2 = useTransform(scrollYProgress, [0, 1], [0, -900]);
    const yMicro3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

    return (
        <div ref={containerRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
            
            {/* Top Right Floating Ring (2D, but shaded volumetrically) */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: '15%',
                    right: '5%', // Safe margin
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    border: '30px solid transparent',
                    background: 'linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box, linear-gradient(135deg, rgba(245,167,93,0.6), rgba(243,120,84,0.1)) border-box',
                    boxShadow: 'inset 0 10px 20px rgba(0,0,0,0.02), 0 20px 40px rgba(243,120,84,0.1)',
                    y: y2,
                    scale: scale2,
                    rotate: rotate2, // 2D rotation for the gradient
                }}
            />

            {/* Bottom Left True Volumetric Orb (No 3D distortion) */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: '60%',
                    left: '-2%', 
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%', // Perfect sphere
                    background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.9) 0%, rgba(245, 167, 93, 0.6) 40%, rgba(243, 120, 84, 0.8) 100%)',
                    boxShadow: 'inset -20px -20px 40px rgba(243,120,84,0.5), inset 10px 10px 20px rgba(255,255,255,0.9), 0 30px 60px rgba(243, 120, 84, 0.2)',
                    y: y1,
                    scale: scale1,
                    opacity: opacity1,
                }}
            />

            {/* Center Massive Ambient Glow */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: '30%',
                    left: '35%',
                    width: '800px',
                    height: '800px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 50% 50%, rgba(245, 167, 93, 0.05) 0%, transparent 60%)',
                    y: y3,
                    scale: scale3,
                    filter: 'blur(50px)',
                }}
            />
            
            {/* Mid Right Solid Volumetric Glass Sphere */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: '75%',
                    right: '8%',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 1), rgba(243, 120, 84, 0.5) 60%, rgba(243, 120, 84, 0.9))',
                    backdropFilter: 'blur(8px)',
                    boxShadow: 'inset -15px -15px 30px rgba(243,120,84,0.5), inset 15px 15px 30px rgba(255,255,255,1), 0 20px 40px rgba(243, 120, 84, 0.2)',
                    y: y1,
                    scale: scale2,
                }}
            />

            {/* Ultra Foreground Fast Blur Orb (Depth of Field Effect) */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: '110%',
                    left: '-5%',
                    width: '350px',
                    height: '350px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.8) 0%, rgba(245, 167, 93, 0.4) 50%, transparent 100%)',
                    filter: 'blur(15px)', // Heavy blur since it's "close to camera"
                    y: y4,
                    scale: scale4,
                }}
            />

            {/* Deep Background Complementary Ambient Glow */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: '-5%',
                    right: '-10%',
                    width: '700px',
                    height: '700px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(243, 120, 84, 0.05) 0%, transparent 60%)',
                    y: y2,
                    filter: 'blur(40px)',
                }}
            />

            {/* Micro Particles for Texture */}
            <motion.div style={{ position: 'fixed', top: '50%', left: '20%', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-orange)', opacity: 0.6, y: yMicro1 }} />
            <motion.div style={{ position: 'fixed', top: '70%', right: '15%', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent-peach)', opacity: 0.8, y: yMicro2 }} />
            <motion.div style={{ position: 'fixed', top: '25%', left: '45%', width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(243, 120, 84, 0.4)', y: yMicro3 }} />
            <motion.div style={{ position: 'fixed', top: '85%', right: '40%', width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(245, 167, 93, 0.5)', y: yMicro1 }} />


        </div>
    );
};

export default Floating3DElements;
