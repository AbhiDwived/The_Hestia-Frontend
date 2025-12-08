'use client';
import { useState } from 'react';

interface PhotoGalleryProps {
    images: string[];
    hotelName: string;
    defaultImage?: string;
}

export default function PhotoGallery({ images, hotelName, defaultImage }: PhotoGalleryProps) {
    const defaultIndex = defaultImage ? images.findIndex(img => img.includes(defaultImage)) : 0;
    const [selectedImage, setSelectedImage] = useState(defaultIndex >= 0 ? defaultIndex : 0);

    if (!images || images.length === 0) return null;

    return (
        <section className="py-12 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-slate-800">Photo Gallery</h2>
                
                <div className="grid grid-cols-1 gap-4">
                    <div className="relative h-[600px] rounded-lg overflow-hidden">
                        <img src={images[selectedImage]} alt={`${hotelName} - ${selectedImage + 1}`} className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4">
                        {images.map((img, idx) => (
                            <div key={idx} onClick={() => setSelectedImage(idx)} className={`cursor-pointer rounded-lg overflow-hidden border-2 ${selectedImage === idx ? 'border-primary-500' : 'border-transparent'}`}>
                                <img src={img} alt={`${hotelName} thumbnail ${idx + 1}`} className="w-full h-48 object-cover hover:opacity-80 transition" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
