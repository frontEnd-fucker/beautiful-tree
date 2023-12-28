/** @type { import('@storybook/react-vite').StorybookConfig } */
import styleXPlugin from "@stylexjs/babel-plugin";

const StyleXPlugin = [
  styleXPlugin,
  {
    dev: true,
    // Set this to true for snapshot testing
    // default: false
    test: false,
    // Required for CSS variable support
    unstable_moduleResolution: {
      // type: 'commonJS' | 'haste'
      // default: 'commonJS'
      type: "commonJS",
      // The absolute path to the root directory of your project
      rootDir: __dirname,
    },
  },
];

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    // reactDocgen: 'react-docgen-typescript',   // this one cannot autogen the descrition of the props, use the bottom one instead
    reactDocgen: "react-docgen",
  },
  staticDirs: ["../public"],
};
export default config;
