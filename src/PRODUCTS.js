import Tshirt from "./assets/tshirt-basic.jpg";
import Hoodie from "./assets/hoodie.jpg";
import Jeans from "./assets/jeans.jpg";
import Jacket from "./assets/jacket.jpg";
import SummerDress from "./assets/summer-dress.jpg";

const PRODUCTS = [
  {
    id: 1,
    name: "Basic T-shirt",
    price: 49.99,
    img: Tshirt,
    description:
      "A soft and breathable cotton T-shirt perfect for everyday wear.",
  },
  {
    id: 2,
    name: "Hoodie",
    price: 149.99,
    img: Hoodie,
    description: "A warm and cozy hoodie",
  },
  {
    id: 3,
    name: "Jeans",
    price: 199.99,
    img: Jeans,
    description: "Stylish jeans designed for comfort and a modern look.",
  },
  {
    id: 4,
    name: "Jacket",
    price: 299.99,
    img: Jacket,
    description: "Lightweight yet warm quilted jacket for cooler days.",
  },
  {
    id: 5,
    name: "Summer Dress",
    price: 179.99,
    img: SummerDress,
    description: "A light and comfortable summer dress",
  },
];

export default PRODUCTS;
