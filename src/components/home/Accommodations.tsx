const featuredHotels = [
    {
        name: 'Hestia Stay, Kasana',
        location: 'Greater Noida',
        rating: 4.8,
        reviews: 245,
        price: 2999,
        image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&h=600&fit=crop',
        amenities: ['WiFi', 'Parking', 'Restaurant']
    },
    {
        name: 'Hestia Hotel & Restaurant, Knowledge Park-3',
        location: 'Greater Noida',
        rating: 4.9,
        reviews: 312,
        price: 3499,
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
        amenities: ['Pool', 'Gym', 'Conference']
    },
     {
        name: 'The Hestia Hotel, Sector 132',
        location: 'Greater Noida',
        rating: 4.8,
        reviews: 267,
        price: 3999,
        image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
        amenities: ['WiFi', 'Gym', 'Parking']
    },
    {
        name: 'The Hestia Hotel, Dwarka',
        location: 'New Delhi',
        rating: 4.7,
        reviews: 189,
        price: 4299,
        image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop',
        amenities: ['Spa', 'Restaurant', 'Bar']
    }
   
];

interface AccommodationsProps {
    title?: string;
    excludeHotelName?: string;
}

export default function Accommodations({ title, excludeHotelName }: AccommodationsProps) {
    const filteredHotels = excludeHotelName
        ? featuredHotels.filter(h => h.name !== excludeHotelName)
        : featuredHotels;

    return (
        <section id="hotels" className="py-20 px-6 bg-white">
            <div className="mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
                        {title || 'Meet the hotels'}
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Discover our collection of premium hotels
                    </p>
                </div>

                {/* Hotel Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredHotels.map((hotel, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-primary-50"
                        >
                            {/* Hotel Image */}
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={hotel.image}
                                    alt={hotel.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>

                            {/* Hotel Info */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-1 text-slate-800 group-hover:text-primary-500 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                                    {hotel.name}
                                </h3>
                                <p className="text-slate-500 text-sm mb-3 flex items-center">
                                    <span className="mr-1 text-gold-400">📍</span>
                                    {hotel.location}
                                </p>

                                {/* Rating - Gold Stars */}
                                <div className="flex items-center mb-3">
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`text-sm ${i < Math.floor(hotel.rating) ? 'text-gold-400' : 'text-slate-300'}`}>★</span>
                                        ))}
                                    </div>
                                    <span className="ml-2 text-xs text-slate-600">
                                        {hotel.rating} ({hotel.reviews})
                                    </span>
                                </div>

                                {/* Amenities */}
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {hotel.amenities.map((amenity, i) => (
                                        <span key={i} className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded font-medium">
                                            {amenity}
                                        </span>
                                    ))}
                                </div>

                                {/* Price & Button */}
                                <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                                    <div>
                                        <span className="text-xs text-slate-500">From</span>
                                        <div className="text-xl font-bold text-primary-700">₹{hotel.price}</div>
                                        <span className="text-xs text-slate-500">/night</span>
                                    </div>
                                    <button className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-semibold hover:bg-gold-400 transition-colors duration-300">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
