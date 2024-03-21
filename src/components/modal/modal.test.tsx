import React from "react";
import { fireEvent, render, screen } from "../../test/utils";
import { Modal } from "./index";

describe("Modal", async () => {
  it("should render the the content, when open is true", () => {
    render(<Modal open>the content</Modal>);
    expect(screen.getByText("the content")).toBeInTheDocument();
  });

  it("should render or hide the close button with the hasCloseButton prop ", () => {
    const { rerender } = render(
      <Modal open hasCloseBtn={true}>
        the content
      </Modal>,
    );
    expect(screen.queryByTestId("close-button")).not.toBeNull();

    rerender(
      <Modal open hasCloseBtn={false}>
        the content
      </Modal>,
    );
    expect(screen.queryByTestId("close-button")).toBeNull();
  });

  it("should call onClose when close button is clicked", () => {
    const spy = vitest.fn();

    render(
      <Modal open hasCloseBtn={true} onClose={spy}>
        the content
      </Modal>,
    );
    fireEvent.click(screen.getByTestId("close-button"));

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(expect.anything(), "closeBtnClick");
  });

  it("should call onClose when backdrop is clicked", () => {
    const spy = vitest.fn();

    render(
      <Modal open hasCloseBtn={true} onClose={spy}>
        the content
      </Modal>,
    );
    fireEvent.click(screen.getByTestId("backdrop"));

    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(expect.anything(), "backdropClick");
  });

  it("should render the title", () => {
    render(
      <Modal open title="test-title">
        the content
      </Modal>,
    );

    expect(screen.getByText("test-title")).toBeInTheDocument();
  });
});
