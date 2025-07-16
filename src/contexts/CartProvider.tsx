import { createContext, ReactNode, useEffect, useReducer } from "react";
import { cartReducer, Item, Order } from "../reducers/cart/reducer";
import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from "../reducers/cart/actions";
import { OrderInfo } from "../pages/Checkout";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface CartContextType {
  cart: Item[];
  addItem: (item: Item) => void;
  removeItem: (itemId: Item["id"]) => void;
  incrementItemQuantity: (itemId: Item["id"]) => void;
  decrementItemQuantity: (ItemId: Item["id"]) => void;
  checkout: (order: OrderInfo) => void;
  orders: Order[];
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

  const navigate = useNavigate();

  function addItem(item: Item) {
    dispatch(addItemAction(item));
  }

  function removeItem(itemId: Item["id"]) {
    dispatch(removeItemAction(itemId));
  }

  function decrementItemQuantity(itemId: Item["id"]) {
    dispatch(decrementItemQuantityAction(itemId));
  }

  function incrementItemQuantity(itemId: Item["id"]) {
    dispatch(incrementItemQuantityAction(itemId));
  }

  function checkout(order: OrderInfo) {
    dispatch(checkoutCartAction(order, navigate));
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState);

      localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
    }
  }, [cartState]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        incrementItemQuantity,
        decrementItemQuantity,
        orders,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
