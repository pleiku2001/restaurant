module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Playfair: ["Playfair Display", "serif"],
        Dancing: ["Dancing Script", "cursive"],
        Abril: ["Abril Fatface", "cursive"],
        Bodoni: ["Bodoni Moda", "serif"],
        BaiL: ["Bai Jamjuree", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        golden: "#bcaf87",
      },
      backgroundColor: {
        "mix-color": "#050816",
      },
    },
  },
  plugins: [],
};
