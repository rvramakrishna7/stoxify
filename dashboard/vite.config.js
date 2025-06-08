import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    host:true,
    port:5173,
  },
  preview: {
    allowedHosts: ['stoxify-dashboard.onrender.com'],
    port: 4173,
  },
  plugins: [react()],
})
