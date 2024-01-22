import React, { ReactNode, PropsWithChildren } from 'react';

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
    /** Image alt attribute */
    alt?: string;
    /** Placeholder when there is no image */
    placeholder?: React.ReactNode;
}
declare const Avatar: React.FC<AvatarProps>;

interface CollapseProps {
    /** Open state  */
    isOpen: boolean;
    /** transitionDuration in ms, 200 by default */
    transitionDuration?: number;
    /** transitionTimingFunction, ease by default */
    transitionTimingFunction?: string;
    /** Callback for the transion end */
    transitionEnd?: () => void;
}
declare const Collapse: React.FC<PropsWithChildren<CollapseProps>>;

interface AccordionPanelProps extends PropsWithChildren {
}

interface AccordionControlProps extends PropsWithChildren {
}

interface AccordionItemProps extends PropsWithChildren {
    value: string;
}

interface AccordionProps extends PropsWithChildren {
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
}
declare const Accordion: {
    ({ children, defaultValue, value, onChange, }: AccordionProps): React.JSX.Element;
    Item: React.FC<AccordionItemProps>;
    Control: React.FC<AccordionControlProps>;
    Panel: React.FC<AccordionPanelProps>;
};

export { Accordion, type AccordionProps, Avatar, type AvatarProps, Button, type ButtonProps, Collapse, type CollapseProps };
