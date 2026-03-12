import { motion } from 'framer-motion';

const EventFooter = () => {
    return (
        <section style={{ padding: '100px 20px', backgroundColor: 'var(--bg-primary)', borderTop: '1px solid rgba(243, 120, 84, 0.1)', textAlign: 'center' }}>
            <div className="luxury-container">
                <div style={{ paddingTop: '40px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <p>&copy; {new Date().getFullYear()} DoveVai. Tutti i diritti riservati.</p>
                </div>
            </div>
            <style>{`
                .premium-btn {
                    display: inline-block;
                    padding: 22px 55px;
                    font-size: 1rem;
                    font-weight: 600;
                    color: #fff;
                    background: linear-gradient(45deg, var(--accent-orange), var(--accent-peach));
                    border-radius: 2px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 0 30px var(--glow-orange);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    text-decoration: none;
                    z-index: 10;
                }
                .premium-btn:hover {
                    box-shadow: 0 0 60px rgba(243, 120, 84, 0.4);
                }
                .btn-flare {
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent);
                    animation: flare 3.5s infinite ease-in-out;
                }
            `}</style>
        </section>
    );
};

export default EventFooter;
