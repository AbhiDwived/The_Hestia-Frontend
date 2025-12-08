import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Primary Colors - Professional & Luxurious
                primary: {
                    50: '#EAF2FA',   // Ultra-light Blue Background
                    100: '#d4e5f4',
                    200: '#a9cbe9',
                    300: '#7eb1de',
                    400: '#5397d3',
                    500: '#145DA0',  // Corporate Blue (buttons)
                    600: '#104a80',
                    700: '#0B2E4E',  // Deep Royal Blue (header/nav)
                    800: '#082338',
                    900: '#051722',
                    950: '#020b11',
                },
                // Gold Accent - Premium Feel
                gold: {
                    DEFAULT: '#D4AF37', // Gold Accent (luxury highlights)
                    50: '#faf6e8',
                    100: '#f5edd1',
                    200: '#ebdba3',
                    300: '#e1c975',
                    400: '#D4AF37',  // Main gold
                    500: '#c09a2c',
                    600: '#a68524',
                    700: '#8c701d',
                    800: '#725b17',
                    900: '#584610',
                },
                // Neutral / Secondary Colors
                slate: {
                    DEFAULT: '#1E293B', // Charcoal Slate (headings)
                    50: '#F5F5F5',      // Clean Light Grey (sections)
                    100: '#e8e8e8',
                    200: '#d1d1d1',
                    300: '#b4b4b4',
                    400: '#979797',
                    500: '#7a7a7a',
                    600: '#5d5d5d',
                    700: '#404040',
                    800: '#1E293B',     // Charcoal Slate
                    900: '#0f172a',
                    950: '#020617',
                },
                // Accent Blue (kept for charts/data visualization)
                accent: {
                    DEFAULT: '#145DA0', // Corporate Blue
                    50: '#EAF2FA',
                    100: '#d4e5f4',
                    200: '#a9cbe9',
                    300: '#7eb1de',
                    400: '#5397d3',
                    500: '#145DA0',
                    600: '#104a80',
                    700: '#0B2E4E',
                    800: '#082338',
                    900: '#051722',
                },
            },
            // Font Configuration
            fontFamily: {
                sans: [
                    'Inter',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Roboto',
                    'Helvetica Neue',
                    'Arial',
                    'sans-serif',
                ],
                heading: [
                    'Inter',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'sans-serif',
                ],
            },
            // Font Size Configuration
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1.2' }],
                '6xl': ['3.75rem', { lineHeight: '1.1' }],
                '7xl': ['4.5rem', { lineHeight: '1.1' }],
            },
            // Font Weight Configuration
            fontWeight: {
                thin: '100',
                extralight: '200',
                light: '300',
                normal: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
                extrabold: '800',
                black: '900',
            },
        },
    },
    plugins: [],
};

export default config;
