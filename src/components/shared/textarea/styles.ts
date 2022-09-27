import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TextareaContainer = styled.div`
  position: relative;
`;

export const TextareaStyles = styled.textarea<{ error: string | undefined }>`
  border-radius: 4px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  background: var(--secondaryBg);
  padding: 8px 16px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  color: var(--text);
  outline: none;
  transition: border-color 0.15s cubic-bezier(0.53, 0.21, 0, 1);
  resize: none;
  width: 100%;
  height: 112px;

  &:focus {
    border-color: var(--purplePrimary);
  }

  &::placeholder {
    opacity: 0.25;
    color: var(--text);
  }

  ${({ error }) =>
    error &&
    css`
      border-color: var(--redPrimary);
    `}
`;
