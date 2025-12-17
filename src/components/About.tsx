import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 pt-48 min-h-[80vh] bg-white">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    className="relative order-2 lg:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src="/about-img.png" alt="Lawyers meeting" className="rounded-lg shadow-[0_20px_40px_rgba(0,0,0,0.1)]" />
                    <div className="absolute bottom-[-20px] right-[-20px] bg-accent text-primary p-8 rounded-lg text-center shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
                        <span className="block text-5xl font-bold leading-none">25+</span>
                        <span className="text-sm font-medium">Years of Experience</span>
                    </div>
                </motion.div>

                <motion.div
                    className="order-1 lg:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h4 className="text-accent uppercase tracking-[2px] text-sm mb-4 block">About Our Firm</h4>
                    <h2 className="text-4xl font-heading mb-6 text-primary">Committed to Helping Our Clients Succeed</h2>
                    <p className="text-text mb-8 text-lg">
                        Morgan Omusundi Law Firm is a premier law firm dedicated to providing exceptional legal representation.
                        With over two decades of experience, we have built a reputation for excellence,
                        integrity, and results. Our team of skilled advocates works tirelessly to protect
                        your rights and achieve the best possible outcome for your case.
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                        <li className="flex items-center gap-3 font-medium text-primary">
                            <CheckCircle size={20} className="text-accent flex-shrink-0" />
                            <span>Award-winning legal representation</span>
                        </li>
                        <li className="flex items-center gap-3 font-medium text-primary">
                            <CheckCircle size={20} className="text-accent flex-shrink-0" />
                            <span>Dedicated team of specialists</span>
                        </li>
                        <li className="flex items-center gap-3 font-medium text-primary">
                            <CheckCircle size={20} className="text-accent flex-shrink-0" />
                            <span>Client-focused approach</span>
                        </li>
                        <li className="flex items-center gap-3 font-medium text-primary">
                            <CheckCircle size={20} className="text-accent flex-shrink-0" />
                            <span>Proven track record of success</span>
                        </li>
                    </ul>

                    <a 
                        href="#team" 
                        className="inline-block px-8 py-4 bg-accent text-primary font-semibold border-none cursor-pointer transition-all duration-300 uppercase tracking-wider text-sm hover:bg-accent-hover hover:-translate-y-0.5"
                    >
                        Meet Our Team
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
