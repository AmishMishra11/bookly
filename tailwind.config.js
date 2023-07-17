module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "400px",

      md: "547px",

      lg: "768px",

      xl: "1024px",

      xxl: "1680px",
    },
    extend: {
      colors: {
        primary: "#009FB7",
        light: "#F1F5F9",
        night: "#202326",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
