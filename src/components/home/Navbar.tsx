'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface NavbarProps {
    scrolled?: boolean;
    user?: any;
}

export default function Navbar({ scrolled = false, user }: NavbarProps) {
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [hotelsDropdownOpen, setHotelsDropdownOpen] = useState(false);

    const hotels = [
        { name: 'Hestia Stay, Kasana', link: '/hotels/hestia-stay-kasana' },
        { name: 'Hestia Hotel & Restaurant, Knowledge Park-3', link: '/hotels/hestia-hotel-&-Restaurant-Knowledge-Park-3' },
        { name: 'The Hestia Hotel, Dwarka', link: '/hotels/the-hestia-hotel-dwarka' },
        { name: 'The Hestia Hotel, Sector 132', link: '/hotels/the-hestia-hotel-sector-132' },
        { name: 'Fifth Property – Coming Soon', link: '#', comingSoon: true },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-700 shadow-lg">
                <div className="mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo - Left Side */}
                    <div className="flex items-center space-x-3 cursor-pointer" onClick={() => router.push('/')}>
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-700 to-primary-600 rounded-lg flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-2xl">H</span>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-white">The Hestia Hotels</span>
                        </div>
                    </div>

                    {/* Right Side - Navigation + Hamburger */}
                    <div className="flex items-center space-x-8">
                        {/* Desktop Navigation Links */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <a href="/" className="text-white/90 hover:text-gold-400 font-medium transition-colors">Home</a>

                            {/* Hotels Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setHotelsDropdownOpen(true)}
                                onMouseLeave={() => setHotelsDropdownOpen(false)}
                            >
                                <a href="#hotels" className="text-white/90 hover:text-gold-400 font-medium transition-colors flex items-center space-x-1">
                                    <span>Hotels</span>
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-200 ${hotelsDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </a>

                                {/* Dropdown Menu */}
                                {hotelsDropdownOpen && (
                                    <div className="absolute top-full left-0 pt-4 -mt-2">
                                        <div className="w-72 bg-white rounded-lg shadow-xl overflow-hidden">
                                            <div className="py-2">
                                                {hotels.map((hotel, index) => (
                                                    <a
                                                        key={index}
                                                        href={hotel.link}
                                                        className={`block px-4 py-3 text-slate-700 hover:bg-primary-50 hover:text-primary-700 transition-all ${hotel.comingSoon ? 'opacity-60 cursor-default' : ''
                                                            }`}
                                                        onClick={(e) => hotel.comingSoon && e.preventDefault()}
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <span className="font-medium">{hotel.name}</span>
                                                            {hotel.comingSoon && (
                                                                <span className="text-xs bg-gold-100 text-gold-700 px-2 py-1 rounded-full">Soon</span>
                                                            )}
                                                        </div>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <a href="#rooms" className="text-white/90 hover:text-gold-400 font-medium transition-colors">Rooms</a>
                            <a href="#about" className="text-white/90 hover:text-gold-400 font-medium transition-colors">About</a>
                            <a href="#contact" className="text-white/90 hover:text-gold-400 font-medium transition-colors">Contact</a>

                            {user ? (
                                <button
                                    onClick={() => router.push('/hotels')}
                                    className="px-6 py-2.5 bg-gold-400 text-white rounded-lg font-semibold hover:bg-gold-500 hover:shadow-lg transition-all duration-300"
                                >
                                    Dashboard
                                </button>
                            ) : (
                                <button
                                    onClick={() => router.push('/login')}
                                    className="px-6 py-2.5 bg-gold-400 text-white rounded-lg font-semibold hover:bg-gold-500 hover:shadow-lg transition-all duration-300"
                                >
                                    Login
                                </button>
                            )}
                        </div>

                        {/* Hamburger Menu Button - Always Visible */}
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="p-2 text-white hover:text-gold-400 transition-colors hover:bg-white/10 rounded-lg"
                            aria-label="Open menu"
                        >
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-6 border-b border-slate-200">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-primary-600 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">H</span>
                            </div>
                            <span className="text-xl font-bold text-primary-700">The Hestia</span>
                        </div>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="p-2 text-slate-700 hover:text-primary-700 transition-colors hover:bg-slate-100 rounded-lg"
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Sidebar Navigation */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <nav className="space-y-2">
                            <a
                                href="/"
                                className="block px-4 py-3 text-slate-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg font-medium transition-all"
                                onClick={() => setSidebarOpen(false)}
                            >
                                🏠 Home
                            </a>
                            <a
                                href="#hotels"
                                className="block px-4 py-3 text-slate-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg font-medium transition-all"
                                onClick={() => setSidebarOpen(false)}
                            >
                                🏨 Hotels
                            </a>
                            <a
                                href="#rooms"
                                className="block px-4 py-3 text-slate-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg font-medium transition-all"
                                onClick={() => setSidebarOpen(false)}
                            >
                                🛏️ Rooms
                            </a>
                            <a
                                href="#about"
                                className="block px-4 py-3 text-slate-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg font-medium transition-all"
                                onClick={() => setSidebarOpen(false)}
                            >
                                ℹ️ About
                            </a>
                            <a
                                href="#contact"
                                className="block px-4 py-3 text-slate-700 hover:text-primary-700 hover:bg-primary-50 rounded-lg font-medium transition-all"
                                onClick={() => setSidebarOpen(false)}
                            >
                                📞 Contact
                            </a>
                        </nav>

                        {/* Divider */}
                        <div className="my-6 border-t border-slate-200"></div>

                        {/* User Section */}
                        {user ? (
                            <button
                                onClick={() => {
                                    router.push('/hotels');
                                    setSidebarOpen(false);
                                }}
                                className="w-full px-4 py-3 bg-gold-400 text-white rounded-lg font-semibold hover:bg-gold-500 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>📊</span>
                                <span>Dashboard</span>
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    router.push('/login');
                                    setSidebarOpen(false);
                                }}
                                className="w-full px-4 py-3 bg-gold-400 text-white rounded-lg font-semibold hover:bg-gold-500 transition-all duration-300 flex items-center justify-center space-x-2"
                            >
                                <span>🔐</span>
                                <span>Login</span>
                            </button>
                        )}
                    </div>

                    {/* Sidebar Footer */}
                    <div className="p-6 border-t border-slate-200 bg-slate-50">
                        <p className="text-sm text-slate-600 text-center">
                            © 2025 The Hestia Hotels
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
