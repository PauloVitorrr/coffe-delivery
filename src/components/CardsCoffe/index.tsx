import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import * as S from "./styles";
import { useContext, useState } from "react";
import CartContext from "../../contexts/CartProvider";

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
  const [quantity, setQuantity] = useState(0);

  const { cart } = useContext(CartContext);

  function handleAddToCart() {
    // setQntd(quantity);
  }

  function handleAddQuantity() {
    setQuantity((state) => state + 1);
  }

  function handleSubstractQuantity() {
    if (quantity > 0) {
      setQuantity((state) => state - 1);
    }
  }

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
              <button onClick={() => handleSubstractQuantity()}>
                <Minus color="#8047F8" weight="bold" />
              </button>
              <S.NumberBuyCoffeTesxt>{quantity}</S.NumberBuyCoffeTesxt>
              <button onClick={() => handleAddQuantity()}>
                <Plus color="#8047F8" weight="bold" />
              </button>
            </S.NumberBuyCoffe>
            <S.ButtonCart onClick={() => handleAddToCart()}>
              <ShoppingCartSimple color="white" weight="fill" />
            </S.ButtonCart>
          </S.ContainerAmountCart>
        </S.ContentPriceCart>
      </S.ContentTitlePrice>
    </S.ContainerCardCoffe>
  );
}
