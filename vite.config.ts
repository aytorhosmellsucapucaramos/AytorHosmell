import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting para optimizar carga inicial
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('framer-motion')) return 'motion'
          if (id.includes('react') || id.includes('react-dom')) return 'vendor'
          return undefined
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
