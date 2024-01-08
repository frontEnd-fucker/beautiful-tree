import React, { PropsWithChildren } from "react";
import { useAccordionContext } from "./accordion.context";
import { useAccordionItemContext } from "./accordionItem.context";

export interface AccordionControlProps extends PropsWithChildren {}

export const AccordionControl: React.FC<AccordionControlProps> = ({
  children,
}) => {
  const accordionContext = useAccordionContext();
  const { value: itemValue } = useAccordionItemContext();

  const onControlClick = () => {
    accordionContext.onChange?.(itemValue);
  };

  return <div onClick={() => onControlClick()}>{children}</div>;
};
