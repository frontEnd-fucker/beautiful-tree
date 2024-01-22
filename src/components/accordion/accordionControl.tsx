import React, { PropsWithChildren } from "react";
import { useAccordionContext } from "./accordion.context";
import { useAccordionItemContext } from "./accordionItem.context";
import stylex from "@stylexjs/stylex";
import { RxChevronDown } from "react-icons/rx";
import { easings } from "../../style/token/easing.stylex";

export interface AccordionControlProps extends PropsWithChildren {}

const styles = stylex.create({
  container: {
    height: 44,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: "12px 16px",
    columnGap: 16,
  },
  active: {
    background: "#F2F4F5",
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
  const isActive = accordionContext.value === itemValue;

  const onControlClick = () => {
    accordionContext.onChange?.(itemValue);
  };

  return (
    <div
      {...stylex.props(styles.container, isActive && styles.active)}
      onClick={() => onControlClick()}
    >
      <div {...stylex.props(styles.arrowBase, isActive && styles.arrowRotate)}>
        <RxChevronDown size={16} />
      </div>
      {children}
    </div>
  );
};
