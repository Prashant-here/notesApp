/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'playFair':['Playfair Display SC','sans-serify']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://t4.ftcdn.net/jpg/03/92/25/09/360_F_392250914_2Od8jNRBPgpMu8W29vCh4hiu5EUXbgGU.jpg')",
        'hero-pattern2': "url('https://images.unsplash.com/photo-1718471472310-77a63c5fad95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

    },
  },
},
  plugins: [],
}