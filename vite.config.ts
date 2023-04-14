import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths(), mkcert()],
  server: {
    hmr: {
      host: 'localhost',
      port: 443,
      protocol: 'wss',
    },
    port: 5173,
    https: true,
    proxy: {
      '/api': {
        target: 'https://localhost:5112/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
      },
    },
  },
});
