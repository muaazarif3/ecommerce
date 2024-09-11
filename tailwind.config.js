/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        yellow : '#ffd470',
        Gray : '#b8b8b8', 
        Green : '#1e3329',
        txtColor : "#0c080b" ,
        white : "#fafafa"
      }
    },
  },
  plugins: [],
}