import styled from "styled-components";

export const Container = styled.label`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  text-transform: uppercase;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
  }

  &[data-state="true"] {
    background-color: ${(props) => props.theme["purple-light"]};
    border-color: ${(props) => props.theme["purple"]};
  }

  input {
    display: none;
  }
  svg {
    color: ${(props) => props.theme["purple"]};
  }
  span {
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-text"]};
    font-size: 12px;
  }
`;
