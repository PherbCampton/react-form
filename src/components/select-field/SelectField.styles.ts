import styled from "styled-components";
export { Label, Wrapper, LabelWrapper } from "../input-field/InputField.styles";

export const Select = styled.select`
  width: 100%;
  outline: none;
  border-width: 1px;
  border: 1.5px solid #dfdfdfff;
`;

export const Option = styled.option`
  width: 100%;
  outline: none;
  padding: 10px;
  cursor: pointer;
  border-width: 1px;
  border-bottom: 0.5px solid #dfdfdfff;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  &:hover {
    background-color: #e8ebeeff;
  }
`;
