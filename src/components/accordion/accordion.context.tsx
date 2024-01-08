import React, { createContext, useContext } from "react";

interface AccordionContextValue {
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const AccordionContext = createContext<AccordionContextValue | null>(
  null,
);

export const AccordionContextProvider: React.FC<{
  children: React.ReactNode;
  value: AccordionContextValue;
}> = ({ children, value }) => {
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "Accordion cotext should be used within AccordionContextProvider ",
    );
  }

  return context;
};
