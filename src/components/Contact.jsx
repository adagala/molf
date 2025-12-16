import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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
                                <p>123 Legal Avenue, Suite 500<br />Eldoret, Kenya</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p>+254 (555) 123-4567<br />+254 (555) 987-6543</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>info@morganomusundi.com<br />support@morganomusundi.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-circle">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3>Office Hours</h3>
                                <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: Closed</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder="Your Phone" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-block">Send Message</button>
                    </motion.form>
                </div>

                <motion.div
                    className="map-container"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.06232679248!2d35.2697801!3d0.5142775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178101ae37f9f535%3A0x62a81d1da9e56a!2sEldoret!5e0!3m2!1sen!2ske!4v1701500000000!5m2!1sen!2ske"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Morgan Omusundi Law Firm Location"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
