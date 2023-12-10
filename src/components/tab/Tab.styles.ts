import styled from "styled-components";
export { Label, Wrapper, LabelWrapper } from "../input-field/InputField.styles";

export const Tabs = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 600;
  border-radius: 10px;
  align-items: center;
  background-color: white;
`;

export const Section = styled.div`
  width: 50%;
  opacity: 0.3;
  cursor: pointer;
  padding: 5px 20px;
  text-align: center;
  border-radius: 10px;
  background-color: white;

  &.active {
    opacity: 0.8;
    border: 4px solid white;
    background-color: #f5f5f5;
  }
`;
