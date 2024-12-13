import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  gap: 15px;

  max-width: 1120px;
  margin: 0 auto;
`;

export const ContainerInfosOrder = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContainerCoffeOrderSelect = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContentCoffeOrderSelect = styled.div`
  padding: 40px;
  max-width: 448px;
  width: 100%;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const TitlesOrder = styled.h6`
  font-family: "Baloo 2", sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ContentInfosOrder = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme["base-card"]};
`;
