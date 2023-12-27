import { defineConfig } from "rollup";
// We'll use this plugin to transpile our TypeScript code
import pluginTs from "@rollup/plugin-typescript";
// We'll use this plugin to generate the .d.ts files
import dts from "rollup-plugin-dts";

const external = ["react", "react-dom", "react/jsx-runtime"];

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "react/jsx-runtime": "jsxRuntime",
};

const input = "src/components/index.ts";

export default defineConfig([
  {
    input,

    output: [
      {
        file: "dist/beatiful-tree.cjs",
        format: "cjs",
        sourcemap: true,
        // globals,
      },
      {
        file: "dist/beatiful-tree.mjs",
        format: "esm",
        sourcemap: true,
      },
    ],

    external,
    plugins: [pluginTs()],
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
