import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  background-color: ${(props) => props.theme["base-input"]};

  transition: all 0.2s;

  &[data-state="focused"] {
    border-color: ${(props) => props.theme["yellow-dark"]};
  }

  &[data-state="blurred"] {
    border-color: ${(props) => props.theme["base-button"]};
  }
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
  width: 100%;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const ErrorMessage = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: red;
`;
