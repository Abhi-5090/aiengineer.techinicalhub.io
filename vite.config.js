import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command }) => ({
  // Defaults to the domain root — correct for a normal production
  // deployment (AWS, or any host serving this on its own domain/subdomain).
  // GitHub Pages' project site is the one exception: it serves from
  // /<repo-name>/, not the root, so that workflow explicitly sets
  // GH_PAGES_BASE to opt into the prefix (see .github/workflows/deploy.yml)
  // — everyone else, including `vite dev`, gets a plain "/".
  base: command === "build" && process.env.GH_PAGES_BASE ? process.env.GH_PAGES_BASE : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    allowedHosts: [
      "aiengineer.technicalhub.io",
    ],
  },
}));
