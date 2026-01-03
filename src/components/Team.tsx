import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { TeamMember } from '../types';
import './Team.css';

const team: TeamMember[] = [
    {
        name: 'Morgan Omusundi',
        role: 'Position',
        image: '/team/DSC_3839.jpg'
    },
    {
        name: 'Name',
        role: 'Position',
        image: '/team/DSC_3824.jpg'
    },
    {
        name: 'Name',
        role: 'Position',
        image: '/team/DSC_3826.jpg'
    },
    {
        name: 'Name',
        role: 'Position',
        image: '/team/DSC_3834.jpg'
    },
    {
        name: 'Name',
        role: 'Position',
        image: '/team/DSC_3903.jpg'
    },
    {
        name: 'Name',
        role: 'Position',
        image: '/team/DSC_3911.jpg'
    },
    {
        name: 'Name',
        role: 'Position',
        image: '/team/DSC_3913.jpg'
    },
    {
        name: 'Name',
        role: 'Position',
        image: '/team/DSC_3919.jpg'
    },
    {
        name: 'Brian Omusundi',
        role: 'Position',
        image: '/team/DSC_3925.jpg'
    },
    {
        name: 'Name',
        role: 'Position',
        image: '/team/IMG_7664.JPG'
    },
    {
        name: 'Name',
        role: 'Position',
        image: '/team/IMG_7665.JPG'
    }
];

const Team: React.FC = () => {
    return (
        <section id="team" className="section team">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="section-subtitle">Our Advocates</h4>
                    <h2 className="section-title">Meet The Team</h2>
                    <p className="section-description">
                        Our diverse team of legal experts brings a wealth of knowledge and experience to every case.
                    </p>
                </div>

                <div className="team-grid">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className="team-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="team-image">
                                <img src={member.image} alt={member.name} />
                                <div className="team-overlay">
                                    <div className="social-links">
                                        <a href="#"><Linkedin size={20} /></a>
                                        <a href="#"><Mail size={20} /></a>
                                        <a href="#"><Phone size={20} /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3>{member.name}</h3>
                                <span className="role">{member.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
