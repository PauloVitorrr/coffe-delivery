import * as S from "./styles";

import logo from "/images/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cart } = useCart();

  return (
    <S.HeaderContainer>
      <img src={logo} alt="Logo café" />
      <S.ContainerCart>
        <S.ContentLocation>
          <MapPin size={16} color="#8047F8" weight="fill" />
          Fortaleza, CE
        </S.ContentLocation>
        <S.ContentCart>
          {cart.length > 0 && (
            <div>
              <p>{cart.length}</p>
            </div>
          )}
          <ShoppingCart size={24} color="#C47F17" weight="fill" />
        </S.ContentCart>
      </S.ContainerCart>
    </S.HeaderContainer>
  );
}
