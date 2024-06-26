import stylex from "@stylexjs/stylex";
import React, {
  PropsWithChildren,
  RefObject,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { easings } from "../../style/token/easing.stylex";
import "../../style/token/easing.stylex";

export interface CollapseProps {
  /** Open state  */
  isOpen: boolean;
  /** transitionDuration in ms, 200 by default */
  transitionDuration?: number;
  /** transitionTimingFunction, ease by default */
  transitionTimingFunction?: string;
  /** Callback for the transion end */
  transitionEnd?: () => void;
}

const style = stylex.create({
  base: {
    overflow: "hidden",
    transitionProperty: "height, display",
    /** safari dont support transitionBehavior */
    transitionBehavior: "allow-discrete",
  },
  transition: (
    transitionDuration?: number,
    transitionTimingFunction?: string,
  ) => ({
    transitionDuration,
    transitionTimingFunction,
  }),
  getHeight: (height: number | "auto") => ({
    height,
  }),
});

const getElementHeight = (ref: RefObject<HTMLDivElement>): number | "auto" => {
  const ele = ref.current;
  return ele ? ele.scrollHeight : "auto";
};

const COLLAPSED_HEIGHT = 0;

export const Collapse: React.FC<PropsWithChildren<CollapseProps>> = ({
  children,
  isOpen,
  transitionDuration = 200,
  transitionTimingFunction = easings.ease1,
  transitionEnd,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(
    isOpen ? getElementHeight(ref) : COLLAPSED_HEIGHT,
  );

  useLayoutEffect(() => {
    if (isOpen) {
      /**
       * Set it to display block at first which has changed the style.
       * And then we read the scrollHeight of the dom, which will cause Force Synchronous Layout(强制同步布局)
       * so we can get the collect height.
       */
      ref.current!.style.setProperty("display", "block");
      const domHeight = getElementHeight(ref);
      setHeight(domHeight);
    } else {
      setHeight(COLLAPSED_HEIGHT);
    }
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!isOpen) {
      ref.current!.style.setProperty("display", "none");
    }
    transitionEnd?.();
  };

  return (
    <div
      ref={ref}
      {...stylex.props(
        style.base,
        style.transition(transitionDuration, transitionTimingFunction),
        style.getHeight(height),
      )}
      onTransitionEnd={handleTransitionEnd}
    >
      {children}
    </div>
  );
};
