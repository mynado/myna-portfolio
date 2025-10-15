import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    // Ensures Vite can resolve TypeScript paths/aliases
    viteTsconfigPaths(),
  ],
  server: {
    // If you prefer the CRA default port
    port: 3000,
  },
});
