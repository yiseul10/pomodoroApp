const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        inter: ['Inter']
      }
    }
  },
  plugins: []
};
