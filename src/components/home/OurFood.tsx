const foodItems = [
    {
        name: 'Breakfast Buffet',
         description: 'Start your morning with our extensive breakfast buffet featuring fresh bakery items, hot dishes, seasonal fruits and beverages. A perfect way to energize your day with a wholesome and delicious spread.',
        category: 'Breakfast',
        price: 499,
        image: '/Hestia Images/Blog/Breakfast and drink.jpg'
    },
    {
        name: 'Cafe & Lounge',
        description: 'Relax in our cozy café lounge with handcrafted coffees, refreshing beverages, snacks and light meals. A perfect spot to unwind, socialize or work in a peaceful environment.',
        category: 'All Day',
        price: 699,
        image: '/Hestia Images/Restaurant/pexels-chanwalrus-941861.jpg'
    },
    {
        name: 'Room Service',
        description: 'Enjoy freshly prepared meals delivered straight to the comfort of your room. Our 24/7 room service offers a wide selection of dishes to satisfy your cravings anytime.',
        category: '24/7',
        price: 899,
        image: '/Hestia Images/Room image/Luxury Room (1).jpg'
    },
    {
        name: 'Fine Dining',
        description: 'Experience exquisite cuisine in an elegant and sophisticated ambiance. Our chefs craft premium dishes using the finest ingredients to deliver a memorable dining experience.',
        category: 'Dinner',
        price: 1299,
        image: '/Hestia Images/Restaurant/pexels-igor-starkov-233202-1307698.jpg'
    }
];

export default function OurFood() {
    return (
        <section id="food" className="py-20 px-6 bg-slate-50">
            <div className="mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
                        Dining Experience
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Savor exceptional cuisine crafted by our expert chefs
                    </p>
                </div>

                {/* Food Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {foodItems.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary-50"
                        >
                            {/* Food Image */}
                            <div className="h-40 relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-700">
                                    {item.category}
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-lg font-bold mb-2 text-slate-800 group-hover:text-primary-500 transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-slate-600 mb-4 text-sm line-clamp-2">
                                    {item.description}
                                </p>

                                <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                                    <div>
                                        <span className="text-xs text-slate-500">Starting at</span>
                                        <div className="text-xl font-bold text-gold-600">₹{item.price}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
