'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface BookingSystemProps {
    defaultDestination?: string;
}

export default function BookingSystem({ defaultDestination = '' }: BookingSystemProps) {
    const router = useRouter();
    const [searchData, setSearchData] = useState({
        destination: defaultDestination,
        checkIn: '',
        checkOut: '',
        guests: 2,
        rooms: 1
    });

    const handleSearch = () => {
        console.log('Search data:', searchData);
        router.push('/hotels');
    };

    return (
        <section className="relative -mt-16 z-30 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Smart Search Bar */}
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-primary-50">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Destination - Wider */}
                        <div className="md:col-span-4">
                            <label className="block text-sm font-semibold text-slate-800 mb-2">
                                Destination / Hotel
                            </label>
                            <input
                                type="text"
                                placeholder="City, hotel name..."
                                value={searchData.destination}
                                onChange={(e) => setSearchData({ ...searchData, destination: e.target.value })}
                                className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-slate-800 placeholder-slate-400"
                            />
                        </div>

                        {/* Check-in */}
                        <div className="md:col-span-3">
                            <label className="block text-sm font-semibold text-slate-800 mb-2">
                                Check-in
                            </label>
                            <input
                                type="date"
                                value={searchData.checkIn}
                                onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                                placeholder="dd-mm-yyyy"
                                className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-slate-800"
                            />
                        </div>

                        {/* Check-out */}
                        <div className="md:col-span-3">
                            <label className="block text-sm font-semibold text-slate-800 mb-2">
                                Check-out
                            </label>
                            <input
                                type="date"
                                value={searchData.checkOut}
                                onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                                placeholder="dd-mm-yyyy"
                                className="w-full px-4 py-3.5 border-2 border-slate-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-slate-800"
                            />
                        </div>

                        {/* Guests & Rooms */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-semibold text-slate-800 mb-2">
                                Guests / Rooms
                            </label>
                            <div className="space-y-2">
                                <select
                                    value={searchData.guests}
                                    onChange={(e) => setSearchData({ ...searchData, guests: parseInt(e.target.value) })}
                                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-slate-800 text-sm"
                                >
                                    {[1, 2, 3, 4, 5, 6].map(n => (
                                        <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                                    ))}
                                </select>
                                <select
                                    value={searchData.rooms}
                                    onChange={(e) => setSearchData({ ...searchData, rooms: parseInt(e.target.value) })}
                                    className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors text-slate-800 text-sm"
                                >
                                    {[1, 2, 3, 4].map(n => (
                                        <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Search Button - Corporate Blue with Gold Hover */}
                    <button
                        onClick={handleSearch}
                        className="w-full mt-6 py-4 bg-primary-500 text-white rounded-lg font-bold text-lg hover:bg-gold-400 hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                        <span>Search Hotels</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
