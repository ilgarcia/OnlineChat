/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        theme: {
          100: "#E4F2E7",
          300: "#97A6A0",
          500: "#93BFB7",
          700: "#387373",
          900: "#2D3E40",
        },
      },
    },
  },
  plugins: [],
};
