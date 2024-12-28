/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
        keyframes: {
            smokeRise: {
                '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                '100%': { opacity: '0', transform: 'translateY(-150px) scale(1.5)' },
            },
        },
        animation: {
            smoke: 'smokeRise 2s ease-in-out forwards',
        },
        fontFamily: {
            sacramento: ['Sacramento', 'cursive'], // Tambahkan font sesuai kebutuhan
        },
    },
    },
  plugins: [],
};

