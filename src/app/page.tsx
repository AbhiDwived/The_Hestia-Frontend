'use client';

import { useEffect, useState } from 'react';
import { useAppSelector } from '@/store/hooks';

// Import all home page components
import Navbar from '@/components/home/Navbar';
import Banner from '@/components/home/Banner';
import BookingSystem from '@/components/home/BookingSystem';
import Rooms from '@/components/home/Rooms';
import Accommodations from '@/components/home/Accommodations';
import OurFood from '@/components/home/OurFood';
import ExpertMembers from '@/components/home/ExpertMembers';
import Reviews from '@/components/home/Reviews';
import AwesomePlace from '@/components/home/AwesomePlace';
import OurBlog from '@/components/home/OurBlog';
import Footer from '@/components/home/Footer';

export default function HomePage() {
    const user = useAppSelector((state) => state.auth.user);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* 1. Navbar */}
            <Navbar scrolled={scrolled} user={user} />

            {/* 2. Banner/Hero */}
            <Banner />

            {/* 3. Booking System */}
            <BookingSystem />

             {/* 4. Accommodations */}
            <Accommodations />

            {/* 5. Rooms */}
            <Rooms />

           

            {/* 6. Our Food */}
            <OurFood />

            {/* 7. Expert Members */}
            <ExpertMembers />

            {/* 8. Reviews */}
            <Reviews />

            {/* 9. Awesome Place */}
            <AwesomePlace />

            {/* 10. Our Blog */}
            <OurBlog />

            {/* 11. Footer */}
            <Footer />
        </div>
    );
}
