interface AmenitiesGridProps {
    amenities: Array<{ name: string; icon: string }>;
}

export default function AmenitiesGrid({ amenities }: AmenitiesGridProps) {
    if (!amenities || amenities.length === 0) return null;

    const iconMap: Record<string, string> = {
        'WiFi': '📶', 'Parking': '🅿️', 'AC': '❄️', 'TV': '📺',
        'Restaurant': '🍽️', 'Gym': '💪', 'Pool': '🏊', 'Spa': '💆',
        'Laundry': '🧺', 'RoomService': '🛎️', 'Security': '🔒', 'Elevator': '🛗'
    };

    return (
        <section className="py-12 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-slate-800">Amenities & Facilities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {amenities.map((amenity, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition">
                            <div className="text-4xl mb-3">{iconMap[amenity.icon] || '✓'}</div>
                            <p className="text-slate-700 font-medium">{amenity.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
