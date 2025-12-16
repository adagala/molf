import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="hero-title">
                        Justice, Integrity, <br />
                        <span className="text-accent">Excellence.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Defending your rights with unwavering dedication and legal expertise.
                        We are committed to delivering results that matter.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn">
                            Contact Us <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                        </Link>
                        <Link to="/practice" className="btn btn-outline">
                            Our Practice Areas <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
