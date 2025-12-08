const teamMembers = [
    {
        name: 'Renu Yadav',
        role: 'Director',
        description: 'Provides strategic direction and oversees overall business operations.',
        image: '' // Fallback to icon
    },
    {
        name: 'Rohit Soni',
        role: 'Sales & Marketing Manager',
        experience: '5 Years',
        description: 'Expert in hospitality sales, corporate partnerships, and brand marketing.',
        image: '/Hestia Images/Expert Team Members/Rohit Soni.jpg'
    },
    {
        name: 'Rahul Yadav',
        role: 'Operations Manager',
        experience: '10 Years',
        description: 'Skilled in end-to-end hotel operations and vendor coordination.',
        image: '/Hestia Images/Expert Team Members/Rahul Yadav.jpg'
    },
    {
        name: 'Yashi Mishra',
        role: 'HR & Administration Executive',
        experience: '3 Years',
        description: 'Handles recruitment, employee relations, and administrative management.',
        image: '/Hestia Images/Expert Team Members/Yashi Mishra.jpg'
    },
    {
        name: 'Aashu Rastogi',
        role: 'Chartered Accountant (CA)',
        description: 'Manages financial planning, compliance, and accounts.',
        image: '' // Fallback to icon
    }
];

export default function ExpertMembers() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
                        Expert Team Members
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        The Leadership Behind Excellence in Hospitality
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-primary-50"
                        >
                            {/* Member Avatar */}
                            <div className="h-48 relative overflow-hidden bg-slate-100 flex items-center justify-center">
                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="text-slate-300">
                                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-700/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Member Info */}
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-bold mb-1 text-slate-800 group-hover:text-primary-500 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-primary-500 font-semibold text-xs mb-2">
                                    {member.role}
                                </p>

                                {member.experience && (
                                    <div className="inline-block px-2 py-0.5 bg-gold-50 text-gold-600 text-[10px] rounded-full font-medium mb-2 border border-gold-200">
                                        {member.experience} Exp.
                                    </div>
                                )}

                                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
