import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["background"]};
  padding: 32px 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    padding: 16px 80px;
  }
  @media (max-width: 589px) {
    padding: 16px;
  }
`;

export const ContainerCart = styled.div`
  display: flex;
  gap: 12px;
`;

export const ContentLocation = styled.p`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 6px;
  background-color: ${(props) => props.theme["purple-light"]};
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme["purple-dark"]};
`;

export const ContentCart = styled.div`
  padding: 6px;
  background-color: ${(props) => props.theme["yellow-light"]};
  border-radius: 4px;
`;
