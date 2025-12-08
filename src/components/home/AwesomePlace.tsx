const places = [
    {
        name: 'Swimming Pool',
        description: 'Relax in our temperature-controlled infinity pool',
        icon: '🏊',
        features: ['Infinity Design', 'Pool Bar', 'Loungers'],
        image: '/Hestia Images/Swimming pool/pexels-ahmetcotur-19075393.jpg'
    },
    {
        name: 'Fitness Center',
        description: 'State-of-the-art gym with modern equipment',
        icon: '💪',
        features: ['24/7 Access', 'Personal Trainer', 'Yoga Studio'],
        image: '/Hestia Images/Zym Area/pexels-johnny-garcia-1041229-2011384.jpg'
    },
    {
        name: 'Library',
        description: 'Quiet reading space with extensive collection',
        icon: '📚',
        features: ['Books & Magazines', 'Study Area', 'WiFi'],
        image: '/Hestia Images/Library/pexels-rafael-cosquiere-1059286-2041540.jpg'
    },
    {
        name: 'Conference Room',
        description: 'Professional meeting spaces for business',
        icon: '💼',
        features: ['AV Equipment', 'High-speed WiFi', 'Catering'],
        image: '/Hestia Images/Blog/Local Events.jpg'
    },
    {
        name: 'Spa & Wellness',
        description: 'Rejuvenate with our premium spa services',
        icon: '💆',
        features: ['Massage', 'Sauna', 'Beauty Treatments'],
        image: '/Hestia Images/Swimming pool/pexels-islandhopper-x-339537771-18320915.jpg'
    },
    {
        name: 'Garden Terrace',
        description: 'Beautiful outdoor space for relaxation',
        icon: '🌳',
        features: ['Landscaped Garden', 'Seating Area', 'Events'],
        image: '/Hestia Images/Terrace balcony garden area/pexels-athena-2972890.jpg'
    }
];

export default function AwesomePlace() {
    return (
        <section className="py-20 px-6 bg-slate-50">
            <div className="mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
                        Awesome Places
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Explore our world-class facilities and amenities
                    </p>
                </div>

                {/* Places Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {places.map((place, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary-50"
                        >
                            {/* Image (replaces Icon) */}
                            <div className="h-48 relative overflow-hidden rounded-lg mb-4">
                                <img
                                    src={place.image}
                                    alt={place.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                <div className="absolute bottom-2 right-2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-xl shadow-md">
                                    {place.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-2 text-slate-800 group-hover:text-primary-500 transition-colors">
                                {place.name}
                            </h3>
                            <p className="text-slate-600 mb-4 text-sm">
                                {place.description}
                            </p>

                            {/* Features */}
                            <div className="space-y-2">
                                {place.features.map((feature, i) => (
                                    <div key={i} className="flex items-center space-x-2 text-sm">
                                        <span className="text-gold-400">✓</span>
                                        <span className="text-slate-600">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <button className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-300 shadow-lg hover:shadow-xl">
                        Explore All Facilities
                    </button>
                </div>
            </div>
        </section>
    );
}
