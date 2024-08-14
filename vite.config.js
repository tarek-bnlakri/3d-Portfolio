import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude:['**/*.glb']
})
export default {
  build: {
    chunkSizeWarningLimit: 1000, // or a higher value
  },
};
