const roomTypes = [
    {
        name: 'Deluxe Room',
        description: 'Cozy room ideal for couples, featuring elegant furnishing and a cozy balcony.',
        beds: 1,
        guests: 2,
        price: 2999,
        image: '/Hestia Images/Room image/Single Bedroom.jpg'
    },
    {
        name: 'Super Deluxe Room',
        description: 'Comfortable and spacious room with modern amenities and a city-view window.',
        beds: 2,
        guests: 3,
        price: 3500,
        image: '/Hestia Images/Room image/Double Bedroom.jpg'
    },
    {
        name: 'Junior Suite',
        description: 'A spacious junior suite offering a separate living area and stylish décor.',
        beds: 1,
        guests: 2,
        price: 4000,
        image: '/Hestia Images/Room image/Junior Suits.jpg'
    },
    {
        name: 'Luxury Room',
        description: 'Premium luxury room equipped with high-end facilities and a beautiful garden view.',
        beds: 2,
        guests: 4,
        price: 5000,
        image: '/Hestia Images/Room image/Luxury Room.jpg'
    }
];

interface RoomsProps {
    customRooms?: any[];
    accommodationInfo?: string;
}

export default function Rooms({ customRooms, accommodationInfo }: RoomsProps) {
    // Use custom rooms if provided, otherwise default to roomTypes
    const displayRooms = customRooms || roomTypes;

    return (
        <section id="rooms" className="py-20 px-6 bg-slate-50">
            <div className="mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-start justify-between mb-12">
                    <div>
                        {/* <p className="text-primary-500 font-semibold mb-2 text-sm uppercase tracking-wide">
                            {hotelName ? `Experience ${hotelName}` : 'Deluxe And Luxury'}
                        </p> */}
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                            Luxury Rooms
                        </h2>
                        {accommodationInfo && (
                            <p className="text-slate-600 mt-3 text-lg">{accommodationInfo}</p>
                        )}
                    </div>
                    <button className="hidden md:flex items-center space-x-2 px-6 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 font-semibold">
                        <span>ALL ROOMS</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>

                {/* Rooms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayRooms.map((room, index) => (
                        <div
                            key={index}
                            className="group bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Room Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                {/* Price Badge */}
                                <div className="absolute bottom-4 left-4 bg-primary-500 text-white px-4 py-2 font-bold shadow-lg">
                                    ₹{room.price}/Night
                                </div>
                            </div>

                            {/* Room Details */}
                            <div className="p-5">
                                <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-primary-500 transition-colors">
                                    {room.name}
                                </h3>
                                <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-2">
                                    {room.description}
                                </p>

                                {/* Room Info Icons */}
                                <div className="flex items-center space-x-4 text-sm text-slate-600">
                                    <div className="flex items-center space-x-1">
                                        <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                        <span>({room.beds}) bed&apos;s</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span>({room.guests}) Guest&apos;s</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile ALL ROOMS Button */}
                <div className="md:hidden mt-8 text-center">
                    <button className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 font-semibold">
                        <span>ALL ROOMS</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
