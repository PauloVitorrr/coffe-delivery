import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  gap: 102px;
  max-width: 1056px;
  margin: 0 auto;

  padding-top: 80px;
`;

export const ContainerInfosOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ContentTextInfosOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 32px;
    font-weight: 800;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CardInfosOrder = styled.div`
  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid transparent;

  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const IconTextOrder = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["yellow"]};
`;
