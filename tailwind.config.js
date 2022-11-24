/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctotheme: {
          primary: '#C6870A',
          secondary: '#8E5B00',
          accent: '#282828',
          neutral: "#3D4451",
          "base-100": "#FFFFFF"
        }
      }
    ]
  },

  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
}

