import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
export default defineConfig({
  resolve: {
    alias: {
      '@': '/public',
    },
  },
  server: {
    port: 4200,
    host: 'localhost',
  },
  plugins: [
    react({
      babel: {
        plugins: ['preval'],
      },
    }),
    svgr({}),
  ],
});
