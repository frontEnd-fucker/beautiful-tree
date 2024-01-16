import React, { PropsWithChildren } from "react";
import { useAccordionContext } from "./accordion.context";
import { useAccordionItemContext } from "./accordionItem.context";
import stylex from "@stylexjs/stylex";
import { RxChevronDown } from "react-icons/rx";
import { easings } from "../../style/token/easing.stylex";

export interface AccordionControlProps extends PropsWithChildren {}

const styles = stylex.create({
  container: {
    width: 300,
    height: 44,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: "12px 16px",
    columnGap: 16,
  },
  arrowBase: {
    transition: "rotate .2s",
    transitionTimingFunction: easings.ease1,
  },
  arrowRotate: {
    rotate: "180deg",
  },
});

export const AccordionControl: React.FC<AccordionControlProps> = ({
  children,
}) => {
  const accordionContext = useAccordionContext();
  const { value: itemValue } = useAccordionItemContext();

  const onControlClick = () => {
    accordionContext.onChange?.(itemValue);
  };

  return (
    <div {...stylex.props(styles.container)} onClick={() => onControlClick()}>
      <div
        {...stylex.props(
          styles.arrowBase,
          accordionContext.value === itemValue && styles.arrowRotate,
        )}
      >
        <RxChevronDown size={16} />
      </div>
      {children}
    </div>
  );
};
