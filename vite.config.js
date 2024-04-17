import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      icon: '/src/assets/images',
      pages: '/src/pages',
      shared: '/src/shared',
      images: '/src/assets/images',
      components: '/src/components'
    }
  }
});
