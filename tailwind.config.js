module.exports = {
  purge: {
    enabled: true,
    content: ["./src/components/**/*.{js,jsx}", "./src/pages/**/*.{js,jsx}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#2568ef",
          darkLight: "#043381",
          DEFAULT: "#00264B",
        },
        secondary: "#FED11D",
        gri: "#C6CCD8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
