import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from '../types';

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
    const headerBg = scrolled || !isHome ? 'bg-primary shadow-md' : 'bg-transparent';

    return (
        <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 text-white ${headerBg}`}>
            <div className="container flex justify-between items-center mx-auto my-0">
                <Link to="/" className="flex items-center gap-2 font-heading text-2xl font-bold text-accent">
                    <Scale className="text-accent" size={32} />
                    <span>Morgan Omusundi Law Firm</span>
                </Link>

                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link 
                                    to={link.path}
                                    className="text-sm font-medium uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button 
                    className="md:hidden bg-transparent border-none cursor-pointer" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.nav
                            className="absolute top-full left-0 w-full bg-primary p-8 shadow-md md:hidden"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ul className="flex flex-col gap-6 text-center">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            to={link.path} 
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-medium"
                                        >
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
