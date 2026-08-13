import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command }) => ({
  // GitHub Pages project site serves the production build from
  // /<repo-name>/, not the domain root, so every asset URL needs this
  // prefix or they'd all 404 — but only for `vite build`. Applying it to
  // `vite dev` too would mean localhost only worked under that same
  // subpath, breaking the normal dev workflow for no reason.
  base: command === "build" ? "/aiengineer.techinicalhub.io/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
