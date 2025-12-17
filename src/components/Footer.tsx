import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <Scale className="logo-icon" size={28} />
                            <span>Morgan Omusundi Law Firm</span>
                        </Link>
                        <p>
                            Providing exceptional legal representation with integrity and dedication since 2000.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/practice">Practice Areas</Link></li>
                            <li><Link to="/team">Our Team</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Practice Areas</h3>
                        <ul>
                            <li><a href="#practice">Personal Injury & Compensation</a></li>
                            <li><a href="#practice">Conveyancing & Property Law</a></li>
                            <li><a href="#practice">Succession & Estate Administration</a></li>
                            <li><a href="#practice">Criminal Defence & Advisory</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="#"><Facebook size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Linkedin size={20} /></a>
                            <a href="#"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Morgan Omusundi Law Firm. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
