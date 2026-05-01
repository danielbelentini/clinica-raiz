/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        navy: '#1B2B4B',
        navy2: '#243660',
        navy3: '#0F1E35',
        navylight: '#EEF1F7',
        copper: '#C47B5F',
        copperlight: '#F0DDD6',
        copperdark: '#A05E44',
      },
    },
  },
  plugins: [],
}
