import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Shield, Home, Activity, Cpu } from 'lucide-react';
import { PracticeArea } from '../types';

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
        <section id="practice" className="py-20 pt-48 min-h-[80vh] bg-bg">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h4 className="text-accent uppercase tracking-wider text-sm font-semibold mb-2">What We Do</h4>
                    <h2 className="text-4xl font-heading font-bold text-primary mb-4">Our Practice Areas</h2>
                    <p className="max-w-[600px] mx-auto text-text-light">
                        We offer a wide range of legal services tailored to meet your specific needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
                    {practices.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-10 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all duration-300 border-b-[3px] border-b-transparent hover:-translate-y-2.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:border-b-accent"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-accent mb-6">{item.icon}</div>
                            <h3 className="text-2xl font-heading mb-4 text-primary">{item.title}</h3>
                            <p className="text-text mb-6 leading-relaxed">{item.description}</p>
                            <a href="#contact" className="text-accent font-semibold text-sm inline-flex items-center hover:text-primary transition-colors">
                                Learn More &rarr;
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreas;
