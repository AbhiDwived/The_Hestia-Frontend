const blogPosts = [
    {
        title: 'Top 10 Travel Tips for Business Travelers',
        excerpt: 'Essential advice for making your business trips more comfortable and productive.',
        date: 'Dec 1, 2024',
        category: 'Travel Tips',
        readTime: '5 min read',
        image: '/Hestia Images/Blog/photo-1587271636175-90d58cdad458.jpg'
    },
    {
        title: 'Exploring Greater Noida: A Local Guide',
        excerpt: 'Discover the best attractions, restaurants, and hidden gems in Greater Noida.',
        date: 'Nov 28, 2024',
        category: 'Local Guide',
        readTime: '7 min read',
        image: '/Hestia Images/Blog/photo-1745573674206-1d4805fcc427.png'
    },
    {
        title: 'Wellness & Relaxation at Hestia Hotels',
        excerpt: 'Learn about our spa services and wellness programs designed for your well-being.',
        date: 'Nov 25, 2024',
        category: 'Wellness',
        readTime: '4 min read',
        image: '/Hestia Images/Blog/Boirthday Celebration.jpg'
    }
];

export default function OurBlog() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
                        Our Blog
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Latest news, tips, and insights from Hestia Hotels
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary-50"
                        >
                            {/* Blog Image */}
                            <div className="h-48 relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute top-4 left-4 bg-gold-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                    {post.category}
                                </div>
                            </div>

                            {/* Blog Content */}
                            <div className="p-5">
                                <div className="flex items-center space-x-3 mb-3 text-xs text-slate-500">
                                    <span className="flex items-center space-x-1">
                                        <span className="text-gold-400">📅</span>
                                        <span>{post.date}</span>
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center space-x-1">
                                        <span className="text-gold-400">⏱️</span>
                                        <span>{post.readTime}</span>
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold mb-2 text-slate-800 group-hover:text-primary-500 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-slate-600 mb-4 text-sm">
                                    {post.excerpt}
                                </p>

                                <button className="text-primary-500 font-semibold text-sm hover:text-gold-400 transition-colors flex items-center space-x-1">
                                    <span>Read More</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-12 text-center">
                    <button className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-gold-400 transition-colors duration-300 shadow-lg hover:shadow-xl">
                        View All Posts
                    </button>
                </div>
            </div>
        </section>
    );
}
