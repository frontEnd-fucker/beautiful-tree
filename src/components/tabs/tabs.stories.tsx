import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from ".";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "Tabs",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  render: () => (
    <Tabs defaultKey="item2">
      <Tabs.Item key="item1" title="wei">
        wei
      </Tabs.Item>
      <Tabs.Item key="item2" title="yu">
        yu
      </Tabs.Item>
    </Tabs>
  ),
};
