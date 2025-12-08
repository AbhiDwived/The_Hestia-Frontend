'use client';

import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Subscribe email:', email);
        setEmail('');
        // TODO: Implement subscribe functionality
    };

    return (
        <footer className="py-16 px-6 bg-primary-700 text-white">
            <div className="mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Description Column */}
                    <div className="lg:col-span-1">
                        <h3 className="font-bold text-xl mb-4 text-white">Hestia Hotel and Restaurant</h3>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Experience luxury and comfort at Hestia Hotel and Restaurant in Greater Noida. Your perfect stay awaits with world-class amenities and exceptional hospitality.
                        </p>
                    </div>

                    {/* Information Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-white">Information</h3>
                        <ul className="space-y-3 text-white/80 text-sm">
                            <li className="flex items-start">
                                <span className="mr-2 mt-1 text-gold-400">📍</span>
                                <span>Plot No- 14/29 A, near Pari Chowk, Knowledge Park III, Greater Noida, Uttar Pradesh 201310</span>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-gold-400">✉️</span>
                                <a href="mailto:info@hestiahotel.com" className="hover:text-gold-400 transition-colors">
                                    info@hestiahotel.com
                                </a>
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2 text-gold-400">📞</span>
                                <a href="tel:+919211987979" className="hover:text-gold-400 transition-colors">
                                    +91 9211987979
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Pages Links Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-white">Pages Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-white/80 hover:text-gold-400 transition-colors text-sm">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#blog" className="text-white/80 hover:text-gold-400 transition-colors text-sm">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-white/80 hover:text-gold-400 transition-colors text-sm">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#rooms" className="text-white/80 hover:text-gold-400 transition-colors text-sm">
                                    Room List
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Subscribe Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-4 text-white">Subscribe</h3>
                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-gold-400 transition-colors text-sm"
                                required
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2.5 bg-gold-400 text-white rounded-lg font-semibold hover:bg-gold-500 transition-colors text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/80 text-sm">
                            Copyright © {new Date().getFullYear()} Hestia Hotel and Restaurant
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a href="#faq" className="text-white/80 hover:text-gold-400 transition-colors text-sm">
                                FAQ
                            </a>
                            <a href="#terms" className="text-white/80 hover:text-gold-400 transition-colors text-sm">
                                Terms of Use
                            </a>
                            <a href="#privacy" className="text-white/80 hover:text-gold-400 transition-colors text-sm">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
