import React from "react";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  sm: {
    width: 16,
    height: 16,
  },
  md: {
    width: 32,
    height: 32,
  },
  lg: {
    width: 64,
    height: 64,
  },
});

export interface AvatarProps {
  /** Image url */
  src?: string;
  /** Size of the avatar */
  size?: "sm" | "md" | "lg";
}

export const Avatar: React.FC<AvatarProps> = ({ src, size = "md" }) => {
  return (
    <div>{src ? <img {...stylex.props(styles[size])} src={src} /> : null}</div>
  );
};
