import styles from "../styles/product.module.css";
import { ProductItem } from "./index";
import { cartSelector } from "../redux/reducers/cartReducer";
import { productSelector } from "../redux/reducers/productReducer";
import { useSelector } from "react-redux";

const CartList = () => {
  const products = useSelector(productSelector);
  const productList = products.filter((prod) => {
    if (prod.addToCart) {
      return prod;
    }
  });
  return (
    <div className={styles.productListContainer}>
      <ul>
        {productList.map((product, index) => {
          return <ProductItem index={index} product={product} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default CartList;
