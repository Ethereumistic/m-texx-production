const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class", // or 'media' or 'class' stariq lgreen: #7ab842
  theme: {
    extend: {
      colors: {
        lgreen: " #5fd914 ", 
        dgreen: " #172e08 ",
        lred: " #DB5C84 ",
        dred: " #4C0414 "
      },

      fontFamily: {
        // to change, update font in _document.js
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
        rubik: ["var(--font-rubik)"], 
        russo: ["var(--font-russo)"],
        osw: ["var(--font-osw)"],
        stock: [defaultTheme.fontFamily.sans]
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16"
      },
      animation: {
        // Add a custom name for the ping animation
        'ping': 'ping 3s linear infinite', // Change the duration to 2 seconds
      },
      keyframes: {
        ping: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)', opacity: 0 },
        },
      },
      

    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
