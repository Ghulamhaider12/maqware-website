/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#55C5CE",
        secondary: "#D3B570",
      },
      screens: {
        xs: "375px",
        dxl: "2000px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
