/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        yahei: 'Microsoft Yahei',
      },
      colors: {
        hyperlink: '#1255b5',
      },
    },
  },
  plugins: [],
}
