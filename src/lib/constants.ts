export const APP_NAME = 'Hestia Hotels';
export const APP_DESCRIPTION = 'Multi-Hotel Management Platform';

export const USER_ROLES = {
    SUPER_ADMIN: 'SUPER_ADMIN',
    HOTEL_ADMIN: 'HOTEL_ADMIN',
    MANAGER: 'MANAGER',
    RECEPTIONIST: 'RECEPTIONIST',
    STAFF: 'STAFF',
} as const;

export const BOOKING_STATUS = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    CHECKED_IN: 'CHECKED_IN',
    CHECKED_OUT: 'CHECKED_OUT',
    CANCELLED: 'CANCELLED',
    NO_SHOW: 'NO_SHOW',
} as const;

export const ROOM_STATUS = {
    AVAILABLE: 'AVAILABLE',
    OCCUPIED: 'OCCUPIED',
    MAINTENANCE: 'MAINTENANCE',
    CLEANING: 'CLEANING',
    OUT_OF_ORDER: 'OUT_OF_ORDER',
} as const;

export const PAYMENT_STATUS = {
    PENDING: 'PENDING',
    PARTIAL: 'PARTIAL',
    PAID: 'PAID',
    REFUNDED: 'REFUNDED',
    FAILED: 'FAILED',
} as const;
