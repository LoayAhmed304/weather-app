/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1080px",
      xl: "1440px",
    },
    extend: {
      colors: {
        softWhite: "#F0F0F0",
        lightLavender: "#E6E6FA",
        coolGray: "#D3D3D3",
        warmGold: "#FFD700",
        softPeach: "#FFDAB9",
        skyBlue: "#87CEEB",
        deepPlum: "#4B0082",
        charcoalGray: "#333333",
        darkPurple: "#301934",
      },
    },
  },
  plugins: [],
};
