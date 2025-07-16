import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import * as S from "./styles";

import img from "/images/Illustration.svg";
import { useCart } from "../../hooks/useCart";
import { useParams } from "react-router-dom";

export function Success() {
  const { orders } = useCart();
  const { orderId } = useParams();
  const orderInfo = orders.find((order) => order.id === Number(orderId));

  const paymentMethod = {
    credit: "Crédito",
    debit: "Débito",
    cash: "Dinheiro",
  };

  if (!orderInfo?.id) {
    return null;
  }

  return (
    <S.Main>
      <S.ContainerInfosOrder>
        <S.ContentTextInfosOrder>
          <h3>Uhu! Pedido confirmado</h3>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </S.ContentTextInfosOrder>
        <S.ContentSucessCoffe>
          <S.CardInfosOrder>
            <S.InfosOrderCoffe>
              <S.IconTextOrder color="#8047F8">
                <MapPin color="#fff" weight="fill" />
              </S.IconTextOrder>
              <S.ContainerTextAddressCoffe>
                Entrega em{" "}
                <S.DeliveryAddressCoffe>
                  {orderInfo.street}, {orderInfo.number}
                </S.DeliveryAddressCoffe>{" "}
                {orderInfo.neighborhood} - {orderInfo.city}, , {orderInfo.state}
              </S.ContainerTextAddressCoffe>
            </S.InfosOrderCoffe>
            <S.InfosOrderCoffe>
              <S.IconTextOrder color="#DBAC2C">
                <Timer color="#fff" weight="fill" />
              </S.IconTextOrder>
              <S.ContainerTextDelivery>
                <S.TitleTextAddressCoffe>
                  Previsão de entrega
                </S.TitleTextAddressCoffe>
                <S.DeliveryAddressCoffe>20 min - 30 min</S.DeliveryAddressCoffe>
              </S.ContainerTextDelivery>
            </S.InfosOrderCoffe>
            <S.InfosOrderCoffe>
              <S.IconTextOrder color="#C47F17">
                <CurrencyDollar color="#fff" weight="bold" />
              </S.IconTextOrder>
              <S.ContainerTextDelivery>
                <S.TitleTextAddressCoffe>
                  Pagamento na entrega
                </S.TitleTextAddressCoffe>
                <S.DeliveryAddressCoffe>
                  {paymentMethod[orderInfo.paymentMethod]}
                </S.DeliveryAddressCoffe>
              </S.ContainerTextDelivery>
            </S.InfosOrderCoffe>
          </S.CardInfosOrder>
          <img src={img} alt="" />
        </S.ContentSucessCoffe>
      </S.ContainerInfosOrder>
    </S.Main>
  );
}
