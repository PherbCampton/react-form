import { Icon } from "@iconify/react";
import React, { ChangeEvent, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { Error } from "../input-field/InputField.styles";
import { Label, Input, Wrapper, IconWrapper } from "./CheckBox.styles";

interface InputProps {
  id: string;
  register: any;
  label: string;
  error: any;
}

const CheckboxField: React.FC<InputProps> = ({
  id,
  label,
  error,
  register,
}) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = (event: ChangeEvent) => {
    setChecked(event.target?.checked);
  };
  const [parent] = useAutoAnimate();

  return (
    <Wrapper ref={parent}>
      <Input
        type="checkbox"
        id={id}
        {...register(id, {
          required: "required",
        })}
        onChange={handleCheck}
      />
      <Label htmlFor={id}>
        {checked ? (
          <IconWrapper>
            <Icon
              icon="line-md:circle-to-confirm-circle-twotone-transition"
              style={{ color: "#016bacff" }}
            />
          </IconWrapper>
        ) : (
          <IconWrapper>
            <Icon
              icon="line-md:circle-twotone"
              style={{ color: " #a5adb0ff" }}
            />
          </IconWrapper>
        )}

        <Label>{label}</Label>
      </Label>
      {error?.type === "required" && (
        <Error role="alert">
          <Icon icon="line-md:alert" style={{ opacity: 0.7 }} />
          Accepting the terms is required
        </Error>
      )}
    </Wrapper>
  );
};

export default CheckboxField;
