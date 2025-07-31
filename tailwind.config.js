/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customTeal: '#e9f7ef',
        custom: '#d4efdf',
        customs: '#a9dfbf',
        steal: '#45b39d',
        reded: '#F2D7D5',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'slide-x': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(50px)' },
          '100%': { transform: 'translateX(0)' },
        },
         marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollX: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-100%)' },
    },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'slide-x': 'slide-x 2s ease-in-out infinite',
          marquee: 'marquee 15s linear infinite',
            scrollX: 'scrollX 15s linear infinite',
      },
    },
  },
  plugins: [],
};
