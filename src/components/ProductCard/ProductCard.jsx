import { useContext } from "react";
import { CartContext } from "../../store/cart-context.jsx";
import Button from "../Button/Button.jsx";
import styles from "./ProductCard.module.css";
export default function ProductCard({ id, name, price, img, description }) {
  const { addItem } = useContext(CartContext);
  return (
    <div className={styles.productCard}>
      <img className={styles.img} src={img} alt="Product photo" />
      <h2>{name}</h2>
      <p className={styles.p}>{description}</p>
      <Button onClick={() => addItem(id)}>Buy {price}$</Button>
    </div>
  );
}
