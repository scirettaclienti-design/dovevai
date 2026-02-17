import { motion } from 'framer-motion';

const SectionWrapper = ({ children, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 70, filter: 'blur(10px)' }} // Added blur for a more premium reveal
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }} // Changed to once: true for less distraction, premium sites often reveal once
            transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }} // "Wipe" ease curve
        >
            {children}
        </motion.div>
    );
};

export default SectionWrapper;
