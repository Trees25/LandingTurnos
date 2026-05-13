/** @type {import('tailwindcss').Config} */
export default {
  // Aquí le indicamos a Tailwind qué archivos debe revisar para encontrar clases CSS
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}