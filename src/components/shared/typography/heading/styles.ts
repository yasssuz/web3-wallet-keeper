import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { HeadingProps } from ".";
import { MediaQuery } from "../../../../utils/global";

export const HeadingContainer = styled.h1<HeadingProps>`
  font-size: ${props =>
    (props.size === "large" && "24px") ||
    (props.size === "medium" && "18px") ||
    (props.size === "small" && "15px") ||
    "12px"};
  line-height: ${props =>
    (props.size === "large" && "30px") ||
    (props.size === "medium" && "23px") ||
    (props.size === "small" && "19px") ||
    "15px"};
  color: ${props => (props.size === "small" ? "var(--gray)" : "var(--text)")};
  font-weight: bold;
  letter-spacing: ${props => (props.size === "small" ? "2.4px" : "")};
  font-family: "Plus Jakarta Sans";

  ${props =>
    props.size === "large" &&
    css`
      ${MediaQuery.md} {
        font-size: 20px;
        line-height: 25px;
      }

      ${MediaQuery.sm} {
        font-size: 18px;
        line-height: 23px;
      }
    `};
`;
