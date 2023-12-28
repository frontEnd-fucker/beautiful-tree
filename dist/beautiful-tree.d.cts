import React, { ReactNode } from 'react';

type ButtonProps = {
    /** size of the button */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /** button content */
    children: ReactNode;
    color: string;
};
declare const Button: React.FC<ButtonProps>;

interface AvatarProps {
    /** Image url */
    src?: string;
    /** Size of the avatar */
    size?: "sm" | "md" | "lg";
}
declare const Avatar: React.FC<AvatarProps>;

export { Avatar, type AvatarProps, Button, type ButtonProps };
