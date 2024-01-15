import React, { PropsWithChildren } from "react";
import { AccordionContextProvider } from "./accordion.context";
import { AccordionItem } from "./accordionItem";
import { AccordionControl } from "./accordionControl";
import { AccordionPanel } from "./accordionPanel";
import { useUncontrolled } from "../../hooks/useUncontrolled";

interface AccordionProps extends PropsWithChildren {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Accordion = ({
  children,
  defaultValue,
  value,
  onChange,
}: AccordionProps) => {
  const [realValue, setRealValue] = useUncontrolled({
    value,
    defaultValue,
    onChange,
  });

  return (
    <AccordionContextProvider
      value={{ value: realValue, onChange: setRealValue }}
    >
      {children}
    </AccordionContextProvider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Control = AccordionControl;
Accordion.Panel = AccordionPanel;

export { Accordion, type AccordionProps };
