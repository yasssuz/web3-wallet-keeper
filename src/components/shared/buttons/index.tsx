// react or any other library related content

// styles
import { ButtonContainer } from "./styles";

// components

// services and utils

// images

// types
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

// interfaces
export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "primary" | "secondary" | "tertiary";
  size: "large" | "medium";
  children: ReactNode;
  width?: string;
}

function Button({ children, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}

export default Button;
