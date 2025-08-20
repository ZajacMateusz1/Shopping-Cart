import { useContext } from "react";
import { CartContext } from "../../store/cart-context.jsx";
import Button from "../Button/Button.jsx";
import styles from "./CartModal.module.css";
export default function CardModal({ handleModalStatus }) {
  const { items, increment, decrement, removeItem } = useContext(CartContext);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <>
      <div onClick={handleModalStatus} className={styles.background}></div>
      <div role="dialog" className={styles.modal}>
        <div>
          <h2 className={styles.h2}>Your Cart</h2>
          {items.length > 0 ? (
            <ul className={styles.ul}>
              {items.map((item) => (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                  <span>
                    <button
                      onClick={() => {
                        item.quantity > 1
                          ? decrement(item.id)
                          : removeItem(item.id);
                      }}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button onClick={() => increment(item.id)}>+</button>
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty </p>
          )}
        </div>
        <Button>Checkout</Button>
      </div>
    </>
  );
}
