import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src="/about-img.png" alt="Lawyers meeting" />
                    <div className="experience-badge">
                        <span className="years">25+</span>
                        <span className="text">Years of Experience</span>
                    </div>
                </motion.div>

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h4 className="section-subtitle">About Our Firm</h4>
                    <h2 className="section-title">Committed to Helping Our Clients Succeed</h2>
                    <p className="about-text">
                        Morgan Omusundi Law Firm is a premier law firm dedicated to providing exceptional legal representation.
                        With over two decades of experience, we have built a reputation for excellence,
                        integrity, and results. Our team of skilled advocates works tirelessly to protect
                        your rights and achieve the best possible outcome for your case.
                    </p>

                    <ul className="about-list">
                        <li>
                            <CheckCircle size={20} className="check-icon" />
                            <span>Award-winning legal representation</span>
                        </li>
                        <li>
                            <CheckCircle size={20} className="check-icon" />
                            <span>Dedicated team of specialists</span>
                        </li>
                        <li>
                            <CheckCircle size={20} className="check-icon" />
                            <span>Client-focused approach</span>
                        </li>
                        <li>
                            <CheckCircle size={20} className="check-icon" />
                            <span>Proven track record of success</span>
                        </li>
                    </ul>

                    <a href="#team" className="btn">Meet Our Team</a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
