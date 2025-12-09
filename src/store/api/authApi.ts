import { baseApi } from './baseApi';

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    hotelIds: string[];
}

interface AuthResponse {
    user: User;
    token: string;
    refreshToken: string;
}

interface LoginRequest {
    email: string;
    password: string;
}

interface RegisterRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
}

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginRequest>({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
            transformResponse: (response: { data: AuthResponse }) => response.data,
            onQueryStarted: async (_, { queryFulfilled }) => {
                const { data } = await queryFulfilled;
                localStorage.setItem('token', data.token);
                localStorage.setItem('refreshToken', data.refreshToken);
            },
        }),
        register: builder.mutation<AuthResponse, RegisterRequest>({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data,
            }),
            transformResponse: (response: { data: AuthResponse }) => response.data,
            onQueryStarted: async (_, { queryFulfilled }) => {
                const { data } = await queryFulfilled;
                localStorage.setItem('token', data.token);
                localStorage.setItem('refreshToken', data.refreshToken);
            },
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
