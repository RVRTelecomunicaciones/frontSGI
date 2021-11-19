const { guessProductionMode } = require("@ngneat/tailwind");
const { spacing } = require("tailwindcss/defaultTheme");

module.exports = {
  prefix: "",
  purge: {
    enabled: guessProductionMode(),
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        allemantBlue : '#253F75',
        labelColorInput : '#697191'

      },
      letterSpacing: {
        semi_normal: '0.015em'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
