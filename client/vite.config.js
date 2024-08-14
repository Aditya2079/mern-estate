import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true, // Add this line for handling CORS correctly
        secure: false,
      },
    },
  },
  plugins: [react()], // Moved this to the correct location
})
