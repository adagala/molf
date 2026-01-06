import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <img src="/logo.png?v=6" alt="MOLF Logo" className="logo-image" />
                            <span>Morgan Omusundi Law Firm</span>
                        </Link>
                        <p>
                            Providing exceptional legal representation with integrity and dedication since 2000.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/practice">Practice Areas</Link>
                            <Link to="/team">Our Team</Link>
                            <Link to="/contact">Contact</Link>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Practice Areas</h3>
                        <ul>
                            <Link to="/practice">Personal Injury & Compensation</Link>
                            <Link to="/practice">Conveyancing & Property Law</Link>
                            <Link to="/practice">Succession & Estate Administration</Link>
                            <Link to="/practice">Criminal Defence & Advisory</Link>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div>&copy; {new Date().getFullYear()} Morgan Omusundi Law Firm. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
