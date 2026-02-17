import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Lock } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const EventDetails = () => {
    return (
        <section style={{ padding: '80px 0' }}>
            <div className="luxury-container">
                <SectionWrapper>
                    <motion.div
                        whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(212, 175, 55, 0.1)' }}
                        style={{
                            maxWidth: '900px',
                            margin: '0 auto',
                            background: '#0a0a0a',
                            border: '1px solid rgba(212, 175, 55, 0.3)',
                            borderRadius: '12px',
                            padding: '40px',
                            position: 'relative',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            zIndex: 10,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                        }}
                    >
                        <EventItem icon={<Calendar />} title="Sabato 21" sub="Settembre" delay={0.1} />
                        <div style={{ width: '1px', height: '50px', background: '#333' }} className="divider"></div>
                        <EventItem icon={<Clock />} title="Ore 11:00" sub="Puntuali" delay={0.2} />
                        <div style={{ width: '1px', height: '50px', background: '#333' }} className="divider"></div>
                        <EventItem icon={<MapPin />} title="Roma" sub="Sala Privata" delay={0.3} />
                        <div style={{ width: '1px', height: '50px', background: '#333' }} className="divider"></div>
                        <EventItem icon={<Lock />} title="Posti Limitati" sub="Su Conferma" delay={0.4} />
                    </motion.div>
                </SectionWrapper>
            </div>
        </section>
    );
};

const EventItem = ({ icon, title, sub, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.3 }}
        style={{ textAlign: 'center', padding: '15px' }}
    >
        <div style={{ color: '#d4af37', marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
            {icon}
        </div>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff' }}>{title}</div>
        <div style={{ fontSize: '0.85rem', color: '#666', textTransform: 'uppercase' }}>{sub}</div>
    </motion.div>
);

export default EventDetails;
