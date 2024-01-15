// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./index";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "Accordion",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
  render: () => (
    <Accordion defaultValue="item2">
      <Accordion.Item value="item1">
        <Accordion.Control>Item 1</Accordion.Control>
        <Accordion.Panel>I am discription 1</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item2">
        <Accordion.Control>Item 2</Accordion.Control>
        <Accordion.Panel>I am discription 2</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  ),
};

const ControllableAccordion = () => {
  const [value, setValue] = React.useState("item1");

  return (
    <Accordion value={value} onChange={setValue}>
      <Accordion.Item value="item1">
        <Accordion.Control>Item 1</Accordion.Control>
        <Accordion.Panel>I am discription 1</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item2">
        <Accordion.Control>Item 2</Accordion.Control>
        <Accordion.Panel>I am discription 2</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export const Control: Story = {
  render: () => <ControllableAccordion />,
};
