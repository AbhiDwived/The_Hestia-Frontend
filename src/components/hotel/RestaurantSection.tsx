interface RestaurantSectionProps {
    restaurant?: {
        name: string;
        description: string;
        cuisine: string[];
        timings: string;
        image?: string;
    };
}

export default function RestaurantSection({ restaurant }: RestaurantSectionProps) {
    if (!restaurant) return null;

    return (
        <section className="py-12 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-slate-800">Dining Experience</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {restaurant.image && (
                        <div className="rounded-lg overflow-hidden">
                            <img src={restaurant.image} alt={restaurant.name} className="w-full h-80 object-cover" />
                        </div>
                    )}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-800">{restaurant.name}</h3>
                        <p className="text-slate-600 mb-4">{restaurant.description}</p>
                        <div className="space-y-3">
                            <div>
                                <span className="font-semibold text-slate-700">Cuisine: </span>
                                <span className="text-slate-600">{restaurant.cuisine.join(', ')}</span>
                            </div>
                            <div>
                                <span className="font-semibold text-slate-700">Timings: </span>
                                <span className="text-slate-600">{restaurant.timings}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
