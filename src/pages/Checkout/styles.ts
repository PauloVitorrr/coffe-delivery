import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  gap: 15px;

  max-width: 1120px;
  margin: 0 auto;
  @media (max-width: 1183px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    padding-bottom: 8px;
  }
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

export const ContentInfosOrderPay = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 8px;
  max-width: 640px;
  @media (max-width: 768px) {
    width: 368px;
    padding: 6px;
  }
`;

export const ContainerTextDeliveryAndPay = styled.div`
  display: flex;
  gap: 8px;
`;

export const ContentTextDeliveryAndPay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  & > span {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  & > p {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const formAdress = styled.form`
  display: grid;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number fullAddress fullAddress"
    "neighborhood city state";
  grid-template-columns: 200px 1fr 60px;
  gap: 16px 12px;

  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-areas:
      "cep"
      "street"
      "number"
      "fullAddress"
      "neighborhood"
      "city"
      "state";
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    & > span {
      font-family: "Roboto", sans-serif;
      color: ${(props) => props.theme["base-text"]};
      font-size: 12px;
    }
  }
`;

export const PaymentErrorMessage = styled.p`
  font-weight: 400;
  color: red;
  font-family: "Roboto", sans-serif;
`;

export const CardsPaymentMethods = styled.div`
  padding: 16px;
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 8px;
  margin-top: 32px;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  & > span {
    font-family: "Roboto", sans-serif;
    color: ${(props) => props.theme["base-text"]};
    font-size: 12px;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const ContainerCoffeSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  padding: 40px;

  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px 6px 44px;
  max-width: 448px;
`;

export const ContentCoffeSelect = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  max-width: 448px;

  padding-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
`;

export const InfosCoffeSelect = styled.div`
  span {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 400;
  }

  div {
    display: flex;
    gap: 8px;
    margin-top: 6px;
  }
`;

export const ButtonRemoveCoffe = styled.button`
  display: flex;
  align-items: center;
  padding: 6.5px;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  border: none;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
  span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};
    font-size: 12px;
  }
`;

export const ButtonAmountCoffe = styled.div`
  display: flex;
  align-items: center;

  background-color: ${(props) => props.theme["base-button"]};
  padding: 5.5px;
  border-radius: 6px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 16px;
  }
`;

export const PriceCoffe = styled.p`
  font-weight: 700;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme["base-text"]};
`;
export const ContainerPaymentPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-family: "Roboto", sans-serif;
      color: ${(props) => props.theme["base-text"]};
    }
  }

  span:last-child {
    font-family: "Roboto", sans-serif;
  }

  div:last-child {
    span {
      font-family: "Roboto", sans-serif;
      font-weight: bold;
    }
  }
`;

export const ButtonConfirmOrder = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme["yellow"]};
  color: ${(props) => props.theme["white"]};
  font-family: "Roboto", sans-serif;
  font-weight: 700;

  padding: 12px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
