import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  font-size: 1.125rem;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 5px;
  justify-content: space-between;
`;

export const Label = styled.label`
  text-align: left;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  outline: none;
  padding: 0 7px;
  border-width: 1px;
  border-radius: 8px;
  border: 1.5px solid #dfdfdfff;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
`;

export const Error = styled.span`
  gap: 3px;
  margin: 0;
  padding: 0;
  color: red;
  display: flex;
  font-size: 10px;
  align-items: center;
`;
