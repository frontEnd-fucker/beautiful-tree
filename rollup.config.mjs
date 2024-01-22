import { defineConfig } from "rollup";
// We'll use this plugin to transpile our TypeScript code
import pluginTs from "@rollup/plugin-typescript";
// We'll use this plugin to generate the .d.ts files
import dts from "rollup-plugin-dts";
import stylexPlugin from "@stylexjs/rollup-plugin";
import { dirname } from "path";
import { fileURLToPath } from "url";
// We'll use this plugin to minify our code
import terser from "@rollup/plugin-terser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const external = ["react", "react-dom", "react/jsx-runtime"];

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "react/jsx-runtime": "jsxRuntime",
};

const input = "src/components/index.ts";

const stylexPluginConfig = stylexPlugin({
  // Required. File path for the generated CSS file.
  fileName: "stylex.css",
  // default: false
  dev: false,
  // prefix for all generated classNames
  classNamePrefix: "x",
  // Required for CSS variable support
  unstable_moduleResolution: {
    // type: 'commonJS' | 'haste'
    // default: 'commonJS'
    type: "commonJS",
    // The absolute path to the root directory of your project
    rootDir: __dirname,
  },
});

export default defineConfig([
  {
    input,

    output: [
      {
        file: "dist/beautiful-tree.cjs",
        format: "cjs",
        sourcemap: true,
        globals,
      },
      {
        file: "dist/beautiful-tree.mjs",
        format: "esm",
        sourcemap: true,
        globals,
      },
      {
        // file: "dist/beautiful-tree.mjs",
        format: "esm",
        sourcemap: true,
        globals,
        entryFileNames: "[name].mjs",
        dir: "dist/esm",
        preserveModules: true,
      },
      {
        name: "BeautifulTree", // The global name given to the "bundle"
        file: "dist/beautiful-tree.iife.js",
        format: "iife",
        globals, // We tell Rollup how to map the external dependencies
        sourcemap: true, // We want sourcemaps for debugging purposes
      },
    ],

    external,
    plugins: [pluginTs(), stylexPluginConfig],
  },

  // We have another set of output files that uses a slightly different
  // configuration: We want to minify the code, so we use `terser` as a plugin,
  // and add the `min` infix to the output filenames.
  {
    input,
    output: [
      {
        file: "dist/beautiful-tree.min.cjs",
        format: "cjs",
        globals,
        sourcemap: true,
      },
      {
        file: "dist/beautiful-tree.min.mjs",
        format: "es",
        globals,
        sourcemap: true,
      },
      {
        name: "BeautifulTree",
        file: "dist/beautiful-tree.min.iife.js",
        format: "iife",
        globals,
        sourcemap: true,
      },
    ],
    external,
    plugins: [pluginTs(), stylexPluginConfig, terser()],
  },

  {
    input,
    output: [
      // Both files will be equal, but we need to generate them separately
      // to deal with some edge cases related to how TypeScript loads types.
      // An interesting thread on the topic (sadly, in Xitter):
      // https://twitter.com/AndaristRake/status/1695549037556949344
      { format: "cjs", file: "dist/beautiful-tree.d.cts" },
      { format: "es", file: "dist/beautiful-tree.d.mts" },
    ],
    external,
    plugins: [dts()],
  },
]);
