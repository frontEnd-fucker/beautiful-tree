// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from "@storybook/react";

import { Collapse } from "./index";
import React from "react";

const meta: Meta<typeof Collapse> = {
  component: Collapse,
  title: "Collapse",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Collapse>;

const Content = (
  <div style={{ border: "1px solid red", width: 120 }}>
    very long very long very long very long very long very long very long text
  </div>
);

export const Basic: Story = {
  args: {
    isOpen: false,
    children: Content,
  },
};

export const Open: Story = {
  args: {
    isOpen: true,
    children: Content,
  },
};

export const Transition: Story = {
  args: {
    isOpen: true,
    children: Content,
    transitionDuration: 1000,
    transitionTimingFunction: "cubic-bezier(.5, .75, .75, 1.25)",
  },
};
