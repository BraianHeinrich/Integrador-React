/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",    // color principal (puedes cambiarlo)
        secondary: "#6366f1",
        accent: "#f59e0b"
      }
    }
  },
  plugins: [],
};



