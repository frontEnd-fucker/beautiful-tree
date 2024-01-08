import React, { PropsWithChildren } from "react";
import { useAccordionContext } from "./accordion.context";
import { Collapse } from "../collapse";
import { useAccordionItemContext } from "./accordionItem.context";

export interface AccordionPanelProps extends PropsWithChildren {}

export const AccordionPanel: React.FC<AccordionPanelProps> = ({ children }) => {
  const { value: accordionValue } = useAccordionContext();
  const { value: itemValue } = useAccordionItemContext();

  return <Collapse isOpen={itemValue === accordionValue}>{children}</Collapse>;
};
