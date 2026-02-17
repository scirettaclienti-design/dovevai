import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer style={{ padding: '60px 0', borderTop: '1px solid #111', color: '#666', textAlign: 'center', fontSize: '0.8rem' }}>
            <div className="luxury-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <p style={{ marginBottom: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>AI-SPACE</p>
                    <p>Innovazione adattiva per il business moderno.</p>
                    <p style={{ marginTop: '20px', opacity: 0.5 }}>© {new Date().getFullYear()} Tutti i diritti riservati.</p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
