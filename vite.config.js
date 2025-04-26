import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/menghor-hou-portfolio/', // 💥 add this line
  plugins: [react()],
  server: {
    port: 3000
  }
})
