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

export const ContentInfosOrderPay = styled.div`
  padding: 40px;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 8px;
  max-width: 640px;
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

export const ContainerInputs = styled.div`
  display: grid;
  grid-template-areas:
    "cep . ."
    "street street street"
    "number fullAddress fullAddress"
    "neighborhood city state";
  grid-template-columns: 200px 1fr 60px;
  gap: 16px;

  margin-top: 32px;
`;

export const PaymentMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
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
`;
