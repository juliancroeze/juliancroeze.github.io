/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // Tailwind scans all .html files in the root directory
  theme: {
    extend: {
      colors: {
        'culi': '#AB9A7C',
        'culidark': '#91795A'
      }
    },
  },
  plugins: [],
};
