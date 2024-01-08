import React, { createContext, useContext } from "react";

interface AccordionItemContextValue {
  value: string;
}

export const AccordionItemContext =
  createContext<AccordionItemContextValue | null>(null);

export const AccordionItemContextProvider: React.FC<{
  children: React.ReactNode;
  value: AccordionItemContextValue;
}> = ({ children, value }) => {
  return (
    <AccordionItemContext.Provider value={value}>
      {children}
    </AccordionItemContext.Provider>
  );
};

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      "Accordion cotext should be used within AccordionContextProvider ",
    );
  }

  return context;
};
