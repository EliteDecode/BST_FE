/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        dark: "#000f4"
      },
      screens:{
        wide: '1040px',
        midWide: '900px',
        midSmall: '600px'
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
