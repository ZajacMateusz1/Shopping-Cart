import Button from "./Button.jsx";
export default function ProductCard({ name, price, img, description }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt="Product photo" />
      <p>{description}</p>
      <p className="price">{price}</p>
    </div>
  );
}
