import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname1 = dirname(fileURLToPath(import.meta.url));

export default {
  presets: ["@babel/preset-typescript", "@babel/preset-react"],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev: true,
        // Set this to true for snapshot testing
        // default: false
        test: false,
        // runtimeInjection: false,
        // genConditionalClasses: true,
        // treeshakeCompensation: true,
        // Required for CSS variable support
        unstable_moduleResolution: {
          // type: 'commonJS' | 'haste'
          // default: 'commonJS'
          type: "commonJS",
          // The absolute path to the root directory of your project
          rootDir: __dirname1,
        },
      },
    ],
  ],
  // ignore: [/node_modules\/(?!@stylexjs\/open-props)/],
  // ignore: [/node_modules/],
  // ignore: [],
};
