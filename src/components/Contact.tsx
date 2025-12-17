import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 pt-48 min-h-[80vh] bg-primary text-white">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h4 className="text-accent uppercase tracking-wider text-sm font-semibold mb-2">Get In Touch</h4>
                    <h2 className="text-4xl font-heading font-bold text-white mb-4">Contact Us</h2>
                    <p className="max-w-[600px] mx-auto text-text-light">
                        Schedule a free consultation with one of our experienced advocates today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 mt-12">
                    <motion.div
                        className="flex flex-col gap-8"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-start gap-6">
                            <div className="w-[50px] h-[50px] bg-[rgba(212,175,55,0.1)] text-accent rounded-full flex justify-center items-center flex-shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading mb-2 text-white">Our Office</h3>
                                <p className="text-text-light leading-relaxed">123 Legal Avenue, Suite 500<br />Eldoret, Kenya</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-[50px] h-[50px] bg-[rgba(212,175,55,0.1)] text-accent rounded-full flex justify-center items-center flex-shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading mb-2 text-white">Phone</h3>
                                <p className="text-text-light leading-relaxed">+254 (555) 123-4567<br />+254 (555) 987-6543</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-[50px] h-[50px] bg-[rgba(212,175,55,0.1)] text-accent rounded-full flex justify-center items-center flex-shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading mb-2 text-white">Email</h3>
                                <p className="text-text-light leading-relaxed">info@morganomusundi.com<br />support@morganomusundi.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6">
                            <div className="w-[50px] h-[50px] bg-[rgba(212,175,55,0.1)] text-accent rounded-full flex justify-center items-center flex-shrink-0">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-heading mb-2 text-white">Office Hours</h3>
                                <p className="text-text-light leading-relaxed">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: Closed</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="bg-white p-12 rounded-lg text-text"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="mb-6">
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                required 
                                className="w-full p-4 border border-[#e2e8f0] rounded font-body text-base transition-all duration-300 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
                            />
                        </div>
                        <div className="mb-6">
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                required 
                                className="w-full p-4 border border-[#e2e8f0] rounded font-body text-base transition-all duration-300 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
                            />
                        </div>
                        <div className="mb-6">
                            <input 
                                type="tel" 
                                placeholder="Your Phone" 
                                className="w-full p-4 border border-[#e2e8f0] rounded font-body text-base transition-all duration-300 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
                            />
                        </div>
                        <div className="mb-6">
                            <textarea 
                                placeholder="Message" 
                                rows={5} 
                                required
                                className="w-full p-4 border border-[#e2e8f0] rounded font-body text-base transition-all duration-300 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)]"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full inline-block px-8 py-4 bg-accent text-primary font-semibold border-none cursor-pointer transition-all duration-300 uppercase tracking-wider text-sm hover:bg-accent-hover hover:-translate-y-0.5"
                        >
                            Send Message
                        </button>
                    </motion.form>
                </div>

                <motion.div
                    className="mt-16 rounded-lg overflow-hidden border border-[rgba(212,175,55,0.2)]"
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
                        allowFullScreen
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
