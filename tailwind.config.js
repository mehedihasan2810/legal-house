/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        garamond: ["EB Garamond", "serif"],
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(180deg, #F3F3F3 0%, rgba(243, 243, 243, 0) 100%)",
      },
    },
  },
  plugins: [],
};
