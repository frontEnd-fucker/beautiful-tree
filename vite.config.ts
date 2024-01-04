/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        // vite dont use babel by default, but we need the babel the compile stylex
        // Use babel.config.js files
        configFile: true,
      },
    }),
  ],
  // https://github.com/storybookjs/storybook/issues/25256
  assetsInclude: ["/sb-preview/runtime.js"],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
  optimizeDeps: {
    exclude: ["/node_modules/@stylexjs"],
  },
});
