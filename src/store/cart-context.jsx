import { createContext, useReducer } from "react";
export const CartContext = createContext({
  items: [],
});

function cartReducer(state, action) {
  switch (action.type) {
    case "add_item":
      break;
  }
}
export default function CartContextProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [] });
  function handleAddItem(id) {
    cartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }
  const cartCTX = {
    items: cartState.items,
    addItem: handleAddItem,
  };
  return (
    <CartContext.Provider value={cartCTX}>{children}</CartContext.Provider>
  );
}
