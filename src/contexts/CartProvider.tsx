import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer, Item } from "../reducers/cart/reducer";
import { addItemAction, removeItemAction } from "../reducers/cart/actions";

interface CartType {
  id: number;
  quantity: number;
}

interface CartContextType {
  cart: Item[];
  addItem: (item: Item) => void;
  removeItem: (itemId: Item["id"]) => void;
}

const CartContext = createContext({} as CartContextType);

interface CartContextProviderType {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderType) {
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

  function addItem(item: Item) {
    dispatch(addItemAction(item));
  }

  function removeItem(itemId: Item["id"]) {
    dispatch(removeItemAction(itemId));
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState);

      localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
    }
  }, [cartState]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
