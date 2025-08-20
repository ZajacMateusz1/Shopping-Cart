import { createContext } from "react";
const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  increment: () => {},
  decrement: () => {},
  clearCart: () => {},
});
export default CartContext;
