/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-green' : 'hsl(179, 81%, 29%)',
        'light-black' : 'hsl(216, 17%, 21%)',
        'teal' : 'hsl(179, 81%, 29%)',
        'cream' : 'hsl(25, 95%, 86%)',
      },
      fontFamily: {
        'barlow' : ['Barlow, sans-serif'],
        'fraunces' : ['Fraunces, sans-serif'],
      }
    },
  },
  plugins: [],
}

