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
  position: relative;

  div {
    background-color: ${(props) => props.theme["yellow-dark"]};
    width: 22px;
    height: 22px;
    position: absolute;
    left: 28px;
    top: -8px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      color: ${(props) => props.theme["white"]};
      text-align: center;
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      font-weight: 400;
    }
  }
`;
