/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'gray-dark': '#333', // Agregar un nuevo color de fondo personalizado
      },
      textColor: {
        'white': '#fff', // Agregar un nuevo color de texto personalizado
      },
    },
  },
  plugins: [],
}
