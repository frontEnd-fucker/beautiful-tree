// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

import { Modal, ModalProps } from ".";

const meta: Meta<typeof Modal> = {
  component: Modal,
  // tags: ["autodocs"],
  // title: "Modal",
};

export default meta;

type Story = StoryObj<typeof Modal>;

const BasicModal = ({
  closeOnBackdrop = false,
  hasCloseBtn = true,
}: {
  closeOnBackdrop?: boolean;
  hasCloseBtn?: boolean;
}) => {
  const [open, setOpen] = useState(false);

  const handleClose: ModalProps["onClose"] = (e, reason) => {
    if (reason === "closeBtnClick") {
      setOpen(false);
    } else if (reason === "backdropClick" && closeOnBackdrop) {
      setOpen(false);
    }
  };
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <Modal
        open={open}
        hasCloseBtn={hasCloseBtn}
        title="Modal Title"
        onClose={handleClose}
      >
        Commodo enim eiusmod officia magna et consequat magna non reprehenderit
        nisi cupidatat non non. In officia officia qui nisi laborum. Occaecat
        Lorem ullamco cillum voluptate irure sit ad reprehenderit sunt eiusmod
        sit culpa. Ad fugiat reprehenderit do do ex dolor culpa consectetur est.
        Cillum est ad et voluptate laborum et. Consectetur qui labore esse sunt
        consectetur ut. Aliqua irure sunt mollit consectetur mollit deserunt
        aliqua officia exercitation quis adipisicing mollit elit enim.
      </Modal>
    </>
  );
};

export const Basic: Story = {
  render: () => <BasicModal />,
};

export const CloseOnBackdrop: Story = {
  render: () => <BasicModal closeOnBackdrop />,
};

export const Title: Story = {
  render: () => <BasicModal hasCloseBtn={false} />,
};
