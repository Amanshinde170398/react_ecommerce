import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../styles/navbar.module.css";
import { cartSelectorCount } from "../redux/reducers/cartReducer";

const Navbar = () => {
  const count = useSelector(cartSelectorCount);
  return (
    <div className={styles.navbarContainer}>
      <div className="navbarLinks">
        <Link className={`${styles.navbarHeading} mr-4`} to="/">
          Ecommerce
        </Link>
        <Link to="/add-product" style={{ fontWeight: "600" }}>
          <span style={{ color: "#2e4876" }}>Add Product</span>
        </Link>
      </div>
      <div className="navbarCart">
        <Link to="/product/carts">
          <span>
            <i
              className="fa-solid fa-cart-shopping fa-2xl"
              style={{ color: "#2e4876" }}
            ></i>
          </span>
          <span className={styles.productCount}>{count}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
