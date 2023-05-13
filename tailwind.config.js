/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-20': '#F8F4EB',
        'gray-50': '#EFE6E6',
        'gray-100': '#DFCCCC',
        'gray-500': '#5E0000',
        'primary-100': '#F4EEE0',
        'primary-300': '#6D5D6E',
        'primary-500': '#393646',
        'secondary-400': '#50577A',
        'secondary-500': '#404258',
      },
      backgroundImage: (theme) => ({
        'gradient-yellowred': 'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
        'mobile-home': 'url("./assets/HomePageGraphic.png")'
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      // ! ChatGPT said to put it with "backgroundImage" -wait for the end.
      content: {
        ecolvetest: 'url("./assets/EvolveText.png")',
        abstractwaves: 'url("./assets/AbstractWaves.png")',
        sparkles: 'url("./assets/Sparkles.png")',
        circles: 'url("./assets/Circles.png")',
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.5s forwards',
        'slide-out-right': 'slide-out-right 0.5s forwards',
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
    // * Media queries
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    }
  },
  plugins: [],
}
