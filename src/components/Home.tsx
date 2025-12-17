import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Home as HomeIcon, Shield } from 'lucide-react';
import Hero from './Hero';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Hero />

            {/* About Snippet */}
            <section className="section home-about">
                <div className="container">
                    <div className="home-about-grid">
                        <motion.div
                            className="home-about-content"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h4 className="section-subtitle">Who We Are</h4>
                            <h2 className="section-title">A Legacy of Socio-Legal Excellence</h2>
                            <p>
                                Morgan Omusundi Law Firm Advocates (MOLA) stands as a dynamic, modern legal practice 
                                combining sharp legal strategy with warm, client-focused experience. Founded on the 
                                vision to fuse socio-legal excellence with accessible people-centered justice, we 
                                believe the law is not merely a set of rules but a tool of justice empowerment and 
                                societal transformation.
                            </p>
                            <Link to="/about" className="btn-text">
                                Read More About Us <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                        <motion.div
                            className="home-about-stats"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="stat-item">
                                <span className="stat-number">98%</span>
                                <span className="stat-label">Success Rate</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">500+</span>
                                <span className="stat-label">Cases Won</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Practice Areas Snippet */}
            <section className="section home-practice">
                <div className="container">
                    <div className="section-header text-center">
                        <h4 className="section-subtitle">Our Expertise</h4>
                        <h2 className="section-title">Areas of Practice</h2>
                    </div>

                    <div className="home-practice-grid">
                        <motion.div
                            className="practice-snippet"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Activity size={32} className="snippet-icon" />
                            <h3>Personal Injury & Compensation Claims</h3>
                            <p>Securing just compensation for your injuries.</p>
                        </motion.div>

                        <motion.div
                            className="practice-snippet"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <HomeIcon size={32} className="snippet-icon" />
                            <h3>Conveyancing & Property Law</h3>
                            <p>Professional property transaction services.</p>
                        </motion.div>

                        <motion.div
                            className="practice-snippet"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Shield size={32} className="snippet-icon" />
                            <h3>Criminal Defence & Advisory</h3>
                            <p>Protection of your rights in criminal matters.</p>
                        </motion.div>
                    </div>

                    <div className="text-center mt-4">
                        <Link to="/practice" className="btn btn-outline">View All Practice Areas</Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section home-cta">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Ready to Win Your Case?</h2>
                        <p>Schedule a free consultation with our expert legal team today.</p>
                        <Link to="/contact" className="btn btn-white">Contact Us Now</Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
