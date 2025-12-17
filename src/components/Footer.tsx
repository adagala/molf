import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary-light text-text-light pt-16 pb-8 border-t border-white/5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-12">
                    <div>
                        <Link to="/" className="flex items-center gap-2 font-heading text-2xl font-bold text-accent mb-4">
                            <Scale className="text-accent" size={28} />
                            <span>Morgan Omusundi Law Firm</span>
                        </Link>
                        <p className="leading-relaxed text-sm">
                            Providing exceptional legal representation with integrity and dedication since 2000.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white text-lg mb-6">Quick Links</h3>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/" className="text-text-light text-sm hover:text-accent hover:pl-1 transition-all">Home</Link></li>
                            <li><Link to="/about" className="text-text-light text-sm hover:text-accent hover:pl-1 transition-all">About Us</Link></li>
                            <li><Link to="/practice" className="text-text-light text-sm hover:text-accent hover:pl-1 transition-all">Practice Areas</Link></li>
                            <li><Link to="/team" className="text-text-light text-sm hover:text-accent hover:pl-1 transition-all">Our Team</Link></li>
                            <li><Link to="/contact" className="text-text-light text-sm hover:text-accent hover:pl-1 transition-all">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-lg mb-6">Practice Areas</h3>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#" className="text-text-light text-sm hover:text-accent hover:pl-1 transition-all">Family Law</a></li>
                            <li><a href="#" className="text-text-light text-sm hover:text-accent hover:pl-1 transition-all">Criminal Defense</a></li>
                            <li><a href="#" className="text-text-light text-sm hover:text-accent hover:pl-1 transition-all">Real Estate</a></li>
                            <li><a href="#" className="text-text-light text-sm hover:text-accent hover:pl-1 transition-all">Personal Injury</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-lg mb-6">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="w-9 h-9 bg-white/5 flex justify-center items-center rounded-full transition-all duration-300 hover:bg-accent hover:text-primary hover:-translate-y-1">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/5 flex justify-center items-center rounded-full transition-all duration-300 hover:bg-accent hover:text-primary hover:-translate-y-1">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/5 flex justify-center items-center rounded-full transition-all duration-300 hover:bg-accent hover:text-primary hover:-translate-y-1">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/5 flex justify-center items-center rounded-full transition-all duration-300 hover:bg-accent hover:text-primary hover:-translate-y-1">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-center sm:text-left">
                    <p>&copy; {new Date().getFullYear()} Morgan Omusundi Law Firm. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
