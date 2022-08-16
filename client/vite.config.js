import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  'define': {
    'process.env': process.env,
  },
  'plugins': [react()],
  'server': {
    proxy: {
      '/api': 'http://localhost:8080/api',
    },
  },
})
