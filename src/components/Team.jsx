import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import './Team.css';

const team = [
    {
        name: 'David Morgan',
        role: 'Senior Partner',
        image: '/lawyer-1.png', // Placeholder until new image is generated
        bio: 'Specializing in corporate law with over 20 years of experience in high-stakes litigation.'
    },
    {
        name: 'Sarah Omusundi',
        role: 'Senior Partner',
        image: '/lawyer-2.png', // Placeholder until new image is generated
        bio: 'Expert in family law and mediation, dedicated to finding peaceful resolutions for complex cases.'
    },
    {
        name: 'James Ochieng',
        role: 'Associate',
        image: '/lawyer-1.png', // Placeholder until new image is generated
        bio: 'Rising star in criminal defense, known for his strategic thinking and courtroom presence.'
    }
];

const Team = () => {
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
                                <p>{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
