import { useParams } from "react-router-dom";
import { productSelector } from "../redux/reducers/productReducer";
import { useSelector } from "react-redux";
import ReactStars from "react-stars";
import styles from "../styles/productDetail.module.css";
import { useDispatch } from "react-redux";
import { action } from "../redux/reducers/productReducer";
import { cartAction } from "../redux/reducers/cartReducer";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector(productSelector);
  const product = products.filter((product) => {
    if (product.id == id) return product;
  })[0];

  const handleAddToCart = (prod) => {
    dispatch(cartAction.add(prod.id));
    dispatch(cartAction.incrCount());
    dispatch(action.addToCart(prod));
  };

  const handleRemoveFromCart = (prod) => {
    dispatch(cartAction.delete(prod.id));
    dispatch(cartAction.decrCount());
    dispatch(action.removeFromCart(prod));
  };

  return (
    <div className={styles.productDetailCont}>
      <div className={styles.imgContainer}>
        <img
          src={product?.img}
          width="400rem"
          height="330rem"
          style={{ borderRadius: "2rem" }}
        />
      </div>
      <div className={styles.productDetail}>
        <p className={styles.productData}>
          <span className={styles.productTag}>Name: </span>
          <span>{product.name}</span>
        </p>
        <p className={styles.productData}>
          <span className={styles.productTag}>price: </span>
          <span>{product.price}</span>
        </p>
        <p className={styles.productData}>
          <span className={styles.productTag}>Description: </span>
          <span>{product.description}</span>
        </p>
        <ReactStars value={product.rating} size={24} edit={false} />
        {product.addToCart ? (
          <button
            className="btn btn-danger mr-4"
            onClick={(e) => {
              e.preventDefault();
              handleRemoveFromCart(product);
            }}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            className="btn btn-primary mr-4"
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart(product);
            }}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
