import CardsCoffe from "../../components/CardsCoffe";
import { coffes } from "../../../data.json";

import coffe from "/images/Coffe.svg";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import * as S from "./styles";

export default function Home() {
  return (
    <S.Main>
      <S.ContainerBannerCoffe>
        <S.ContainerLeftBannerCoffe>
          <S.ContentTextBannerCoffe>
            <S.TitleTextBannerCoffe>
              Encontre o café perfeito para qualquer hora do dia
            </S.TitleTextBannerCoffe>
            <S.SubtitleTextBannerCoffe>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </S.SubtitleTextBannerCoffe>
          </S.ContentTextBannerCoffe>
          <S.ContainerIconsBannerCoffe>
            <S.ContentIconsBannerCoffe>
              <S.ContentIcons color="#C47F17">
                <ShoppingCart size={16} color="white" weight="fill" />
              </S.ContentIcons>
              <S.TextIconsBannerCoffe>
                Compra simples e segura
              </S.TextIconsBannerCoffe>
            </S.ContentIconsBannerCoffe>
            <S.ContentIconsBannerCoffe>
              <S.ContentIcons color="#574F4D">
                <Package size={16} color="white" weight="fill" />
              </S.ContentIcons>
              <S.TextIconsBannerCoffe>
                Embalagem mantém o café intacto
              </S.TextIconsBannerCoffe>
            </S.ContentIconsBannerCoffe>
            <S.ContentIconsBannerCoffe>
              <S.ContentIcons color="#DBAC2C">
                <Timer size={16} color="white" weight="fill" />
              </S.ContentIcons>
              <S.TextIconsBannerCoffe>
                Entrega rápida e rastreada
              </S.TextIconsBannerCoffe>
            </S.ContentIconsBannerCoffe>
            <S.ContentIconsBannerCoffe>
              <S.ContentIcons color="#8047F8">
                <Coffee size={16} color="white" weight="fill" />
              </S.ContentIcons>
              <S.TextIconsBannerCoffe>
                O café chega fresquinho até você
              </S.TextIconsBannerCoffe>
            </S.ContentIconsBannerCoffe>
          </S.ContainerIconsBannerCoffe>
        </S.ContainerLeftBannerCoffe>
        <S.ContainerImage>
          <img src={coffe} />
        </S.ContainerImage>
      </S.ContainerBannerCoffe>

      <S.ContainerCards>
        <S.TitleCards>Nossos cafés</S.TitleCards>
        <S.ContentCards>
          {coffes.map((coffe) => (
            <CardsCoffe key={coffe.id} coffee={coffe} />
          ))}
        </S.ContentCards>
      </S.ContainerCards>
    </S.Main>
  );
}
