import React, { ReactNode } from 'react';

type ButtonProps = {
    /** size of the button */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** button content */
    children: ReactNode;
    color: string;
};
declare const Button: React.FC<ButtonProps>;

export { Button, type ButtonProps };
