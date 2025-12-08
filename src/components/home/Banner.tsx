'use client';

import { useState, useEffect } from 'react';

const slides = [
    {
        title: 'The best way to book',
        highlight: 'hotels online.',
        subtitle: 'Book direct for the best price and exclusive benefits',
        bgGradient: 'from-primary-700/40 via-primary-600/45 to-primary-700/50',
        bgImage: '/Hestia Images/Home page images/pexels-heyho-6492397 (1).jpg'
    },
    {
        title: 'Experience luxury and',
        highlight: 'comfort.',
        subtitle: 'Premium accommodations with world-class amenities',
        bgGradient: 'from-primary-500/40 via-primary-600/45 to-primary-700/50',
        bgImage: '/Hestia Images/Home page images/pexels-heyho-7005295.jpg'
    },
    {
        title: 'Your perfect stay',
        highlight: 'awaits.',
        subtitle: 'Discover exceptional hospitality at Hestia Hotels',
        bgGradient: 'from-primary-700/40 via-primary-500/45 to-primary-700/50',
        bgImage: '/Hestia Images/Home page images/pexels-jonathanborba-3316918.jpg'
    },
    {
        title: 'Unforgettable moments',
        highlight: 'begin here.',
        subtitle: 'Create lasting memories in our stunning locations',
        bgGradient: 'from-primary-600/40 via-primary-500/45 to-primary-600/50',
        bgImage: '/Hestia Images/Home page images/pexels-reneterp-2504980.jpg'
    }
];

interface BannerProps {
    title?: string;
    subtitle?: string;
    image?: string;
}

export default function Banner({ title, subtitle, image }: BannerProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    // If custom props are provided, use them as a single slide
    const activeSlides = title ? [{
        title: title,
        highlight: '',
        subtitle: subtitle || 'Experience luxury and comfort at its finest.',
        bgGradient: 'from-primary-700/40 via-primary-600/45 to-primary-700/50',
        bgImage: image || '/Hestia Images/Home page images/pexels-heyho-6492397 (1).jpg'
    }] : slides;

    useEffect(() => {
        if (activeSlides.length <= 1) return; // Don't auto-scroll if only 1 slide
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [activeSlides.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
    };

    return (
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Slides */}
            {activeSlides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Background Image */}
                    <img
                        src={slide.bgImage}
                        alt={`Slide ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Background Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`}></div>

                    {/* Background Pattern */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    ></div>
                </div>
            ))}

            {/* Content - Always on top */}
            <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
                {activeSlides.map((slide, index) => (
                    <div
                        key={index}
                        className={`transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                            }`}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                            {slide.title}
                            <br />
                            <span className="text-gold-400">{slide.highlight}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-md">
                            {slide.subtitle}
                        </p>
                    </div>
                ))}

                {/* Navigation Arrows */}
                {activeSlides.length > 1 && (
                    <>
                        <button
                            onClick={prevSlide}
                            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all duration-300 group"
                            aria-label="Previous slide"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full transition-all duration-300 group"
                            aria-label="Next slide"
                        >
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}

                {/* Slide Indicators */}
                {activeSlides.length > 1 && (
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                        {activeSlides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${index === currentSlide
                                    ? 'w-10 h-3 bg-gold-400'
                                    : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
