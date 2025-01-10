import { Input } from "../../components/Input";
import * as S from "./styles";

export default function Checkout() {
  return (
    <S.Main>
      <S.ContainerInfosOrder>
        <S.TitlesOrder>Complete seu pedido</S.TitlesOrder>
        <S.ContentInfosOrder>
          <p>aaaa</p>
          <Input />
        </S.ContentInfosOrder>
        <p>aaaaa</p>
      </S.ContainerInfosOrder>
      <S.ContainerCoffeOrderSelect>
        <S.TitlesOrder>Cafés selecionados</S.TitlesOrder>
      </S.ContainerCoffeOrderSelect>
    </S.Main>
  );
}
