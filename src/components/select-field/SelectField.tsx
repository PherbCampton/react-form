import React from "react";
import { Icon } from "@iconify/react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import {
  Label,
  Select,
  Option,
  Wrapper,
  LabelWrapper,
} from "./SelectField.styles";
import { Error } from "../input-field/InputField.styles";

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

interface SelectProps {
  id: string;
  label: string;
  options: Option[];
  error: any;
  register: any;
}

const SelectField: React.FC<SelectProps> = ({
  id,
  label,
  error,
  options,
  register,
}) => {
  const [parent] = useAutoAnimate();

  return (
    <Wrapper ref={parent}>
      <LabelWrapper>
        <Label htmlFor={id}>{label}:</Label>
        <Icon icon="line-md:question-circle" style={{ opacity: 0.7 }} />
      </LabelWrapper>
      <Select
        id={id}
        multiple
        size={5}
        {...register(id, {
          required: "required",
        })}
      >
        {renderOptions(options)}
      </Select>
      {error?.type === "required" && (
        <Error role="alert">
          <Icon icon="line-md:alert" style={{ opacity: 0.7 }} />
          Selector is required
        </Error>
      )}
    </Wrapper>
  );
};

const renderOptions = (options: Option[], depth = 0) => {
  return options.map((option) => (
    <React.Fragment key={option.value}>
      <Option value={option.value}>
        {"\u00A0".repeat(depth * 4)}
        {option.label}
      </Option>
      {option.children && renderOptions(option.children, depth + 1)}
    </React.Fragment>
  ));
};

export default SelectField;
