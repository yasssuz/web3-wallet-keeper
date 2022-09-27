import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonProps } from ".";

export const ButtonContainer = styled.button<ButtonProps>`
  color: ${props =>
    props.variant === "secondary" ? "var(--purplePrimary)" : "var(--white)"};
  background-color: ${props =>
    (props.variant === "primary" && "var(--purplePrimary)") ||
    (props.variant === "secondary" && "rgba(99, 95, 199, 0.1)") ||
    (props.variant === "tertiary" && "var(--redPrimary)")};
  border-radius: ${props => (props.size === "large" ? "24px" : "20px")};
  font-weight: bold;
  font-size: ${props => (props.size === "large" ? "15px" : "13px")};
  font-family: "Plus Jakarta Sans", sans-serif;
  line-height: ${props => (props.size === "large" ? "19px" : "23px")};
  display: grid;
  place-content: center;
  height: ${props => (props.size === "large" ? "48px" : "40px")};
  width: ${props => (props.width ? props.width : "100%")};
  transition: background-color 0.3s ease-out;
  padding: 16px;
  border: none;
  cursor: pointer;

  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.25;
    `}

  &:hover {
    background-color: ${props =>
      (props.variant === "primary" && "var(--purpleSecondary)") ||
      (props.variant === "secondary" && "rgba(99, 95, 199, 0.25)") ||
      (props.variant === "tertiary" && "var(--redSecondary)")};
  }
`;
