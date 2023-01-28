import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@/components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@/pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@/images",
        replacement: path.resolve(__dirname, "src/images"),
      },
    ],
  },
  server: {
    hmr: {
      host: "localhost",
      protocol: "ws",
    },
  },
});
