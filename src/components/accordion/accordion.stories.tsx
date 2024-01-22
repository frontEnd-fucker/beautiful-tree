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
        <Accordion.Panel>
          <p>I am discription 1</p>
          <p>
            Cupidatat et elit labore incididunt quis do exercitation. Elit
            cupidatat ea esse veniam mollit velit reprehenderit anim. Commodo
            laborum exercitation elit fugiat exercitation reprehenderit nulla
            laboris. Veniam ad qui aliquip culpa pariatur non. Sint cupidatat
            laboris id non id. Ipsum ullamco reprehenderit Lorem nostrud aliquip
            laboris. Ex ullamco laboris reprehenderit irure in sunt dolor sint
            officia ut fugiat cillum consectetur. Qui fugiat quis dolor occaecat
            laborum ut ad voluptate labore ex consectetur do. Ad culpa consequat
            laboris non. Commodo minim duis ad sit eiusmod. Dolor eiusmod ipsum
            anim velit eiusmod ipsum ex.
          </p>{" "}
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item2">
        <Accordion.Control>Item 2</Accordion.Control>
        <Accordion.Panel>
          <p>I am discription 2</p>
          <p>
            Tempor ipsum exercitation exercitation id deserunt et proident
            consequat elit. Dolore tempor duis dolor sint in irure anim
            exercitation. Deserunt ex nulla ut pariatur tempor. Aliquip in
            laborum quis consequat laboris incididunt mollit reprehenderit
            mollit officia officia ut laborum aliquip. Irure velit amet culpa
            velit. Irure elit ex anim ad est elit. Dolore aliqua officia cillum
            commodo adipisicing et irure dolor. Exercitation labore minim
            voluptate amet mollit. Labore amet irure exercitation occaecat id
            occaecat consectetur enim ipsum. Commodo nulla qui esse laboris esse
            sunt nulla. Veniam adipisicing consectetur cillum eu ex exercitation
            ullamco exercitation ullamco voluptate in. Aliqua eiusmod elit
            aliqua esse exercitation occaecat culpa et veniam aliquip ea veniam
            magna. Ipsum sint culpa commodo excepteur elit minim cupidatat
            laboris velit occaecat.
          </p>
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="item3">
        <Accordion.Control>Item 3</Accordion.Control>
        <Accordion.Panel>
          <p>I am discription 3</p>
          <p>
            Est incididunt eiusmod aliqua velit sunt quis ea ullamco incididunt
            dolor amet laboris dolore. Adipisicing eu occaecat veniam sint
            laboris commodo velit enim quis. Labore tempor mollit enim aliqua.
          </p>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export const Control: Story = {
  render: () => <ControllableAccordion />,
};
