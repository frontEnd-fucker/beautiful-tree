import React, { type ReactNode } from "react";

export type ButtonProps = {
  /** size of the button */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /** button content */
  children: ReactNode;
  color: string;
};

export const Button: React.FC<ButtonProps> = ({ size = "md", children }) => {
  const color = "";
  color = 2;

  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
