import Button from "../Button/Button.jsx";
import styles from "./ProductCard.module.css";
export default function ProductCard({ name, price, img, description }) {
  return (
    <div className={styles.productCard}>
      <h2>{name}</h2>
      <img className={styles.img} src={img} alt="Product photo" />
      <p>{description}</p>
      <Button>Buy {price}$</Button>
    </div>
  );
}
