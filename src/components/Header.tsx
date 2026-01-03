import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from '../types';
import './Header.css';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks: NavLink[] = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Practice Areas', path: '/practice' },
        { name: 'Team', path: '/team' },
        { name: 'Contact', path: '/contact' },
    ];

    // Always show dark header on non-home pages
    const headerClass = `header ${scrolled || !isHome ? 'scrolled' : ''}`;

    return (
        <header className={headerClass}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <img src="/logo.png?v=6" alt="MOLF Logo" className="logo-image" />
                    <span>Morgan Omusundi Law Firm</span>
                </Link>

                <nav className="desktop-nav">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.path}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.nav
                            className="mobile-nav"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ul>
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} onClick={() => setIsOpen(false)}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Header;
