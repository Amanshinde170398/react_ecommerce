import { useEffect, useState } from "react";
import { ProductItem } from "./index";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/product.module.css";
import { action, productSelector } from "../redux/reducers/productReducer";

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector(productSelector);
  const [sorting, setSorting] = useState(false);
  const fetchProduct = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/Amanshinde170398/Ecommerce_server/products"
    );
    const data = await response.json();
    dispatch(action.init(data));
  };
  const handleSorting = (e) => {
    e.preventDefault();
    setSorting(true);
    dispatch(action.sort());
  };
  const handleUnsort = (e) => {
    e.preventDefault();
    setSorting(false);
    dispatch(action.unSort());
  };
  useEffect(() => {
    if (productList.length == 0) fetchProduct();
  }, []);

  return (
    <div className={styles.productListContainer}>
      <div className="sortBy mb-3" style={{ cursor: "pointer" }}>
        <span className="mr-2" onClick={handleSorting}>
          Sort By Price
        </span>
        {sorting && (
          <i className="fa-regular fa-circle-xmark" onClick={handleUnsort}></i>
        )}
      </div>
      <ul>
        {productList.map((product, index) => {
          return <ProductItem index={index} product={product} key={index} />;
        })}
      </ul>
    </div>
  );
};
export default Products;
