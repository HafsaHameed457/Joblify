/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        circular: ["Circular Std"],
        brandon: ["Brandon Grotesque"],
        signature: ["Brittany Signature"],
        poppins: ["Poppins"],
        inter: ["Inter"],
        LexendDeca: ["Lexend Deca"],
        sans: ["Open Sans"],
        Roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
