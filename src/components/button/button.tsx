import React, { type ReactNode } from "react";

export type ButtonProps = {
  /** size of the button */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** button content */
  children: ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ size = "md", children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
