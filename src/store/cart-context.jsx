import { createContext, useReducer } from "react";
import PRODUCTS from "../PRODUCTS.js";
export const CartContext = createContext({
  items: [],
  addItem: () => {},
});

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const product = PRODUCTS.find((product) => product.id === action.payload);
      return {
        items: [...state.items, product],
        counter: state.counter + 1,
      };
    }
    case "REMOVE_ITEM": {
      return {
        items: state.items.filter((item) => item.id !== action.id),
        counter: state.counter > 0 ? state.counter - 1 : state.counter,
      };
    }
    case "CLEAR": {
      return { items: [], counter: 0 };
    }
  }
}
export default function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: [],
    counter: 0,
  });
  function handleAddItem(id) {
    cartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }
  function handleRomoveItem(id) {
    cartDispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  }
  function handleClearCart() {
    cartDispatch({
      type: "CLEAR",
    });
  }
  const cartCTX = {
    items: cartState.items,
    counter: cartState.counter,
    addItem: handleAddItem,
  };
  return (
    <CartContext.Provider value={cartCTX}>{children}</CartContext.Provider>
  );
}
