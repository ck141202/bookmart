/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        th:{
          400:"#8DB48E"
        },
        tsd:{
          400:"#F5F5F5"
        }
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

