/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        GradientFrom: " hsl(6, 100%, 80%)",
        GradientTo: "hsl(335, 100%, 65%)",
        PaleBlue: "hsl(243, 100%, 93%)",
        GrayishBlue: "hsl(229, 7%, 55%)",
        DarkBlue: "hsl(228, 56%, 26%)",
        VeryDarkBlue: "hsl(229, 57%, 11%)",
      },
      backgroundImage: {
        desktop: 'url("/images/bg-desktop.png")',
        mobile: 'url("/images/bg-mobile.png")',
      },
      fontFamily: {
        Raleway: "Raleway, sans-serif",
      },
    },
  },

  plugins: [],
};
