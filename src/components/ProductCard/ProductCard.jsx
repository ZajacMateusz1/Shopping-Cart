import Button from "../Button/Button.jsx";
import styles from "./ProductCard.module.css";
export default function ProductCard({ name, price, img, description }) {
  return (
    <div className={styles.productCard}>
      <img className={styles.img} src={img} alt="Product photo" />
      <h2>{name}</h2>
      <p className={styles.p}>{description}</p>
      <Button>Buy {price}$</Button>
    </div>
  );
}
