import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Users, Shield } from 'lucide-react';
import Hero from './Hero';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Hero />

            {/* About Snippet */}
            <section className="py-20 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h4 className="text-accent uppercase tracking-wider text-sm font-semibold mb-2">Who We Are</h4>
                            <h2 className="text-4xl font-heading font-bold text-primary mb-6">A Legacy of Legal Excellence</h2>
                            <p className="mb-8 text-text text-lg leading-relaxed">
                                For over 25 years, Morgan Omusundi Law Firm has been a beacon of justice and integrity.
                                We combine big-firm expertise with small-firm attention to detail, ensuring
                                every client receives the personalized representation they deserve.
                            </p>
                            <Link to="/about" className="text-accent font-semibold inline-flex items-center gap-2 text-base hover:text-primary hover:gap-3 transition-all">
                                Read More About Us <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                        <motion.div
                            className="grid grid-cols-2 gap-8"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="text-center p-8 bg-bg rounded-lg border border-black/5">
                                <span className="block text-5xl font-bold text-accent mb-2">98%</span>
                                <span className="text-primary font-semibold uppercase text-xs tracking-wider">Success Rate</span>
                            </div>
                            <div className="text-center p-8 bg-bg rounded-lg border border-black/5">
                                <span className="block text-5xl font-bold text-accent mb-2">500+</span>
                                <span className="text-primary font-semibold uppercase text-xs tracking-wider">Cases Won</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Practice Areas Snippet */}
            <section className="py-20 bg-bg">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h4 className="text-accent uppercase tracking-wider text-sm font-semibold mb-2">Our Expertise</h4>
                        <h2 className="text-4xl font-heading font-bold text-primary">Areas of Practice</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mb-12">
                        <motion.div
                            className="bg-white p-8 rounded-lg text-center shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Briefcase size={32} className="text-accent mb-4 mx-auto" />
                            <h3 className="text-xl font-heading mb-2 text-primary">Corporate Law</h3>
                            <p className="text-text-light text-sm">Strategic legal solutions for businesses.</p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-lg text-center shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Users size={32} className="text-accent mb-4 mx-auto" />
                            <h3 className="text-xl font-heading mb-2 text-primary">Family Law</h3>
                            <p className="text-text-light text-sm">Compassionate support for family matters.</p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-8 rounded-lg text-center shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Shield size={32} className="text-accent mb-4 mx-auto" />
                            <h3 className="text-xl font-heading mb-2 text-primary">Criminal Defense</h3>
                            <p className="text-text-light text-sm">Aggressive protection of your rights.</p>
                        </motion.div>
                    </div>

                    <div className="text-center mt-8">
                        <Link 
                            to="/practice" 
                            className="inline-block px-8 py-4 bg-transparent text-accent font-semibold border-2 border-accent cursor-pointer transition-all duration-300 uppercase tracking-wider text-sm hover:bg-accent hover:text-primary"
                        >
                            View All Practice Areas
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-white text-5xl font-heading mb-4">Ready to Win Your Case?</h2>
                        <p className="text-text-light text-xl mb-10 max-w-[600px] mx-auto">Schedule a free consultation with our expert legal team today.</p>
                        <Link 
                            to="/contact" 
                            className="inline-block bg-white text-primary px-10 py-4 font-semibold uppercase tracking-wider rounded transition-all duration-300 hover:bg-accent hover:text-white hover:-translate-y-0.5"
                        >
                            Contact Us Now
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
