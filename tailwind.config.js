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
        "img-main": 'url("/src/assets/gui/background.jpeg")',
        button: 'url("/src/assets/gui/button.svg")',
        "button-hover": 'url("/src/assets/gui/button-hover.svg")',
        "button-right": 'url("/src/assets/gui/button-right.svg")',
        "button-wrong": 'url("/src/assets/gui/button-wrong.svg")',
        // "button-active": 'url("src/assets/gui/button-wrong.svg")',
      },
      dropShadow: {
        glow: "120px 80px 40px 20px white",
      },
    },
  },
  plugins: [],
}
