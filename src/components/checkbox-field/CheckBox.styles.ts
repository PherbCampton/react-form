import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  font-size: 1.125rem;
`;

export const LabelWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  font-size: 1.125rem;
  justify-content: space-between;
`;

export const Label = styled.label`
  gap: 5px;
  display: flex;
  text-align: left;
  font-weight: 600;
  align-items: center;
  font-size: 0.875rem;
`;

export const Input = styled.input`
  /* display: none; */
  opacity: 0;
  position: absolute;
`;

export const IconWrapper = styled.div`
  font-size: 20px;
  cursor: pointer;
`;
