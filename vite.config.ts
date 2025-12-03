import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensure assets work with relative paths on any server
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});