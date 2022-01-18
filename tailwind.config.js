const { guessProductionMode } = require("@ngneat/tailwind");
const { spacing } = require("tailwindcss/defaultTheme");

module.exports = {
  prefix: "",
  important: true,

  purge: {
    enabled: guessProductionMode(),
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    inset: {
      '0': '0px',
      '22px':'22px',
      '30px':'30px'
    },
    extend: {
      zIndex: {
        '1000': '1000',
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        allemantBlue : '#253F75',
        labelColorInput : '#697191',
        textdark: '#2a2a2a!important'

      },
      letterSpacing: {
        semi_normal: '0.015em'
      },
      borderRadius: {
        'none': '0',
       'sm': '0.125rem',
       DEFAULT: '0.25rem',
       DEFAULT: '4px',
       'md01': '40px',
       'md': '0.375rem',
       'lg': '0.5rem',
       'full': '9999px',
       'large': '12px',
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
