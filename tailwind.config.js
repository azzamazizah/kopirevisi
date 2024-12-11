/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#FDF8F6',
          100: '#F2E8E5',
          200: '#E8D6D0',
          300: '#DBC1BA',
          400: '#C4A59E',
          500: '#A78A82',
          600: '#8B6962',
          700: '#6F4E47',
          800: '#523A34',
          900: '#362421',
        },
      },
    },
  },
  plugins: [],
}