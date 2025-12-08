import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';
import { HotelProvider } from '@/context/HotelContext';
import FloatingContact from '@/components/common/FloatingContact';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Hestia Hotels - Multi-Hotel Management Platform',
    description: 'Comprehensive hotel management solution for multiple properties',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.variable}>
                <AuthProvider>
                    <HotelProvider>
                        {children}
                        <FloatingContact />
                    </HotelProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
