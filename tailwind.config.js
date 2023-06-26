/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Monda", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        "img-main": 'url("src/assets/background.jpeg")',
      },
    },
  },
  plugins: [],
}
