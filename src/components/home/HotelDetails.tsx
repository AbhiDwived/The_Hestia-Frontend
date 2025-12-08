import { Key, Utensils, Wifi, Clock, Phone } from 'lucide-react';
import Image from 'next/image';

interface RichFeature {
    title: string;
    description: string;
    icon: 'Key' | 'Utensils' | 'Wifi' | 'Clock';
}

interface HotelDetailsProps {
    description?: string;
    location?: {
        area: string;
        distance: string;
        accessibility: string;
    };
    features?: string[];
    // New props for rich layout
    contact?: string;
    featureImage?: string;
    richFeatures?: RichFeature[];
    hotelName?: string;
}

export default function HotelDetails({
    description,
    location,
    features,
    contact,
    featureImage,
    richFeatures,
    hotelName
}: HotelDetailsProps) {
    // Icon mapping
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Key': return <Key className="w-6 h-6 text-primary-500" />;
            case 'Utensils': return <Utensils className="w-6 h-6 text-primary-500" />;
            case 'Wifi': return <Wifi className="w-6 h-6 text-primary-500" />;
            case 'Clock': return <Clock className="w-6 h-6 text-primary-500" />;
            default: return null;
        }
    };

    if (!description && !location && !features && !richFeatures) return null;

    // New Rich Layout
    if (richFeatures && richFeatures.length > 0) {
        return (
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12 items-center">
                        {/* Column 1: Text Content */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-primary-500 font-semibold mb-2">Our Features</h3>
                                <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                    {hotelName || 'Hestia Hotel & Restaurant'}
                                </h2>
                                <div className="text-slate-600 leading-relaxed text-lg">
                                    {description?.split('\\n\\n')[0]}
                                </div>
                            </div>

                            {contact && (
                                <div className="flex items-center gap-4 pt-4">
                                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-slate-600" />
                                    </div>
                                    <span className="text-xl text-slate-800 font-medium">{contact}</span>
                                </div>
                            )}
                        </div>

                        {/* Column 2: Image */}
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
                            {featureImage ? (
                                <Image
                                    src={featureImage}
                                    alt="Hotel Feature"
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                                    <span className="text-slate-400">No Image Available</span>
                                </div>
                            )}
                            {/* Floating Logo Badge (Optional/Mockup style) */}
                            <div className="absolute top-6 left-6 bg-slate-900 p-2 rounded-lg">
                                <div className="text-white text-xs font-bold">Hestia</div>
                            </div>
                        </div>

                        {/* Column 3: Features List */}
                        <div className="space-y-8">
                            {richFeatures.map((feature, idx) => (
                                <div key={idx} className="flex gap-6">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-full border border-orange-100 bg-white flex items-center justify-center shadow-sm">
                                        {getIcon(feature.icon)}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h4>
                                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Legacy Layout (Fallback)
    return (
        <section className="py-16 px-6 bg-slate-50">
            <div className="max-w-6xl mx-auto">
                {description && (
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-slate-800">About Us</h2>
                        <div className="text-slate-600 leading-relaxed space-y-4">
                            {description.split('\\n\\n').map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>
                    </div>
                )}

                {location && (
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-slate-800">Strategic Location</h2>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <span className="text-primary-500 mr-3 text-xl">📍</span>
                                    <div>
                                        <p className="font-semibold text-slate-800">{location.area}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-primary-500 mr-3 text-xl">🎯</span>
                                    <div>
                                        <p className="text-slate-600">{location.distance}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-primary-500 mr-3 text-xl">🚇</span>
                                    <div>
                                        <p className="text-slate-600">{location.accessibility}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {features && features.length > 0 && (
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-slate-800">Key Features & Amenities</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm flex items-start">
                                    <span className="text-primary-500 mr-3 text-lg">✓</span>
                                    <p className="text-slate-700">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
