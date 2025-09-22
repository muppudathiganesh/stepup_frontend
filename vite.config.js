import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', 'serif'],
      },
      colors: {
        slategray: '#2F4F4F',  // Dark Slate Gray
        palered: '#FFA0A0',    // Pale Red
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
