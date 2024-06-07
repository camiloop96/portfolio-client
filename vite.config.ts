import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

/**
 * Vite Configuration
 *
 * This configuration file sets up the Vite development environment for a React project.
 * It includes the use of the `@vitejs/plugin-react-swc` plugin for React support and
 * defines path aliases for easier module resolution.
 */

// Export the Vite configuration
export default defineConfig({
  // Register plugins
  plugins: [react()],

  // Configure module resolution
  resolve: {
    alias: {
      // Alias "@" to the "./src" directory
      "@": path.resolve(__dirname, "./src"),

      // Alias "@config" to the "./src/config" directory
      "@config": path.resolve(__dirname, "./src/config"),
    },
  },
});
