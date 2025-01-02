/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow:{
        neon: "0 0 10px theme(colors.purple.700)"
      }
    },
  },
  plugins: [],
}

