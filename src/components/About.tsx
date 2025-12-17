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
                    <h4 className="section-subtitle">About Morgan Omusundi Law Firm</h4>
                    <h2 className="section-title">Fusing Socio-Legal Excellence with Accessible People-Centered Justice</h2>
                    <p className="about-text">
                        Morgan Omusundi Law Firm was founded on a bold vision by our Managing and Senior Partner, 
                        Morgan Omusundi Esq., a dedicated legal mind driven by a mission to fuse socio-legal 
                        excellence with accessible people-centered justice.
                    </p>
                    <p className="about-text">
                        At Morgan Omusundi Law Firm Advocates (MOLA), we are driven by this mission built on the 
                        foundation of unwavering professional commitment to the rule of law. We believe that the 
                        law is not merely a set of rules but a tool of justice empowerment and societal transformation.
                    </p>
                    <p className="about-text">
                        Today, MOLA stands as a dynamic, modern legal practice offering specialist services in 
                        various fields of the law. We pride ourselves in combining sharp legal strategy with warm, 
                        client-focused experience making justice not just a service but a partnership.
                    </p>

                    <ul className="about-list">
                        <li>
                            <CheckCircle size={20} className="check-icon" />
                            <span>Precision, commitment and deep understanding</span>
                        </li>
                        <li>
                            <CheckCircle size={20} className="check-icon" />
                            <span>Diligence and client-centered representation</span>
                        </li>
                        <li>
                            <CheckCircle size={20} className="check-icon" />
                            <span>Thoughtful, strategic and result-oriented solutions</span>
                        </li>
                        <li>
                            <CheckCircle size={20} className="check-icon" />
                            <span>Relentless pursuit for justice</span>
                        </li>
                    </ul>

                    <a href="#team" className="btn">Meet Our Team</a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
