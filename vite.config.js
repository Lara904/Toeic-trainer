import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor':   ['react', 'react-dom', 'react-router-dom'],
          'drills':   ['./src/data/drillsIndex.js'],
          'training': ['./src/data/trainingIndex.js'],
        },
      },
    },
  },
});
