import { useContext } from "react";
import { createPortal } from "react-dom";
import CartContext from "../../store/cart-context.jsx";
import Button from "../Button/Button.jsx";
import CloseButton from "../CloseButton/CloseButton.jsx";
import styles from "./CartModal.module.css";
export default function CartModal({ handleModalStatus }) {
  const { items, increment, decrement, removeItem, clearCart } =
    useContext(CartContext);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return createPortal(
    <>
      <div onClick={handleModalStatus} className={styles.background}></div>
      <div role="dialog" className={styles.modal}>
        <div>
          <h2 className={styles.h2}>Your Cart</h2>
          {items.length > 0 ? (
            <>
              <ul className={styles.ul}>
                {items.map((item) => (
                  <li className={styles.li} key={item.id}>
                    <div className={styles.itemInfo}>
                      <span>{item.name}</span>
                      <span>
                        <button
                          className={styles.controlQuantityButton}
                          onClick={() => {
                            item.quantity > 1
                              ? decrement(item.id)
                              : removeItem(item.id);
                          }}
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          className={styles.controlQuantityButton}
                          onClick={() => increment(item.id)}
                        >
                          +
                        </button>
                      </span>
                    </div>
                    <p className={styles.price}>
                      Price: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
              <p>Total price: ${totalPrice.toFixed(2)}</p>
            </>
          ) : (
            <p>Your cart is empty </p>
          )}
        </div>
        <div className={styles.buttons}>
          <CloseButton onClick={clearCart}>Clear cart</CloseButton>
          <Button>Checkout</Button>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}
