import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import * as S from "./styles";

import imga from "/images/Illustration.svg";

export function Success() {
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
                  Rua João Daniel Martinelli, 102
                </S.DeliveryAddressCoffe>{" "}
                Farrapos - Porto Alegre, RS
              </S.ContainerTextAddressCoffe>
            </S.InfosOrderCoffe>
            <S.InfosOrderCoffe>
              <S.IconTextOrder color="#DBAC2C">
                <Timer color="#fff" weight="fill" />
              </S.IconTextOrder>
              <S.ContainerTextDelivery>
                <S.ContainerTextAddressCoffe>
                  Previsão de entrega
                </S.ContainerTextAddressCoffe>
                <S.DeliveryAddressCoffe>20 min - 30 min</S.DeliveryAddressCoffe>
              </S.ContainerTextDelivery>
            </S.InfosOrderCoffe>
            <S.InfosOrderCoffe>
              <S.IconTextOrder color="#C47F17">
                <CurrencyDollar color="#fff" weight="bold" />
              </S.IconTextOrder>
              <S.ContainerTextDelivery>
                <S.ContainerTextAddressCoffe>
                  Pagamento na entrega
                </S.ContainerTextAddressCoffe>
                <S.DeliveryAddressCoffe>
                  Cartão de Crédito
                </S.DeliveryAddressCoffe>
              </S.ContainerTextDelivery>
            </S.InfosOrderCoffe>
          </S.CardInfosOrder>
          <img src={imga} alt="" />
        </S.ContentSucessCoffe>
      </S.ContainerInfosOrder>
    </S.Main>
  );
}
