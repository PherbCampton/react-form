import React from "react";
import { Input, Wrapper } from "./btn.styles";

interface ButtonProps {
  value: string;
}

const Button: React.FC<ButtonProps> = ({ value }) => (
  <Wrapper>
    <Input type="submit" value={value} />
  </Wrapper>
);

export default Button;
