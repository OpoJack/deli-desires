module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ddBlue: {
          500: "#006ec4", //500 == Neutral/Original color
        },
        ddGold: {
          500: "#ca8f33", //500 == Neutral/Original color
        },
        ddBlack: {
          500: "#292929", //500 == Neutral/Original color
        },
      },
      fontFamily: {
        tiro: ["Tiro Gurmukhi", "sans-serif"],
        yellowtail: ["Yellowtail", "cursive"],
      },
    },
  },
  plugins: [],
};
