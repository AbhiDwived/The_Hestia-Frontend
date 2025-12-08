export interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    role: UserRole;
    hotelIds: string[];
}

export interface Hotel {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: Address;
    description?: string;
    amenities: string[];
    images: string[];
    settings?: HotelSettings;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
}

export interface HotelSettings {
    currency: string;
    timezone: string;
    checkInTime: string;
    checkOutTime: string;
}

export interface Room {
    id: string;
    hotelId: string;
    roomNumber: string;
    roomType: string;
    floor: number;
    capacity: number;
    basePrice: number;
    description?: string;
    amenities: string[];
    images: string[];
    status: RoomStatus;
    isActive: boolean;
}

export interface Booking {
    id: string;
    hotelId: string;
    roomId: string;
    userId: string;
    guestName: string;
    guestEmail: string;
    guestPhone: string;
    checkInDate: string;
    checkOutDate: string;
    numberOfGuests: number;
    totalAmount: number;
    paidAmount: number;
    status: BookingStatus;
    specialRequests?: string;
    createdAt: string;
    updatedAt: string;
}

export interface Invoice {
    id: string;
    hotelId: string;
    bookingId?: string;
    userId: string;
    invoiceNumber: string;
    items: InvoiceItem[];
    subtotal: number;
    tax: number;
    discount: number;
    total: number;
    paidAmount: number;
    paymentStatus: PaymentStatus;
    paymentMethod?: PaymentMethod;
    notes?: string;
    createdAt: string;
    updatedAt: string;
}

export interface InvoiceItem {
    name: string;
    quantity: number;
    price: number;
    total: number;
}

export type UserRole = 'SUPER_ADMIN' | 'HOTEL_ADMIN' | 'MANAGER' | 'RECEPTIONIST' | 'STAFF';
export type BookingStatus = 'PENDING' | 'CONFIRMED' | 'CHECKED_IN' | 'CHECKED_OUT' | 'CANCELLED' | 'NO_SHOW';
export type RoomStatus = 'AVAILABLE' | 'OCCUPIED' | 'MAINTENANCE' | 'CLEANING' | 'OUT_OF_ORDER';
export type PaymentStatus = 'PENDING' | 'PARTIAL' | 'PAID' | 'REFUNDED' | 'FAILED';
export type PaymentMethod = 'CASH' | 'CARD' | 'UPI' | 'NET_BANKING' | 'WALLET';
