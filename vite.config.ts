import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import mkcert from 'vite-plugin-mkcert';
import viteCompression from 'vite-plugin-compression';

import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), mkcert(), viteCompression()],
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/',
      },
    ],
  },

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
        target: 'https://34.230.38.155:5112/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
      },
    },
  },
});
