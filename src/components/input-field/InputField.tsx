import React from "react";
import { Icon } from "@iconify/react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import {
  Label,
  Error,
  Input,
  Wrapper,
  LabelWrapper,
} from "./InputField.styles";

interface InputProps {
  id: string;
  type?: string;
  label: string;
  error: any;
  register: any;
}

const InputField: React.FC<InputProps> = ({
  id,
  label,
  error,
  register,
  type = "text",
}) => {
  const [parent] = useAutoAnimate();

  return (
    <Wrapper ref={parent}>
      <LabelWrapper>
        <Label htmlFor={id}>{label}:</Label>
        <Icon icon="line-md:question-circle" style={{ opacity: 0.7 }} />
      </LabelWrapper>
      <Input
        id={id}
        type={type}
        autoComplete="off"
        placeholder="Jane Doe"
        {...register(id, {
          required: "required",
        })}
      />
      {error?.type === "required" && (
        <Error role="alert">
          <Icon icon="line-md:alert" style={{ opacity: 0.7 }} />
          Name is required
        </Error>
      )}
    </Wrapper>
  );
};

export default InputField;
