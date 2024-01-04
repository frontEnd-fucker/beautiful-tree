// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./index";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "Avatar",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  args: {
    src: "image/avatar1.jpeg",
    size: "md",
    alt: "my avatar",
  },
};

export const Placeholder: Story = {
  args: {
    size: "md",
    placeholder: "sdf",
  },
};

export const DefaultIcon: Story = {
  args: {},
};
