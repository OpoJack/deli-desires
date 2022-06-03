module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      md: "640px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
        ddWhite: {
          500: "#F6F7EB", //500 == Neutral/Original color
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
