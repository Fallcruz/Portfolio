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
            'black-secondary': '#1c1c1c',
            'gray': '#b1b1b1',
            'blue': '#1e88e5',
            'white': '#ffffff',
            'gray-card': 'rgba(255, 255, 255, 0.9)',
            'linear-blue': 'linear-gradient(90deg, rgba(30,136,229,1) 20%, rgba(30,229,140,1) 100%)',
        },
        fontFamily: {
            'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
            'rakkas': ['Rakkas', 'sans-serif'],
            'inter': ['Inter', 'sans-serif'],
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
