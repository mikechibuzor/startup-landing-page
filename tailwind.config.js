module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-yellow": "#FABF62",
        "primary-blue": "#02073E",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
        "sf-font": ["sf-font", "sans-serif"],
      },
      height: {
        height10: "10vh",
        height15: "15vh",
        height20: "20vh",
        height30: "30vh",
        height40: "40vh",
        height50: "50vh",
        height55: "55vh",
        height60: "60vh",
        height70: "70vh",
        height80: "80vh",
        height90: "90vh",
        height100: "100vh",
      },
      screens: {
        "custom-breakpoint": "1440px",
        "custom-breakpoint1": "1600px",
        "custom-breakpoint2": "1680px",
        "custom-breakpoint3": "1900px",
        "designer-screen": "1728px",
      },
    },
  },
  plugins: [],
};
