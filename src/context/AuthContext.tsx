'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    hotelIds: string[];
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (data: any) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        // Check if user is logged in on mount
        const token = localStorage.getItem('token');
        if (token) {
            // TODO: Validate token and fetch user data
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const response = await api.post('/auth/login', { email, password });
            const { user, token, refreshToken } = response.data.data;

            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            setUser(user);

            // Role-based routing
            const adminRoles = ['HOTEL_ADMIN', 'MANAGER'];
            if (adminRoles.includes(user.role)) {
                router.push('/hotels');
            } else {
                router.push('/');
            }
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        setUser(null);
        router.push('/login');
    };

    const register = async (data: any) => {
        try {
            const response = await api.post('/auth/register', data);
            const { user, token, refreshToken } = response.data.data;

            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            setUser(user);

            // Role-based routing
            const adminRoles = ['HOTEL_ADMIN', 'MANAGER'];
            if (adminRoles.includes(user.role)) {
                router.push('/hotels');
            } else {
                router.push('/');
            }
        } catch (error) {
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}
