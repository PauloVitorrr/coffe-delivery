import * as S from "./styles";

import logo from "/images/coffees/americano.png";

export default function CardsCoffe() {
  return (
    <S.ContainerCardCoffe>
      <S.ContainerImageSubtitleCoffe>
        <S.ContentImage>
          <S.ImageCoffe src={logo} />
        </S.ContentImage>
        <S.SubtitleImageCoffe>TRADICIONAL</S.SubtitleImageCoffe>
      </S.ContainerImageSubtitleCoffe>

      <S.ContentTitlePrice>
        <S.ContentTitleSubtitleCard>
          <S.TitleCard>Expresso Tradicional</S.TitleCard>
          <S.SubtitleCard>
            O tradicional café feito com água quente e grãos moídos
          </S.SubtitleCard>
        </S.ContentTitleSubtitleCard>
        <S.ContentPriceCart>
          <S.CurrencyPriceCoffe>R$</S.CurrencyPriceCoffe>
          <S.PriceCoffe> 9,90</S.PriceCoffe>
        </S.ContentPriceCart>
      </S.ContentTitlePrice>
    </S.ContainerCardCoffe>
  );
}
