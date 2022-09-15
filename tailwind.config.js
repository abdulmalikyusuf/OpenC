/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // main: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }
        'main': '#0D0D2B',
        'royal-blue': '#3671E9',
        'primary': '#0D0D2B', //38, 43, 64
        'secondary': '#2B076E',
        'tertiary': ' #35068C',
        'card': '#491F98',
        'accent': '#3671E9',
        'grey': '#828282',
        'grey5': '#E0E0E0',
        'lightText': '#F2F2F2',
        'lightBlue': '#8FFFBE',
        'darkBlue': '#4610AD',
        'gradientStart': 'rgba(255, 255, 255, 0.16)',
        'gradientStop': 'rgba(255, 255, 255, 0)',
      },
      fontFamily: {
        'Rubik': ['Rubik', 'sans-serif'],
      },
      spacing: {
        '120': '120px',
      },
      backgroundImage: {
        'profile-cover': "url('/src/assets/img/profile-cover.jpg')",
        'login-cover': "url('/src/assets/img/BOSGCover.jpg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}