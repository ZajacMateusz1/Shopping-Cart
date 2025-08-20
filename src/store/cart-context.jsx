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
      if (!product) return state;
      const exists = state.items.find(
        (product) => product.id === action.payload
      );
      const items = exists
        ? state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [
            ...state.items,
            {
              id: product.id,
              name: product.name,
              price: product.price,
              description: product.description,
              quantity: 1,
            },
          ];
      const counter = items.reduce((acc, item) => acc + item.quantity, 0);
      return { items, counter };
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
  function increment() {
    cartDispatch({
      type: "INCREMENT",
    });
  }
  function decrement() {
    cartDispatch({
      type: "DECREMENT",
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
