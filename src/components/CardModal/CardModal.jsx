import { useContext } from "react";
import { CartContext } from "../../store/cart-context.jsx";
import Button from "../Button/Button.jsx";
import styles from "./CardModal.module.css";
export default function CardModal({ handleModalStatus }) {
  const { items } = useContext(CartContext);
  return (
    <>
      <div onClick={handleModalStatus} className={styles.background}></div>
      <div role="dialog" className={styles.modal}>
        <div>
          <h2 className={styles.h2}>Your Cart</h2>
          {items.length > 0 ? (
            <ul className={styles.ul}>
              {items.map((item) => (
                <li key={item.id}>{item.name}</li>
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
