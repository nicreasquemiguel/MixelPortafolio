/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px', 
      'ml': '700px',
      'md': '768px', 
      'lg': '1024px', 
      'xl': '1280px', 
    },
  },
  extend: {
      boxShadow:{
        neon: "0 0 10px theme(colors.purple.700)"
      }
    },
  
  plugins: [],
}

