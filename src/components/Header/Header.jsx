import styles from "./Header.module.css";
export default function Header({ children }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>{children}</h1>
      <span className={styles.imgCart}>Your Cart</span>
    </header>
  );
}
