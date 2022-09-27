import styled from "@emotion/styled";
import { TextProps } from ".";

export const TextContainer = styled.p<TextProps>`
  font-size: ${props =>
    (props.size === "large" && "15px") ||
    (props.size === "medium" && "13px") ||
    (props.size === "small" && "12px") ||
    "12px"};
  line-height: ${props =>
    (props.size === "large" && "19px") ||
    (props.size === "medium" && "23px") ||
    (props.size === "small" && "15px") ||
    "15px"};
  color: var(--gray);
  font-weight: ${props => props.weight};
`;
