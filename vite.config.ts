import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    // Optimizaciones de producción
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Code splitting mejorado
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'mui-vendor': ['@mui/material', '@mui/icons-material'],
          'react-icons': ['react-icons'],
        },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Source maps solo en desarrollo
    sourcemap: false,
    // Optimización de assets
    assetsInlineLimit: 4096, // 4kb - inline assets pequeños
  },
  // Optimización de servidor dev
  server: {
    open: true,
  },
  // Optimización de preview
  preview: {
    port: 4173,
  },
})
