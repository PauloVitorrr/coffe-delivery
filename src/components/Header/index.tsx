import * as S from "./styles";

import logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={logo} alt="Logo café" />
      <S.ContainerCart>
        <S.ContentLocation>
          <MapPin size={16} color="#8047F8" weight="fill" />
          Fortaleza, CE
        </S.ContentLocation>
        <S.ContentCart>
          <ShoppingCart size={24} color="#C47F17" weight="fill" />
        </S.ContentCart>
      </S.ContainerCart>
    </S.HeaderContainer>
  );
}
