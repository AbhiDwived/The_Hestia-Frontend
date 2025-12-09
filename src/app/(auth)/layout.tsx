'use client';

import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
