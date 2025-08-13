import { createContext } from "react";
export const CartContext = createContext({
  items: [],
});

export default function CartContextProvider({ children }) {
  return (
    <CartContext.Provider value={{ items: [] }}>
      {children}
    </CartContext.Provider>
  );
}
