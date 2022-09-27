import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const InputContainer = styled.div`
  position: relative;
`;

export const InputStyles = styled.input<{ error: string | undefined }>`
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
  width: 100%;

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

export const ErrorMessage = styled.label`
  position: absolute;
  color: var(--redPrimary);
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 13px;
  line-height: 23px;
  font-weight: 500;
  bottom: 10px;
  right: 16px;
`;

export const TopLabel = styled.label`
  margin-bottom: 8px;
  color: var(--gray);
  line-height: 15px;
  font-size: 12px;
  font-weight: 700;
  font-family: "Plus Jakarta Sans", sans-serif;
  display: inline-block;
`;
