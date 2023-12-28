export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "350px",
        md: "450px",
        lg: "600px",
        xl: "900px",
        "2xl": "1100px",
      },
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
