/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            'black-primary': '#000000',
            'black-secondary': '#202020',
            'gray': '#b1b1b1',
            'blue': '#1e88e5',
            'white': '#ffffff',
            'gray-card': 'rgba(255, 255, 255, 0.094)',
        },
        fontFamily: {
            'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
            'rakkas': ['Rakkas', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
