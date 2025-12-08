interface Review {
    name: string;
    rating: number;
    comment: string;
    date: string;
}

interface ReviewsSectionProps {
    reviews: Review[];
    averageRating?: number;
}

export default function ReviewsSection({ reviews, averageRating = 4.8 }: ReviewsSectionProps) {
    if (!reviews || reviews.length === 0) return null;

    return (
        <section className="py-12 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold text-slate-800">Guest Reviews</h2>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary-600">{averageRating}</div>
                        <div className="text-yellow-400">★★★★★</div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="font-bold text-slate-800">{review.name}</h4>
                                <span className="text-yellow-400">{'★'.repeat(review.rating)}</span>
                            </div>
                            <p className="text-slate-600 mb-2">{review.comment}</p>
                            <p className="text-sm text-slate-400">{review.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
