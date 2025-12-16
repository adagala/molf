import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Shield, Home, Activity, Cpu } from 'lucide-react';
import { PracticeArea } from '../types';
import './PracticeAreas.css';

const practices: PracticeArea[] = [
    {
        icon: <Briefcase size={40} />,
        title: 'Corporate Law',
        description: 'Expert guidance for businesses of all sizes, from startups to established corporations.'
    },
    {
        icon: <Users size={40} />,
        title: 'Family Law',
        description: 'Compassionate representation for divorce, custody, and other family matters.'
    },
    {
        icon: <Shield size={40} />,
        title: 'Criminal Defense',
        description: 'Aggressive defense strategies to protect your rights and freedom.'
    },
    {
        icon: <Home size={40} />,
        title: 'Real Estate',
        description: 'Comprehensive legal services for residential and commercial property transactions.'
    },
    {
        icon: <Activity size={40} />,
        title: 'Personal Injury',
        description: 'Fighting for the compensation you deserve after an accident or injury.'
    },
    {
        icon: <Cpu size={40} />,
        title: 'Intellectual Property',
        description: 'Protecting your innovations, trademarks, and creative works.'
    }
];

const PracticeAreas: React.FC = () => {
    return (
        <section id="practice" className="section practice">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="section-subtitle">What We Do</h4>
                    <h2 className="section-title">Our Practice Areas</h2>
                    <p className="section-description">
                        We offer a wide range of legal services tailored to meet your specific needs.
                    </p>
                </div>

                <div className="practice-grid">
                    {practices.map((item, index) => (
                        <motion.div
                            key={index}
                            className="practice-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="icon-box">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href="#contact" className="learn-more">Learn More &rarr;</a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
