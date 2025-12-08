interface LocationMapProps {
    address: string;
    mapUrl?: string;
    nearbyPlaces?: string[];
}

export default function LocationMap({ address, mapUrl, nearbyPlaces }: LocationMapProps) {
    return (
        <section className="py-12 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-slate-800">Location & Nearby</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <div className="bg-slate-100 rounded-lg p-6 mb-6">
                            <h3 className="font-bold text-lg mb-2 text-slate-800">Address</h3>
                            <p className="text-slate-600">{address}</p>
                        </div>
                        {nearbyPlaces && nearbyPlaces.length > 0 && (
                            <div>
                                <h3 className="font-bold text-lg mb-4 text-slate-800">Nearby Attractions</h3>
                                <ul className="space-y-2">
                                    {nearbyPlaces.map((place, idx) => (
                                        <li key={idx} className="flex items-center text-slate-600">
                                            <span className="text-primary-500 mr-2">📍</span>
                                            {place}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="bg-slate-200 rounded-lg h-96 flex items-center justify-center">
                        {mapUrl ? (
                            <iframe src={mapUrl} width="100%" height="100%" className="rounded-lg" loading="lazy"></iframe>
                        ) : (
                            <p className="text-slate-500">Map Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
