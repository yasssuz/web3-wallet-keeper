// react or any other library related content
import { HTMLAttributes, ReactNode } from "react";

// styles
import { HeadingContainer } from "./styles";

// components

// services and utils

// images

// types

// interfaces
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong";
  size: "large" | "medium" | "small";
  children: ReactNode;
}

function Heading({ children, ...props }: HeadingProps) {
  return <HeadingContainer {...props}>{children}</HeadingContainer>;
}

export default Heading;
