import * as S from "./styles";

import logo from "/images/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";

export function Header() {
  const { cart } = useCart();

  return (
    <S.HeaderContainer>
      <Link to={"/"}>
        <img src={logo} alt="Logo café" />
      </Link>
      <S.ContainerCart>
        <S.ContentLocation>
          <MapPin size={16} color="#8047F8" weight="fill" />
          Fortaleza, CE
        </S.ContentLocation>
        <Link to={`/checkout`}>
          <S.ContentCart>
            {cart.length > 0 && (
              <div>
                <p>{cart.length}</p>
              </div>
            )}
            <ShoppingCart size={24} color="#C47F17" weight="fill" />
          </S.ContentCart>
        </Link>
      </S.ContainerCart>
    </S.HeaderContainer>
  );
}
