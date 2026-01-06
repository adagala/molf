import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Shield, Home, Activity, Scale, Handshake } from 'lucide-react';
import { PracticeArea } from '../types';
import './PracticeAreas.css';

const practices: PracticeArea[] = [
    {
        icon: <Activity size={40} />,
        title: 'Personal Injury & Compensation Claims',
        description: 'We represent clients in road traffic accidents, workplace injuries, medical negligence, product liability and fatal accident claims to secure just, timely, and adequate compensation.'
    },
    {
        icon: <Home size={40} />,
        title: 'Conveyancing & Property Law',
        description: 'We handle land purchases, sales, leases, charges, discharges, title transfers, due diligence, and property development documentation with precision and efficiency.'
    },
    {
        icon: <Briefcase size={40} />,
        title: 'Environment and Land',
        description: 'Expert guidance on environmental law and land-related matters, ensuring compliance and protecting your property rights.'
    },
    {
        icon: <Scale size={40} />,
        title: 'Succession, Probate & Estate Administration',
        description: 'We guide families through will drafting, probate processes, administration of estates, distribution of assets, and resolution of inheritance disputes with sensitivity and clarity.'
    },
    {
        icon: <Users size={40} />,
        title: 'Employment & Labour Relations',
        description: 'We act for both employers and employees in unfair termination claims, redundancy processes, workplace policies, disciplinary procedures, and collective bargaining matters.'
    },
    {
        icon: <Shield size={40} />,
        title: 'Criminal Defence & Advisory',
        description: 'We defend clients in all criminal matters, ensure their rights are protected, provide bail applications, and navigate the criminal justice system with skill and tact.'
    },
    {
        icon: <Handshake size={40} />,
        title: 'Alternative Dispute Resolution',
        description: 'Our ADR practice provides mediation and negotiation services aimed at resolving disputes efficiently and cost-effectively.'
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
