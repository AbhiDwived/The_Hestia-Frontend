'use client';
import { useState } from 'react';

interface ContactSectionProps {
    phone: string;
    email: string;
    address: string;
}

export default function ContactSection({ phone, email, address }: ContactSectionProps) {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Message sent! We will contact you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="py-12 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-slate-800">Contact Us</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="text-2xl mr-4">📞</span>
                                <div>
                                    <p className="font-semibold text-slate-800">Phone</p>
                                    <a href={`tel:${phone}`} className="text-primary-600 hover:underline">{phone}</a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl mr-4">✉️</span>
                                <div>
                                    <p className="font-semibold text-slate-800">Email</p>
                                    <a href={`mailto:${email}`} className="text-primary-600 hover:underline">{email}</a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-2xl mr-4">📍</span>
                                <div>
                                    <p className="font-semibold text-slate-800">Address</p>
                                    <p className="text-slate-600">{address}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="bg-slate-50 p-6 rounded-lg">
                        <h3 className="font-bold text-lg mb-4 text-slate-800">Send us a message</h3>
                        <div className="space-y-4">
                            <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required />
                            <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required />
                            <textarea placeholder="Your Message" rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-2 border rounded-lg" required></textarea>
                            <button type="submit" className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
