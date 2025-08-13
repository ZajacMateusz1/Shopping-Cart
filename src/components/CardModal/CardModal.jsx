import { useContext } from "react";
import { CartContext } from "../../store/cart-context.jsx";
import Button from "../Button/Button.jsx";
export default function CardModal() {
  const { items } = useContext(CartContext);
  return (
    <div role="dialog">
      <h2>Your Cart</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
      <Button>Checkout</Button>
    </div>
  );
}
