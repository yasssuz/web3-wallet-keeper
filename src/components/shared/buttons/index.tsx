// react or any other library related content

// styles
import { ButtonContainer } from "./styles";

// components

// services and utils

// images

// types
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
type ButtonSizeSelector =
  | { variant: "primary" | "tertiary"; size: "large" | "medium" }
  | { variant: "secondary" | "tertiary"; size?: never };
export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonSizeSelector & {
    variant: "primary" | "secondary" | "tertiary";
    children: ReactNode;
    width?: string;
  };

// interfaces

function Button({ children, ...props }: ButtonProps) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}

export default Button;
