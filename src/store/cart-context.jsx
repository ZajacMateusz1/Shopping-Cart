import { createContext, useReducer } from "react";
import PRODUCTS from "../PRODUCTS.js";
export const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  increment: () => {},
  decrement: () => {},
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
      const items = state.items.filter((item) => item.id !== action.payload);
      const counter = items.reduce((acc, item) => acc + item.quantity, 0);
      return {
        items,
        counter,
      };
    }
    case "CLEAR": {
      return { items: [], counter: 0 };
    }
    case "INCREMENT": {
      const exists = state.items.find(
        (product) => product.id === action.payload
      );
      const items = state.items.map((item) =>
        item.id === exists.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      const counter = items.reduce((acc, item) => acc + item.quantity, 0);
      return { items, counter };
    }
    case "DECREMENT": {
      const exists = state.items.find(
        (product) => product.id === action.payload
      );
      const items = state.items.map((item) =>
        item.id === exists.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      const counter = items.reduce((acc, item) => acc + item.quantity, 0);
      return { items, counter };
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
  function increment(id) {
    cartDispatch({
      type: "INCREMENT",
      payload: id,
    });
  }
  function decrement(id) {
    cartDispatch({
      type: "DECREMENT",
      payload: id,
    });
  }
  const cartCTX = {
    items: cartState.items,
    counter: cartState.counter,
    addItem: handleAddItem,
    removeItem: handleRomoveItem,
    increment: increment,
    decrement: decrement,
  };
  return (
    <CartContext.Provider value={cartCTX}>{children}</CartContext.Provider>
  );
}
