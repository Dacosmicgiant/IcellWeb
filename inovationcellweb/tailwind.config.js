/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFA500",    // Orange
        secondary: "#FFFFFF",  // White
        accent: "#333333",    // Dark Gray
        black: "#000000"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      }
    }
  },
  plugins: []
}
