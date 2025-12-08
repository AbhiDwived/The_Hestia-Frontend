const testimonials = [
    {
        name: 'Arjun Mehta',
        role: 'Business Traveler',
        rating: 5,
        comment: 'Exceptional service and comfortable rooms. Perfect for business trips!',
        image: '👨‍💼',
        location: 'Mumbai'
    },
    {
        name: 'Priya Singh',
        role: 'Family Vacation',
        rating: 5,
        comment: 'Amazing experience! The staff was wonderful and rooms were spotless.',
        image: '👩',
        location: 'Delhi'
    },
    {
        name: 'Rahul Verma',
        role: 'Weekend Getaway',
        rating: 5,
        comment: 'Great location and excellent hospitality. Highly recommended!',
        image: '👨',
        location: 'Bangalore'
    }
];

export default function Reviews() {
    return (
        <section className="py-20 px-6 bg-primary-50">
            <div className="mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
                        Guest Reviews
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        What our guests say about their experience
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-primary-100"
                        >
                            {/* Rating - Gold Stars */}
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`text-xl ${i < review.rating ? 'text-gold-400' : 'text-slate-300'}`}>★</span>
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="text-slate-700 mb-6 leading-relaxed text-sm italic">
                                &ldquo;{review.comment}&rdquo;
                            </p>

                            {/* Reviewer */}
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-700 to-primary-500 rounded-full flex items-center justify-center text-2xl">
                                    {review.image}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-sm">{review.name}</h4>
                                    <p className="text-xs text-slate-500">{review.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
