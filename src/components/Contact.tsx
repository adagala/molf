import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="section-subtitle">Get In Touch</h4>
                    <h2 className="section-title">Contact Us</h2>
                    <p className="section-description">
                        Schedule a free consultation with one of our experienced advocates today.
                    </p>
                </div>

                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="info-item">
                            <div className="icon-circle">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3>Our Office</h3>
                                <p>
                                    Laneens Center, 2nd Floor, Suite No. S.04<br />
                                    Elgeyo Street, Next to Sirikwa/Cicada Hotel<br />
                                    Eldoret, Kenya<br />
                                    <strong>P.O. Box 9919-30100, Eldoret</strong>
                                </p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p>
                                    <a href='tel:+254733366129'>+254 733 366 129</a>
                                </p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>
                                    <a href='mailto:morganomusundilawfirm@yahoo.com'>morganomusundilawfirm@yahoo.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3>Office Hours</h3>
                                <p>Mon - Fri: 8:00 AM - 5:00 PM<br />Sat: 9:00 AM - 1:00 PM<br />Sun: Closed</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle">
                                <MessageCircle size={24} />
                            </div>
                            <div>
                                <h3>WhatsApp</h3>
                                <p>
                                    <a href="https://wa.me/254733366129" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Click to chat: 0733366129</a>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="map-container-inline"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7979.307643579121!2d35.26656925678253!3d0.5202877540962668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101e40379f4eb%3A0xc4239b531afd8948!2sLANEENS!5e0!3m2!1sen!2ske!4v1767422873317!5m2!1sen!2ske"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '500px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Morgan Omusundi Law Firm Location"
                        ></iframe> </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
