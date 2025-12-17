import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section 
            id="hero" 
            className="relative h-screen min-h-[600px] bg-cover bg-center flex items-center text-white"
            style={{ backgroundImage: "url('/hero-bg.png')" }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(15,23,42,0.7)] to-[rgba(15,23,42,0.5)]"></div>
            <div className="container mx-auto relative z-10 max-w-[800px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-[4rem] mb-6 text-white font-heading">
                        Justice, Integrity, <br />
                        <span className="text-accent">Excellence.</span>
                    </h1>
                    <p className="text-xl mb-10 max-w-[600px] text-text-light">
                        Defending your rights with unwavering dedication and legal expertise.
                        We are committed to delivering results that matter.
                    </p>
                    <div className="flex gap-4 flex-col md:flex-row items-start">
                        <Link 
                            to="/contact" 
                            className="inline-block px-8 py-4 bg-accent text-primary font-semibold border-none cursor-pointer transition-all duration-300 uppercase tracking-wider text-sm hover:bg-accent-hover hover:-translate-y-0.5"
                        >
                            Contact Us <ArrowRight size={16} style={{ marginLeft: '8px', display: 'inline' }} />
                        </Link>
                        <Link 
                            to="/practice" 
                            className="inline-block px-8 py-4 bg-transparent text-accent font-semibold border-2 border-accent cursor-pointer transition-all duration-300 uppercase tracking-wider text-sm hover:bg-accent hover:text-primary"
                        >
                            Our Practice Areas <ArrowRight size={16} style={{ marginLeft: '8px', display: 'inline' }} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
