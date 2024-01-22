import React from "react";

export interface AlertProps {
  /** Title of the alert */
  title: string;
  /** Content of the alert */
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ title, children }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  );
};

Alert.displayName = "Alert";
