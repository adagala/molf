import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Briefcase, Users, Shield } from 'lucide-react';
import Hero from './Hero';
import './Home.css';

const Home = () => {
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
                            <h2 className="section-title">A Legacy of Legal Excellence</h2>
                            <p>
                                For over 25 years, Morgan Omusundi Law Firm has been a beacon of justice and integrity.
                                We combine big-firm expertise with small-firm attention to detail, ensuring
                                every client receives the personalized representation they deserve.
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
                            <Briefcase size={32} className="snippet-icon" />
                            <h3>Corporate Law</h3>
                            <p>Strategic legal solutions for businesses.</p>
                        </motion.div>

                        <motion.div
                            className="practice-snippet"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Users size={32} className="snippet-icon" />
                            <h3>Family Law</h3>
                            <p>Compassionate support for family matters.</p>
                        </motion.div>

                        <motion.div
                            className="practice-snippet"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Shield size={32} className="snippet-icon" />
                            <h3>Criminal Defense</h3>
                            <p>Aggressive protection of your rights.</p>
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
