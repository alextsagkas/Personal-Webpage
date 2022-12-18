import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Personal-Webpage/",
  plugins: [react()],
  server: {
    host: true,
  },
});
