'use client';

import { useEffect, useState } from 'react';
import { useAppSelector } from '@/store/hooks';

// Import hotel-specific components only
import Navbar from '@/components/home/Navbar';
import Banner from '@/components/home/Banner';
import BookingSystem from '@/components/home/BookingSystem';
import HotelDetails from '@/components/home/HotelDetails';
import PhotoGallery from '@/components/hotel/PhotoGallery';
import AmenitiesGrid from '@/components/hotel/AmenitiesGrid';
import Rooms from '@/components/home/Rooms';
import RestaurantSection from '@/components/hotel/RestaurantSection';
import ReviewsSection from '@/components/hotel/ReviewsSection';
import LocationMap from '@/components/hotel/LocationMap';
import PoliciesSection from '@/components/hotel/PoliciesSection';
import ContactSection from '@/components/hotel/ContactSection';
import Footer from '@/components/home/Footer';

// Rich Data for Hotels
const hotelsData: Record<string, any> = {
    'hestia-stay-kasana': {
        name: 'Hestia Stay Kasana – Kasna Site 4, Greater Noida',
        subtitle: 'A strategically positioned hospitality asset offering comfort, functionality, and service reliability.',
        image: '/hestia-stay-kasana/banner1.jpg',
        description: 'Hestia Stay is a strategically positioned hospitality asset offering a balanced blend of comfort, functionality, and service reliability. Located in Kasna Site 4 near the Oppo Factory, the property is well-aligned to cater to corporate travellers, industrial visitors, and short-stay guests seeking dependable accommodation in the Greater Noida industrial corridor.\n\nWith a compact yet well-curated inventory of 16 thoughtfully designed rooms, the hotel is equipped to deliver a streamlined guest experience with a strong emphasis on operational discipline and service consistency.',
        location: {
            area: 'Kasna Site 4, Greater Noida',
            distance: 'Near Oppo Factory',
            accessibility: 'Adjacent to major corporate hubs and industrial zones, ensuring smooth accessibility for industrial clients, vendors, and corporate partners'
        },
        gallery: [
            '/hestia-stay-kasana/banner1.jpg',
            '/hestia-stay-kasana/IMG-20251208-WA0088.jpg',
            '/hestia-stay-kasana/IMG-20251208-WA0089.jpg',
            '/hestia-stay-kasana/IMG-20251208-WA0090.jpg',
            '/hestia-stay-kasana/IMG-20251208-WA0091.jpg',
            '/hestia-stay-kasana/IMG-20251208-WA0092.jpg',
            '/hestia-stay-kasana/IMG-20251208-WA0093.jpg',
            '/hestia-stay-kasana/IMG-20251208-WA0094.jpg',
            '/hestia-stay-kasana/IMG-20251208-WA0095.jpg',
            '/hestia-stay-kasana/IMG-20251208-WA0096.jpg'
        ],
        amenities: [
            { name: 'LED TV', icon: 'TV' },
            { name: 'Hot Water', icon: 'AC' },
            { name: 'Double Bed', icon: 'RoomService' },
            { name: 'Balcony Rooms', icon: 'Parking' },
            { name: 'Garden Area', icon: 'Restaurant' },
            { name: 'Daily Housekeeping', icon: 'Laundry' },
            { name: 'Security', icon: 'Security' },
            { name: 'Free Parking', icon: 'Parking' }
        ],
        features: [
            '16 Fully Appointed Rooms: Designed to maximize comfort and utility for both business and leisure travellers',
            'LED Television in all rooms',
            'Geyser for round-the-clock hot water',
            'Double Bed with premium linen',
            'Balcony Rooms available for enhanced guest experience',
            'Neat and clean washrooms with standard toiletries',
            'Daily housekeeping aligned to quality benchmarks',
            'Well-maintained garden area offering guests a refreshing environment',
            'Prime location adjacent to major corporate hubs and Oppo Factory'
        ],
        rooms: [
            {
                name: 'Standard Room',
                description: 'Well-appointed room with LED TV, geyser, and double bed with premium linen.',
                beds: 1,
                guests: 2,
                price: 2999,
                image: '/hestia-stay-kasana/IMG-20251208-WA0096.jpg'
            },
            {
                name: 'Balcony Room',
                description: 'Enhanced room with private balcony, LED TV, hot water, and premium amenities.',
                beds: 1,
                guests: 2,
                price: 3499,
                image: '/hestia-stay-kasana/IMG-20251208-WA0090.jpg'
            }
        ],
        reviews: [
            { name: 'Rajesh Kumar', rating: 5, comment: 'Perfect for business stay near Oppo Factory. Clean and comfortable rooms!', date: 'March 2024' },
            { name: 'Amit Singh', rating: 5, comment: 'Great location for industrial visits. Professional service and well-maintained property.', date: 'February 2024' },
            { name: 'Priya Sharma', rating: 4, comment: 'Good value for money. The garden area is a nice touch.', date: 'January 2024' },
            { name: 'Vikram Patel', rating: 5, comment: 'Excellent for corporate travellers. Balcony room was very comfortable!', date: 'December 2023' }
        ],
        policies: {
            checkIn: '1:00 PM',
            checkOut: '11:00 AM',
            cancellation: 'Free cancellation up to 24 hours before check-in',
            rules: [
                'Valid ID proof required at check-in',
                'Smoking is prohibited in rooms',
                'Pets are not allowed',
                'Outside food and beverages not permitted',
                'Guests are responsible for any damage to hotel property'
            ]
        },
        contact: {
            phone: '+91 9058522279',
            email: 'info@hestiahotels.com',
            address: 'Kasna Site 4, Near Oppo Factory, Greater Noida, Uttar Pradesh'
        },
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.5!2d77.4950!3d28.4580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e4a8f8a8a1%3A0x1234567890!2sKasna%20Site%204%2C%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1234567890',
        nearbyPlaces: [
            'Oppo Factory - 0.5 km',
            'Corporate Hubs - 1 km',
            'Industrial Zones - 2 km',
            'Greater Noida - 5 km',
            'Kasna Metro Station - 3 km'
        ]
    },
    'hestia-hotel-&-Restaurant-Knowledge-Park-3': {
        name: 'Hestia Hotel & Restaurant – Knowledge Park III, Greater Noida',
        subtitle: 'A flagship asset under DSY Hospitality, delivering elevated guest experiences through strategic location and service excellence.',
        image: '/hestia-hotel-&-Restaurant-Knowledge-Park-3/Banner1.jpg',
        accommodationInfo: 'Total 36 Rooms - 27 Deluxe Rooms & 9 Super Deluxe Rooms',
        description: 'Hestia Hotel & Restaurant is a flagship asset under the DSY Hospitality portfolio, positioned to deliver an elevated guest experience through its strategic location, contemporary facilities, and service-driven operational framework. Situated in Knowledge Park III near the Expo Centre, the property serves as a preferred choice for corporate travellers, exhibition delegates, families, and leisure guests.\n\nThe hotel has been engineered to uphold best-in-class service delivery, with a focus on comfort, consistency, and customer satisfaction. The dedicated restaurant enhances the overall value proposition, offering a curated dining experience that complements the hotel\'s accommodation standards.',
        location: {
            area: 'Knowledge Park III, Greater Noida',
            distance: 'Just 1.5 km from the Expo Centre',
            accessibility: 'Excellent accessibility to corporate parks, educational hubs, metro stations, and commercial zones'
        },
        gallery: [
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0016.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0017.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0018.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0019.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0021.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0025.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0026.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0030.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0031.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0032.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0033.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0034.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0035.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0037.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0040.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0041.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0042.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0043.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0051.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0052.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0053.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0054.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0057.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0058.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0059.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0060.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0061.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0062.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0063.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0064.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0065.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0066.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0067.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0068.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0069.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0070.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0071.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0072.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0073.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0074.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0076.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0077.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0078.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0079.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0083.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0084.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0085.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251208-WA0086.jpg',
            '/hestia-hotel-&-Restaurant-Knowledge-Park-3/WhatsApp Image 2025-11-25 at 09.49.56_4ad75dfe.jpg'
        ],
        amenities: [
            { name: 'Free WiFi', icon: 'WiFi' },
            { name: 'Air Conditioning', icon: 'AC' },
            { name: 'LED TV', icon: 'TV' },
            { name: 'Restaurant', icon: 'Restaurant' },
            { name: 'Free Parking', icon: 'Parking' },
            { name: 'Room Service', icon: 'RoomService' },
            { name: 'Security', icon: 'Security' },
            { name: 'Laundry', icon: 'Laundry' }
        ],
        features: [
            'Accommodation: Total 36 Rooms - 27 Deluxe Rooms & 9 Super Deluxe Rooms',
            'Well-Appointed Rooms: Modern, comfortable accommodation equipped with essential amenities',
            'In-Room Comforts: High-quality bedding, LED TV, air-conditioning, Wi-Fi, hygienic washrooms',
            'On-Site Restaurant: Dedicated dining outlet serving freshly prepared dishes',
            '24/7 front office support',
            'Strong emphasis on cleanliness and hygiene',
            'Guest-first service approach',
            'Safety & Compliance: Secure premises with disciplined focus on guest privacy'
        ],
        rooms: [
            {
                name: 'Deluxe Room',
                description: 'Cozy suite perfect for couples with elegant furnishing and balcony.',
                beds: 2,
                guests: 3,
                price: 2999,
                image: '/Hestia Images/Room image/Single Bedroom.jpg'
            },
            {
                name: 'Super Deluxe Room',
                description: 'Comfortable and spacious room with modern amenities and city view.',
                beds: 3,
                guests: 4,
                price: 3500,
                image: '/Hestia Images/Room image/Double Bedroom.jpg'
            }
        ],
        restaurant: {
            name: 'Hestia Restaurant',
            description: 'A dedicated dining outlet serving a variety of freshly prepared dishes, suitable for corporate guests, walk-ins, and long-stay clients.',
            cuisine: ['Indian', 'Continental', 'Chinese'],
            timings: '7:00 AM - 11:00 PM',
            image: '/hestia-hotel-&-Restaurant-Knowledge-Park-3/IMG-20251206-WA0037.jpg'
        },
        reviews: [
            { name: 'Rajesh Kumar', rating: 5, comment: 'Excellent location near Expo Centre. Clean rooms and great service!', date: 'March 2024' },
            { name: 'Priya Sharma', rating: 5, comment: 'Perfect for business travelers. Professional staff and good amenities.', date: 'February 2024' },
            { name: 'Amit Singh', rating: 4, comment: 'Good value for money. Restaurant food is delicious.', date: 'January 2024' },
            { name: 'Neha Gupta', rating: 5, comment: 'Very comfortable stay. Will definitely come back!', date: 'December 2023' }
        ],
        policies: {
            checkIn: '1:00 PM',
            checkOut: '11:00 AM',
            cancellation: 'Free cancellation up to 24 hours before check-in',
            rules: [
                'Valid ID proof required at check-in',
                'Smoking is prohibited in rooms',
                'Pets are not allowed',
                'Outside food and beverages not permitted',
                'Guests are responsible for any damage to hotel property'
            ]
        },
        contact: {
            phone: '+91 9058522279',
            email: 'info@hestiahotels.com',
            address: 'Plot No- 14/29 A, near Pari Chowk, Knowledge Park III, Greater Noida, Uttar Pradesh 201310'
        },
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.8!2d77.4753!3d28.4742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI4JzI3LjEiTiA3N8KwMjgnMzEuMSJF!5e0!3m2!1sen!2sin!4v1234567890',
        nearbyPlaces: [
            'Expo Centre - 1.5 km',
            'Knowledge Park Metro Station - 2 km',
            'Pari Chowk - 3 km',
            'India Expo Mart - 1.8 km',
            'Corporate Parks - 1-2 km'
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
    const user = useAppSelector((state) => state.auth.user);
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


            {/* 4. Rooms */}
            <Rooms customRooms={currentHotel.rooms} accommodationInfo={currentHotel.accommodationInfo} />


            {/* 5. Photo Gallery */}
            {currentHotel.gallery && <PhotoGallery images={currentHotel.gallery} hotelName={currentHotel.name} defaultImage="IMG-20251206-WA0041.jpg" />}

            {/* 6. Hotel Details */}
            <HotelDetails
                description={currentHotel.description}
                location={currentHotel.location}
                features={currentHotel.features}
            />

            {/* 7. Amenities Grid */}
            {currentHotel.amenities && <AmenitiesGrid amenities={currentHotel.amenities} />}

            {/* 8. Restaurant */}
            {currentHotel.restaurant && <RestaurantSection restaurant={currentHotel.restaurant} />}

            {/* 9. Reviews */}
            {currentHotel.reviews && <ReviewsSection reviews={currentHotel.reviews} />}

            {/* 10. Location & Map */}
            {currentHotel.contact && <LocationMap address={currentHotel.contact.address} mapUrl={currentHotel.mapUrl} nearbyPlaces={currentHotel.nearbyPlaces} />}

            {/* 11. Policies */}
            {currentHotel.policies && <PoliciesSection {...currentHotel.policies} />}

            {/* 12. Contact */}
            {currentHotel.contact && <ContactSection {...currentHotel.contact} />}

            {/* 13. Footer */}
            <Footer />
        </div>
    );
}
