import { useContext } from 'react';
import { HotelContext } from '@/context/HotelContext';

export function useHotel() {
    const context = useContext(HotelContext);
    if (context === undefined) {
        throw new Error('useHotel must be used within a HotelProvider');
    }
    return context;
}
