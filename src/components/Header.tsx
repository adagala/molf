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

    // Close mobile menu on window resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    const navLinks: NavLink[] = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Practice Areas', path: '/practice' },
        { name: 'Team', path: '/team' },
        { name: 'Contact', path: '/contact' },
    ];

    // Always show dark header on non-home pages
    const headerClass = `header ${scrolled || !isHome ? 'scrolled' : ''}`;

    const navVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.header
            className={headerClass}
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <div className="container header-container">
                <Link to="/" className="logo">
                    <img src="/logo.png?v=6" alt="MOLF Logo" className="logo-image" />
                    <div className="logo-text-container">
                        <div className="logo-firm-name">Morgan Omusundi</div>
                        <div className="logo-subtitle">Law Firm Advocates</div>
                    </div>
                </Link>

                <nav className="desktop-nav">
                    <motion.ul
                        variants={navVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <motion.li key={link.name} variants={itemVariants} className="nav-link-container">
                                    <Link
                                        to={link.path}
                                        className={isActive ? 'active' : ''}
                                    >
                                        {link.name}
                                    </Link>
                                    {isActive && (
                                        <motion.div
                                            className="active-indicator"
                                            layoutId="activeIndicator"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </motion.li>
                            );
                        })}
                    </motion.ul>
                </nav>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.nav
                            className="mobile-nav"
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <ul>
                                {navLinks.map((link, index) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={location.pathname === link.path ? 'active' : ''}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;
