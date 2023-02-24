/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comforter: ['Comforter', 'cursive'],
        vt: ['VT323', 'monospace']
      },
      backgroundImage: {
        'my-bg': "url('/path/to/your/background/image')"
      },
      animation: {
        'rotate-slow': 'rotate 60s linear infinite'
      }
    },
  },
  variants: {},
  plugins: [],
}
