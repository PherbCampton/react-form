import styled from "styled-components";

export { Heading } from "../form/Form.syles";
export { Label, LabelWrapper } from "../input-field/InputField.styles";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  font-size: 1.125rem;

  &.basic-multi-select {
    outline: none;
    font-size: 12px;
  }
`;

export const Input = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  padding: 0 7px;
  font-size: 14px;
  font-weight: 500;
  min-width: 320px;
  border-width: 1px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 10px;
  border: 1.5px solid #dfdfdfff;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
`;
