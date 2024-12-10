import { Timer } from "phosphor-react";
import * as S from "./styles";

export function Success() {
  return (
    <S.Main>
      <S.ContainerInfosOrder>
        <S.ContentTextInfosOrder>
          <h3>Uhu! Pedido confirmado</h3>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </S.ContentTextInfosOrder>
        <S.CardInfosOrder>
          <S.IconTextOrder>
            <Timer />
          </S.IconTextOrder>
        </S.CardInfosOrder>
      </S.ContainerInfosOrder>
    </S.Main>
  );
}
