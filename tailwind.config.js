/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      greenLight: '#00B39D',
      orangeWarning: '#FF4501',
      body1: '#343234',
      body2: '#5F5D60',
      body3: '#888689',
      body4: '#B1B0B2',
      gray: '#E5E5E5',
      gray2: '#E3E2E3',
      grayButton: '#6A6C72',
    },
    extend: {
      boxShadow: {
        '3xl': ' 0px 1px 4px rgba(0, 0, 0, 0.097543);',
      },
    },
  },
  plugins: [],
};
