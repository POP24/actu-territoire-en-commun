import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env": {},   // évite ReferenceError côté navigateur
    global: "globalThis" // compat Node globals
  },
  optimizeDeps: {
    include: ["thirdweb", "thirdweb/react", "thirdweb/wallets", "thirdweb/chains"],
  },
}));
