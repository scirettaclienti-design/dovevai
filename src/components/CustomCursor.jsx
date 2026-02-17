import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovering(isClickable);
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 9999,
                mixBlendMode: 'difference' // Key for visibility on dark/light
            }}
            animate={{
                x: mousePosition.x - (isHovering ? 20 : 10), // Center compensation
                y: mousePosition.y - (isHovering ? 20 : 10),
            }}
            transition={{
                type: "spring",
                stiffness: 800, // Very snappy
                damping: 35
            }}
        >
            <motion.div
                animate={{
                    width: isHovering ? 40 : 20,
                    height: isHovering ? 40 : 20,
                    backgroundColor: isHovering ? "#fff" : "transparent",
                    border: isHovering ? "none" : "1px solid #fff"
                }}
                style={{
                    borderRadius: '50%',
                    transition: 'width 0.2s, height 0.2s, background-color 0.2s'
                }}
            />
        </motion.div>
    );
};

export default CustomCursor;
