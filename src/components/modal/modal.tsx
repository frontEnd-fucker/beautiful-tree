import stylex from "@stylexjs/stylex";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";
import { easings } from "../../style/token/easing.stylex";
import "../../style/token/easing.stylex";
import { useTransition } from "react-transition-state";
import { zIndex } from "../../style/token/zIndex.stylex";
import "../../style/token/zIndex.stylex";

export interface ModalProps {
  /** If true, the modal is shown */
  // open: boolean;
  /** Content of the modal */
  children: React.ReactNode;
  /** If true, there is a close button. Default is false */
  hasCloseBtn?: boolean;
  /** Title of the modal */
  // title?: string;
  /** Callback for backdrop click or close button click */
  onClose?: (
    event: React.SyntheticEvent,
    reason: "backdropClick" | "closeBtnClick",
  ) => void;
  /** transitionDuration in ms, 200 by default */
  transitionDuration?: number;
  /** transitionTimingFunction, ease by default */
  transitionTimingFunction?: string;
}

type TransitionStatusClass =
  | "transition-preEnter"
  | "transition-exiting"
  | "transition-exited";

const styles = stylex.create({
  container: {
    position: "fixed",
    inset: 0,
    "z-index": zIndex.layerImportant,
  },
  transition: (
    transitionDuration?: number,
    transitionTimingFunction?: string,
  ) => ({
    transition: "opacity",
    transitionDuration,
    transitionTimingFunction,
  }),
  "transition-preEnter": {
    opacity: 0,
  },
  "transition-exiting": {
    opacity: 0,
  },
  "transition-exited": {
    display: "none",
  },
  backdrop: {
    position: "fixed",
    background: "rgba(0, 0, 0, 0.5)",
    inset: 0,
  },
  contentWrap: {
    position: "absolute",
    left: "50%",
    top: "50%",
    background: "white",
    transform: "translate(-50%, -50%)",
  },
  header: {
    height: 38,
    padding: "16px 16px 0 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    lineHeight: 1,
  },
  body: {
    padding: 16,
  },
  closeBtn: {
    cursor: "pointer",
  },
});

const POPUP_CONTAINER = document.body;

export const Modal: React.FC<ModalProps> = ({
  children,
  open,
  hasCloseBtn = false,
  title,
  onClose,
  transitionDuration = 200,
  transitionTimingFunction = easings.ease1,
}) => {
  const [localOpen, setLocalOpen] = useState(open);
  const [transitionState, toggleTransition] = useTransition({
    timeout: transitionDuration,
    preEnter: true,
  });

  if (localOpen !== open) {
    setLocalOpen(open);
    toggleTransition(open);
  }

  const hasHeader = hasCloseBtn || !!title;

  return createPortal(
    <div
      {...stylex.props(
        styles.container,
        styles.transition(transitionDuration, transitionTimingFunction),
        styles[`transition-${transitionState.status}` as TransitionStatusClass],
      )}
    >
      <div
        {...stylex.props(styles.backdrop)}
        onClick={(e) => onClose?.(e, "backdropClick")}
        data-testid="backdrop"
      ></div>
      <div {...stylex.props(styles.contentWrap)}>
        {hasHeader && (
          <div {...stylex.props(styles.header)}>
            <div {...stylex.props(styles.title)}>{title}</div>
            {hasCloseBtn && (
              <div
                {...stylex.props(styles.closeBtn)}
                onClick={(e) => onClose?.(e, "closeBtnClick")}
                data-testid="close-button"
              >
                <RxCross2 />
              </div>
            )}
          </div>
        )}
        <div {...stylex.props(styles.body)}>{children}</div>
      </div>
    </div>,
    POPUP_CONTAINER,
  );
};

Modal.displayName = "Modal";
