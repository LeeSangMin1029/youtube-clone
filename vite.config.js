import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const folders = ["components", "pages", "images", "hooks", "utils"];

const aliasList = () =>
  folders.map((name) => ({
    find: `@/${name}`,
    replacement: path.resolve(__dirname, `src/${name}`),
  }));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliasList(),
  },
  server: {
    hmr: {
      host: "localhost",
      protocol: "ws",
    },
    proxy: {
      "/api": {
        target: "https://www.googleapis.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
        ws: true,
      },
    },
  },
});
