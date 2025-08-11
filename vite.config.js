import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base:
    process.env.NODE_ENV === "production" &&
    process.env.DEPLOY_TARGET === "gh-pages"
      ? "/memory-card/" // for GitHub Pages
      : "/", // for Netlify & local dev
});
