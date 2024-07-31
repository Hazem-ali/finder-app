/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FF204E", // You can add your custom colors here
          DEFAULT: "#1f2937", // The default color for 'primary'
          dark: "#111827",
        },
        secondary: {
          light: "#d1d5db",
          DEFAULT: "#4b5563",
          dark: "#374151",
        },
        // Add more custom colors here

        fuschia: "#FF204E",
        maroon: "#A0153E",
        paleMaroon: "#5D0E41",
        navy: "#00224D",
        darkBlue: "#141E46",
        jeansBlue: "#0E46A3",
        jeansBlueLighter: "#125ad2",

        customBlue: "#007BFF",
        customGreen: "#28A745",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
