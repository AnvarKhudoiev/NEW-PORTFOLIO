import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // корень для Vercel
  plugins: [react()],
  build: {
    target: "es2015", // для совместимости с Safari 13+
  },
});