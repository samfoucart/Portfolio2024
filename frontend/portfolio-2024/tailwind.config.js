/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Epilogue", "sans-serif"],
      serif: ["Lora", "serif"],
    },
    extend: {
      colors: {
        "bully-bg": "#ffd567",
        "bully-bg-d": "#fbd062",
      },
      width: {
        "6xl": "72rem",
      },
    },
  },
  plugins: [],
};
