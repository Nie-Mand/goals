/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          lot: '#111111',
        },
        text: {
          white: '#fafafa',
        },
      },
    },
  },
  plugins: [],
}
