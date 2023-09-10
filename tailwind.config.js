/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "flow-green-dark": {
          50: "#a4f5e3",
          100: "#83f2da",
          200: "#67f0d2",
          300: "#4eedcb",
          400: "#23e8be",
          500: "#07deaf",
          600: "#06ba93",
          700: "#049475",
          800: "#02755d",
          900: "#045947",
          950: "#044537",
          night: "#0a0d0c",
        },
      },
    },
  },
  plugins: [],
};
