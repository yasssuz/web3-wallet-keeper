// react or any other library related content
import {
  DetailedHTMLProps,
  forwardRef,
  Ref,
  TextareaHTMLAttributes,
} from "react";

// styles
import { ErrorMessage, TopLabel } from "../input/styles";
import { TextareaContainer, TextareaStyles } from "./styles";

// components

// services and utils

// images

// types

// interfaces
export interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  id: string;
  name: string;
  label?: string;
  error?: string;
}

function Textarea(
  { error, label, id, ...rest }: TextareaProps,
  ref: Ref<HTMLTextAreaElement>
) {
  return (
    <TextareaContainer>
      <TopLabel htmlFor={id}>{label}</TopLabel>
      <TextareaStyles
        as='textarea'
        error={error}
        id={id}
        ref={ref as any}
        {...rest}
      />
      {error && <ErrorMessage htmlFor={id}>{error}</ErrorMessage>}
    </TextareaContainer>
  );
}

export default forwardRef(Textarea);
