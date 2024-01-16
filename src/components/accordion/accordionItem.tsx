import React, { PropsWithChildren } from "react";

import { AccordionItemContextProvider } from "./accordionItem.context";
import stylex from "@stylexjs/stylex";

export interface AccordionItemProps extends PropsWithChildren {
  value: string;
}

const styles = stylex.create({
  container: {
    borderBottom: "1px solid #DEE2E6",
    fontSize: 16,
  },
});

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  value,
}) => {
  return (
    <AccordionItemContextProvider value={{ value }}>
      <div {...stylex.props(styles.container)}>{children}</div>
    </AccordionItemContextProvider>
  );
};
