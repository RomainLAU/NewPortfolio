/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainPurple: '#b790f5',
      },
    },
    // colors: {
    //   black: '#000',
    //   white: '#FFF',
    //   mainPurple: '#b790f5',
    // },
  },
  plugins: [],
};
