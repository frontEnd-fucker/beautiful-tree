// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from "@storybook/react";

import { Collapse } from "./index";
import React, { useState } from "react";

const meta: Meta<typeof Collapse> = {
  component: Collapse,
  title: "Collapse",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Collapse>;

const Text = `
  Ipsum do ea do esse magna incididunt consequat quis eiusmod nisi sunt ipsum
  anim. Laboris do reprehenderit laborum qui eiusmod ad sunt et excepteur.
  Minim sunt magna esse id ut. Labore fugiat do exercitation sunt proident.
  Esse tempor nulla irure ad est ipsum magna laborum ea irure laborum
  consequat. Id amet officia in in voluptate adipisicing cupidatat et
  reprehenderit quis. Veniam occaecat veniam qui aliqua esse sint pariatur non
  id pariatur esse laborum exercitation consequat. Irure labore quis in non
  duis aute dolor est incididunt nulla id. Aute labore minim dolor non cillum.
  Sint aliquip excepteur eu veniam incididunt amet fugiat sint. Magna culpa
  nostrud laboris esse Lorem exercitation deserunt dolore sit cupidatat
  proident. Veniam consectetur eiusmod reprehenderit minim ea labore mollit
  non ut sint magna.
`;

const Content = (
  <div style={{ border: "1px solid red", width: 400 }}>{Text}</div>
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

const ControlCollapse = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Toggle
      </button>
      <Collapse isOpen={isOpen}>{Text}</Collapse>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlCollapse />,
};
