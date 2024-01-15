import React, { RefObject, createRef } from "react";
import { fireEvent, render, screen } from "../../test/utils";
import { Accordion } from ".";

describe("Accordion", async () => {
  it("should render the default item", () => {
    const ref = createRef<RefObject<HTMLDivElement> & null>();

    render(
      <Accordion defaultValue="item1">
        <Accordion.Item value="item1">
          <Accordion.Control>item 1</Accordion.Control>
          <Accordion.Panel>item 1 description</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="item2">
          <Accordion.Control>item 2</Accordion.Control>
          <Accordion.Panel>
            <div ref={ref}>item 2 description</div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>,
    );

    // because transition take times, fire transitionEnd so that we can test the visible after the transion is done
    fireEvent.transitionEnd(ref.current!);
    expect(screen.getByText("item 1 description")).toBeInTheDocument();
    expect(screen.getByText("item 2 description")).not.toBeVisible();
  });
});
