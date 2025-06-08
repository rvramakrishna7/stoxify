import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  preview:{
    allowedHosts :['stoxify-f3um.onrender.com'],
    port:4173,
  },
  plugins: [react()],
})
