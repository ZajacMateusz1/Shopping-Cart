import { useReducer } from "react";
import PRODUCTS from "../PRODUCTS.js";
import CartContext from "./cart-context.jsx";

function sumQuantities(items) {
  return items.reduce((acc, item) => acc + item.quantity, 0);
}
function findItem(items, itemId) {
  return items.find((product) => product.id === itemId);
}
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const itemsCounter = sumQuantities(cartItems);
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const product = PRODUCTS.find((product) => product.id === action.payload);
      const exists = findItem(state.items, action.payload);
      if (!product) return state;
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
      const counter = sumQuantities(items);
      localStorage.setItem("cartItems", JSON.stringify(items));
      return { items, counter };
    }
    case "REMOVE_ITEM": {
      const items = state.items.filter((item) => item.id !== action.payload);
      const counter = sumQuantities(items);
      return {
        items,
        counter,
      };
    }
    case "CLEAR": {
      localStorage.setItem("cartItems", JSON.stringify([]));
      return { items: [], counter: 0 };
    }
    case "INCREMENT": {
      const exists = findItem(state.items, action.payload);
      const items = state.items.map((item) =>
        item.id === exists.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      const counter = sumQuantities(items);
      localStorage.setItem("cartItems", JSON.stringify(items));
      return { items, counter };
    }
    case "DECREMENT": {
      const exists = findItem(state.items, action.payload);
      const items = state.items.map((item) =>
        item.id === exists.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      const counter = sumQuantities(items);
      localStorage.setItem("cartItems", JSON.stringify(items));
      return { items, counter };
    }
    default:
      return state;
  }
}
export default function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    items: cartItems,
    counter: itemsCounter,
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
    clearCart: handleClearCart,
  };
  return (
    <CartContext.Provider value={cartCTX}>{children}</CartContext.Provider>
  );
}
