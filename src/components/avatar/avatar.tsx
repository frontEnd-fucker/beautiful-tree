import React from "react";
import stylex from "@stylexjs/stylex";
// import { colors } from "@stylexjs/open-props/lib/colors.stylex";
// import "@stylexjs/open-props/lib/colors.stylex";
import { colors } from "../../style/token/color.stylex";
import "../../style/token/color.stylex";
// import { tokens } from "./token.stylex";
// import "./token.stylex";
import { RxAvatar } from "react-icons/rx";

const styles = stylex.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: tokens.lineColor,
    // color: colors.blue0,
    backgroundColor: colors.blue0,
    borderRadius: "100%",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "100%",
  },
  sm: {
    width: 26,
    height: 26,
  },
  md: {
    width: 38,
    height: 38,
  },
  lg: {
    width: 56,
    height: 56,
  },
});

export interface AvatarProps {
  /** Image url */
  src?: string;
  /** Size of the avatar */
  size?: "sm" | "md" | "lg";
  /** Image alt attribute */
  alt?: string;
  /** Placeholder when there is no image */
  placeholder?: React.ReactNode; // TODO: add default Icon
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  size = "md",
  alt,
  placeholder = <RxAvatar />,
}) => {
  return (
    <div {...stylex.props(styles.container, styles[size])}>
      {src ? (
        <img {...stylex.props(styles.img)} src={src} alt={alt} />
      ) : (
        placeholder
      )}
    </div>
  );
};
