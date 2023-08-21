import ReactStars from "react-stars";
import styles from "../styles/product.module.css";
import { useDispatch } from "react-redux";
import { action } from "../redux/reducers/productReducer";
import { cartAction } from "../redux/reducers/cartReducer";
import { Link } from "react-router-dom";

const ProductItem = ({ index, product }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(action.delete(id));
  };

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
    <li>
      <Link to={`/product-detail/${product.id}`}>
        <div className={styles.productItemContainer}>
          <div style={{ display: "flex" }}>
            <div className={`${styles.productImg} mr-5`}>
              <img src={product.img} width="200rem" height="150rem" />
            </div>
            <div className={styles.productTitleRating}>
              <div className="mb-5">
                <div className={`${styles.title} mb-1`}>{product.name}</div>
                <div className={styles.price}>{product.price}</div>
              </div>
              <div className={styles.rating}>
                <ReactStars value={product.rating} size={24} edit={false} />
              </div>
            </div>
          </div>

          <div className={styles.prodDescriptionCont}>
            <p className={styles.prodDescription}>{product.description}</p>
            <div className={styles.editProduct}>
              <span>
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
              </span>
              <Link to={`/edit-product/${product.id}`}>
                <i
                  className="fa-solid fa-pencil mr-4"
                  style={{ cursor: "pointer" }}
                ></i>
              </Link>
              <i
                className="fa-solid fa-trash"
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault();
                  handleDelete(product.id);
                }}
              ></i>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
