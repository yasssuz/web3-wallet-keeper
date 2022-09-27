// react or any other library related content
import { HTMLAttributes, ReactNode } from "react";

// styles
import { TextContainer } from "./styles";

// components

// services and utils

// images

// types

// interfaces
export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  as: "p" | "span" | "small";
  weight: "bold" | "semibold" | "normal";
  size: "small" | "medium" | "large";
  children: ReactNode;
}

function Text({ children, ...props }: TextProps) {
  return <TextContainer {...props}>{children}</TextContainer>;
}

export default Text;
