import ProductCard from "./ProductCard/ProductCard.jsx";
import PRODUCTS from "../PRODUCTS.js";

export default function Page() {
  return (
    <main>
      {PRODUCTS.map((product) => {
        return <ProductCard {...product} id={product.id} />;
      })}
    </main>
  );
}
