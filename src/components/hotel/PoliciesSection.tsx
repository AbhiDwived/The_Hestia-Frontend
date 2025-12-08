interface PoliciesSectionProps {
    checkIn: string;
    checkOut: string;
    cancellation: string;
    rules?: string[];
}

export default function PoliciesSection({ checkIn, checkOut, cancellation, rules }: PoliciesSectionProps) {
    return (
        <section className="py-12 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-slate-800">Hotel Policies</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-3 text-slate-800">Check-in</h3>
                        <p className="text-slate-600">{checkIn}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-3 text-slate-800">Check-out</h3>
                        <p className="text-slate-600">{checkOut}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-3 text-slate-800">Cancellation</h3>
                        <p className="text-slate-600">{cancellation}</p>
                    </div>
                </div>
                {rules && rules.length > 0 && (
                    <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-4 text-slate-800">House Rules</h3>
                        <ul className="space-y-2">
                            {rules.map((rule, idx) => (
                                <li key={idx} className="flex items-start text-slate-600">
                                    <span className="text-primary-500 mr-2">•</span>
                                    {rule}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}
