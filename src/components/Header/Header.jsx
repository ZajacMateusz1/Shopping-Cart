import { use } from "react";
import CartContext from "../../store/cart-context.jsx";
import styles from "./Header.module.css";
export default function Header({ children, handleModalStatus }) {
  const { counter } = use(CartContext);
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>{children}</h1>
      <span onClick={handleModalStatus} className={styles.imgCart}>
        Cart: {counter}
      </span>
    </header>
  );
}
