import React from "react";
import { render, screen } from "../../test/utils";
import { Button } from "./index";

describe("Button", async () => {
  it("should render the the content", () => {
    render(<Button color="red">I am content</Button>);
    expect(screen.getByText("I am content")).toBeInTheDocument();
  });
});
