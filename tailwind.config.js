/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}"
  ],
  theme: {
    fontFamily: {
      sans: 'Poppins',
      lato: 'Montserrat'
    },
    extend: {
      colors: {
        // DEFAULT BG COLOR
        'default': '#D8DDE3',
        primary: {
          '900': '#145A66',
          '800': '#2C6B76',
          '700': '#437B85',
          '600': '#5B8C94',
          '500': '#729CA3',
          '400': '#89ACB2',
          '300': '#A1BDC2',
          '200': '#B9CED1',
          '100': '#D0DEE0',
          '050': '#E8EFF0',         
        },
      },
    },
  },
  plugins: [],
}