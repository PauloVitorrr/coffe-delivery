import styled from "styled-components";

export const ContainerCardCoffe = styled.div`
  padding: 0 24px 20px 24px;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  width: 256px;
`;

export const ContainerImageSubtitleCoffe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

export const ContentImage = styled.div`
  height: 100px;
`;

export const ImageCoffe = styled.img`
  position: relative;
  top: -20px;
`;

export const ContainerSubtitleImageCoffe = styled.div`
  display: flex;
  gap: 4px;
`;

export const SubtitleImageCoffe = styled.p`
  padding: 4px 8px;
  background-color: ${(props) => props.theme["yellow-light"]};
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 10px;
  color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 100px;
`;

export const ContentTitlePrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

export const ContentTitleSubtitleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
`;

export const TitleCard = styled.span`
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const SubtitleCard = styled.p`
  color: ${(props) => props.theme["base-label"]};
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  text-align: center;
  font-weight: 400;
`;

export const ContentPriceCart = styled.div`
  display: flex;
  gap: 23px;
`;

export const CurrecyPriceCoffeContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-end;
`;
export const CurrencyPriceCoffe = styled.p`
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme["base-title"]};
`;

export const PriceCoffe = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 800;
  color: ${(props) => props.theme["base-text"]};
`;

export const ContainerAmountCart = styled.div`
  display: flex;
  gap: 8px;
`;

export const ButtonCart = styled.div`
  background-color: ${(props) => props.theme["purple-dark"]};
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
`;

export const NumberBuyCoffe = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: ${(props) => props.theme["base-button"]};
  gap: 6px;
  border-radius: 6px;
`;

export const NumberBuyCoffeTesxt = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme["base-title"]};
`;
