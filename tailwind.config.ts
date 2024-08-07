import type { Config } from 'tailwindcss'

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            colors: {
                'pallete-light-primary': '#ebf2fa',
                'pallete-light-secondary': '#427aa1',
                'pallete-light-accent': '#064789',
                'pallete-dark-primary': '#161925',
                'pallete-dark-secondary': '#427aa1',
                'pallete-dark-accent': '#ebf2fa',
            },
            boxShadow: {
                apple: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
