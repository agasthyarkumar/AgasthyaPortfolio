import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Replace this with your actual GitHub repo name
const repoName = "AgasthyaPortfolio"; // 👈️ example: https://github.com/YOUR_NAME/AgasthyaPortfolio

export default defineConfig(({ mode }) => ({
  base: `/${repoName}/`, // 👈️ REQUIRED for GitHub Pages
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
