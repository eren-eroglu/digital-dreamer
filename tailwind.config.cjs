/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        comforter: ['Comforter', 'cursive'],
        vt: ['VT323', 'monospace']
      },
    },
    
  },
  plugins: [],
  
}
