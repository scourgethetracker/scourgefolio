import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', 
  server: {
    host: 'vanackeran.com',
    port: 443,
    open: true,
    cors: true,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, '/root/certbot/config/live/vanackeran.com/privkey.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, '/root/certbot/config/live/vanackeran.com/fullchain.pem')),
    },
    proxy: {
      // Add proxy configuration if needed
      // '/api': {
      //   target: 'https://your-api.com',
      //   changeOrigin: true,
      //   secure: false,
      // }
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    chunkSizeWarningLimit: 1600,
  },
})
