import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  padding: 12px;
  background-color: ${(props) => props.theme["base-input"]};
  font-family: "Roboto", sans-serif;
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  color: ${(props) => props.theme["base-text"]};
  font-weight: 400;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;
