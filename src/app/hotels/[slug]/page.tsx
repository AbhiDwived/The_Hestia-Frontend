'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

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

// Rich Data for Hotels
const hotelsData: Record<string, any> = {
    'hestia-stay-kasana': {
        name: 'Hestia Stay, Kasana',
        subtitle: 'Experience the serenity of Kasana with robust luxury.',
        image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=1920&h=1080&fit=crop',
    },
    'hestia-hotel-&-Restaurant-Knowledge-Park-3': {
        name: 'Hestia Hotel & Restaurant, Knowledge Park-3',
        hideSimilarProperties: true,
        subtitle: 'Located in the heart of Knowledge Park, offering modern amenities.',
        image: '/hestia-hotel-&-Restaurant-Knowledge-Park-3/Banner1.jpg',
        rooms: [
            {
                name: 'Deluxe Room', // Was Small Suite
                description: 'Cozy suite perfect for couples with elegant furnishing and balcony.',
                beds: 2,
                guests: 3,
                price: 2999,
                image: '/Hestia Images/Room image/Single Bedroom.jpg'
            },
            {
                name: 'Super Deluxe Room', // Was Double Room
                description: 'Comfortable and spacious room with modern amenities and city view.',
                beds: 3,
                guests: 4,
                price: 3500,
                image: '/Hestia Images/Room image/Double Bedroom.jpg'
            }
        ]
    },
    'the-hestia-hotel-dwarka': {
        name: 'The Hestia Hotel, Dwarka',
        subtitle: 'A premium stay in Dwarka with world-class hospitality.',
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&h=1080&fit=crop',
    },
    'the-hestia-hotel-sector-132': {
        name: 'The Hestia Hotel, Sector 132',
        subtitle: 'Modern luxury in Noida Sector 132. Ideal for corporate stays.',
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&h=1080&fit=crop',
    }
};

export default function HotelPage({ params }: { params: { slug: string } }) {
    const { user } = useAuth();
    const [scrolled, setScrolled] = useState(false);
    const slug = params.slug;

    // Robust lookup: normalize both component slug and data keys
    const normalize = (str: string) => decodeURIComponent(str).toLowerCase();
    const foundKey = Object.keys(hotelsData).find(key => normalize(key) === normalize(slug));
    const hotel = foundKey ? hotelsData[foundKey] : null;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fallback for unknown hotels or "Coming Soon"
    const currentHotel = hotel || {
        name: 'The Hestia Hotels',
        subtitle: 'Experience luxury and comfort.',
        image: undefined // Use default
    };

    return (
        <div className="min-h-screen bg-white">
            {/* 1. Navbar */}
            <Navbar scrolled={scrolled} user={user} />

            {/* 2. Banner with Specific Hotel Data */}
            <Banner
                title={currentHotel.name}
                subtitle={currentHotel.subtitle}
                image={currentHotel.image}
            />

            {/* 3. Booking System Pre-filled */}
            <BookingSystem defaultDestination={currentHotel.name} />

            {/* 4. Rooms with Hotel Name Header */}
            <Rooms hotelName={currentHotel.name} customRooms={currentHotel.rooms} />

            {/* 5. Accommodations (Cross-sell) */}
            {!currentHotel.hideSimilarProperties && (
                <Accommodations title="Explore Our Other Properties" />
            )}

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
