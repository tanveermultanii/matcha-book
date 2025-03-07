/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'matcha-light': '#F8F6F2',
          'matcha-dark': '#A3C9A8',
          'night-library': '#2b2b2b',
          'night-text': '#EAEAEA',
        },
        animation: {
          wiggle: 'wiggle 0.4s ease-in-out infinite',
        },
        keyframes: {
          wiggle: {
            '0%, 100%': { transform: 'rotate(-5deg)' },
            '50%': { transform: 'rotate(5deg)' },
          },
        },
      },
    },
    plugins: [],
  };  
  
  