/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(340px, 1fr))',
      }
    },
    fontFamily: {
      "yan": ['"Yanone Kaffeesatz", sans-serif'],
      "raj": ['"Rajdhani", sans-serif']
    }
  },
  plugins: [],
}

