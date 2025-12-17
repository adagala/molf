import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
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

const Team: React.FC = () => {
    return (
        <section id="team" className="py-20 pt-48 min-h-[80vh] bg-bg">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h4 className="text-accent uppercase tracking-wider text-sm font-semibold mb-2">Our Advocates</h4>
                    <h2 className="text-4xl font-heading font-bold text-primary mb-4">Meet The Team</h2>
                    <p className="max-w-[600px] mx-auto text-text-light">
                        Our diverse team of legal experts brings a wealth of knowledge and experience to every case.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] group"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="relative h-[350px] overflow-hidden">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(15,23,42,0.7)] flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="flex gap-4">
                                        <a href="#" className="w-10 h-10 bg-accent text-primary rounded-full flex justify-center items-center transition-all duration-300 hover:bg-white hover:text-accent hover:scale-110">
                                            <Linkedin size={20} />
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-accent text-primary rounded-full flex justify-center items-center transition-all duration-300 hover:bg-white hover:text-accent hover:scale-110">
                                            <Mail size={20} />
                                        </a>
                                        <a href="#" className="w-10 h-10 bg-accent text-primary rounded-full flex justify-center items-center transition-all duration-300 hover:bg-white hover:text-accent hover:scale-110">
                                            <Phone size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-heading mb-2 text-primary">{member.name}</h3>
                                <span className="block text-accent font-semibold mb-4 uppercase text-xs tracking-wider">{member.role}</span>
                                <p className="text-text text-sm">{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
