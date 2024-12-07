import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 108px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 94px 0 20px 0;

  @media (max-width: 1128px) {
    padding: 40px;
  }

  @media (max-width: 830px) {
    padding: 20px;
  }
`;

export const ContainerBannerCoffe = styled.section`
  display: flex;
  gap: 56px;
  align-items: center;
  max-width: 1120px;

  @media (max-width: 960px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const ContainerLeftBannerCoffe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 66px;
`;

export const ContentTextBannerCoffe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TitleTextBannerCoffe = styled.h1`
  font-size: 48px;
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  color: ${(props) => props.theme["base-title"]};
  width: 588px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SubtitleTextBannerCoffe = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ContainerIconsBannerCoffe = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const ContentIconsBannerCoffe = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const TextIconsBannerCoffe = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  color: ${(props) => props.theme["base-text"]};
  font-weight: 400;
`;

interface Color {
  color: string;
}

export const ContentIcons = styled.div<Color>`
  background-color: ${(props) => props.color};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
`;

export const ContainerImage = styled.div`
  width: 100%;
  text-align: center;
  img {
    max-width: 100%;
  }
`;

export const ContainerCards = styled.section`
  display: flex;
  flex-direction: column;
  gap: 54px;
`;

export const TitleCards = styled.h3`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 32px;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ContentCards = styled.div`
  max-width: 1120px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: 1124px) {
    justify-content: center;
  }
`;
