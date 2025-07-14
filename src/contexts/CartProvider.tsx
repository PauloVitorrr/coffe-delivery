import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer, Item } from "../reducers/cart/reducer";
import { addItemAction } from "../reducers/cart/actions";

interface CartType {
  id: number;
  quantity: number;
}

interface CartContextType {
  cart: Item[];
  addItem: (item: Item) => void;
}

const CartContext = createContext({} as CartContextType);

interface CartContextProviderType {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderType) {
  //aplicando o useReducer para manipular o carrinho de compras
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
      return cartState;
    }
  );

  const { cart, orders } = cartState;

  //funcao que atualiza e usa o typeAction para adicionar o item ao carrinho
  function addItem(item: Item) {
    dispatch(addItemAction(item));
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState);

      localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
    }
  }, [cartState]);

  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
