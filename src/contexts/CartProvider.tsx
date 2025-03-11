import React, { createContext, ReactNode, useState } from "react";

interface CartType {
  id: number;
  quantity: number;
}

interface CartContextType {
  cart: CartType[];
}

const CartContext = createContext({} as CartContextType);

interface CartContextProviderType {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderType) {
  const [cart, setCart] = useState<CartType[]>([]);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
}

export default CartContext;
