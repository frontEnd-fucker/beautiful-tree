import React, { PropsWithChildren, useState } from "react";
import { AccordionContextProvider } from "./accordion.context";
import { AccordionItem } from "./accordionItem";
import { AccordionControl } from "./accordionControl";
import { AccordionPanel } from "./accordionPanel";

interface AccordionProps extends PropsWithChildren {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Accordion = ({ children, defaultValue }: AccordionProps) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <AccordionContextProvider value={{ value: value, onChange: setValue }}>
      {children}
    </AccordionContextProvider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Control = AccordionControl;
Accordion.Panel = AccordionPanel;

export { Accordion, type AccordionProps };
