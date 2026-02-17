import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias:{
      "@": path.resolve(__dirname, "./src")
    }
  },
  base: isVercel ? "/" : "/personal-react/",
})
