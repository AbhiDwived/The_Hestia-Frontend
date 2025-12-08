'use client';

import React, { createContext, useState, ReactNode } from 'react';

interface Hotel {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: any;
}

interface HotelContextType {
    currentHotel: Hotel | null;
    setCurrentHotel: (hotel: Hotel | null) => void;
    hotels: Hotel[];
    setHotels: (hotels: Hotel[]) => void;
}

export const HotelContext = createContext<HotelContextType | undefined>(undefined);

export function HotelProvider({ children }: { children: ReactNode }) {
    const [currentHotel, setCurrentHotel] = useState<Hotel | null>(null);
    const [hotels, setHotels] = useState<Hotel[]>([]);

    return (
        <HotelContext.Provider value={{ currentHotel, setCurrentHotel, hotels, setHotels }}>
            {children}
        </HotelContext.Provider>
    );
}
