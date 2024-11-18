/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#fbead1",
        "secondary": "#c8bfab",
        "accent": "#764f52",
        "tertiary": "#d79a76",
      },
    },
  },
  plugins: [],
};
