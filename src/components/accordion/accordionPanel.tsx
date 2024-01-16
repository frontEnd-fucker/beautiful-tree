import React, { PropsWithChildren } from "react";
import { useAccordionContext } from "./accordion.context";
import { Collapse } from "../collapse";
import stylex from "@stylexjs/stylex";
import { useAccordionItemContext } from "./accordionItem.context";

const styles = stylex.create({
  container: {
    padding: "4px 16px",
  },
});

export interface AccordionPanelProps extends PropsWithChildren {}

export const AccordionPanel: React.FC<AccordionPanelProps> = ({ children }) => {
  const { value: accordionValue } = useAccordionContext();
  const { value: itemValue } = useAccordionItemContext();

  return (
    <Collapse isOpen={itemValue === accordionValue}>
      <div {...stylex.props(styles.container)}>{children}</div>
    </Collapse>
  );
};
