/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        words:'#265073',
        bg:'#9AD0C2',
        border:'#2D9596',
        w2:'#F1FADA',
      }
    },
  },
  plugins: [],
}

