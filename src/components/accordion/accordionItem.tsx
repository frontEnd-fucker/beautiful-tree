import React, { PropsWithChildren } from "react";

import { AccordionItemContextProvider } from "./accordionItem.context";

export interface AccordionItemProps extends PropsWithChildren {
  value: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  value,
}) => {
  return (
    <AccordionItemContextProvider value={{ value }}>
      {children}
    </AccordionItemContextProvider>
  );
};
