/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'circle-border-light': 'rgba(255, 255, 255, 0.5)', // 50% transparency
        'circle-border-medium': 'rgba(255, 255, 255, 0.6)', // 60% transparency
        'circle-border-strong': 'rgba(255, 255, 255, 0.8)', // 80% transparency
      },
      spacing: {
        'circle-size': '400px', // Custom size for the circle width/height
      },
      borderRadius: {
        'circle': '200px', // Custom border radius for the circles
      },
      borderWidth: {
        'circle': '20px', // Custom border width
      },
      fontFamily:{
        rblack:["Roboto-Black", "sans-serif"],
        otin:["Roboto-Thin", "sans-serif"],
        danilo:["Roboto-Light", "sans-serif"],
        jesus:["impact"],
        nestor:["BAHNSCHRIFT"],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-default': {
          textShadow: '2px 2px 3px #0A4F37', // equivalent to textShadowOffset and textShadowColor
        },
      };
      addUtilities(newUtilities);
    }
  ],
}