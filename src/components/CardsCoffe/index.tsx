import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import * as S from "./styles";

type Props = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

export default function CardsCoffe({ coffee }: Props) {
  return (
    <S.ContainerCardCoffe>
      <S.ContainerImageSubtitleCoffe>
        <S.ContentImage>
          <S.ImageCoffe src={coffee.image} />
        </S.ContentImage>
        <S.ContainerSubtitleImageCoffe>
          {coffee.tags.map((tag) => (
            <S.SubtitleImageCoffe>{tag}</S.SubtitleImageCoffe>
          ))}
        </S.ContainerSubtitleImageCoffe>
      </S.ContainerImageSubtitleCoffe>

      <S.ContentTitlePrice>
        <S.ContentTitleSubtitleCard>
          <S.TitleCard>{coffee.title}</S.TitleCard>
          <S.SubtitleCard>{coffee.description}</S.SubtitleCard>
        </S.ContentTitleSubtitleCard>
        <S.ContentPriceCart>
          <S.CurrecyPriceCoffeContainer>
            <S.CurrencyPriceCoffe>R$</S.CurrencyPriceCoffe>
            <S.PriceCoffe>{coffee.price.toFixed(2)}</S.PriceCoffe>
          </S.CurrecyPriceCoffeContainer>
          <S.ContainerAmountCart>
            <S.NumberBuyCoffe>
              <Minus color="#8047F8" weight="bold" />
              <S.NumberBuyCoffeTesxt>1</S.NumberBuyCoffeTesxt>
              <Plus color="#8047F8" weight="bold" />
            </S.NumberBuyCoffe>
            <S.ButtonCart>
              <ShoppingCartSimple color="white" weight="fill" />
            </S.ButtonCart>
          </S.ContainerAmountCart>
        </S.ContentPriceCart>
      </S.ContentTitlePrice>
    </S.ContainerCardCoffe>
  );
}
