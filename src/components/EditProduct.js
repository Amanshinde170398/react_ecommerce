import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../redux/reducers/productReducer";
import { useState } from "react";
import { action } from "../redux/reducers/productReducer";
import styles from "../styles/addProduct.module.css";

const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const products = useSelector(productSelector);
  const product = products.filter((product) => {
    if (product.id == id) return product;
  })[0];

  const [name, setName] = useState(product?.name || "");
  const [description, setDescription] = useState(product?.description || "");
  const [rating, setRating] = useState(product?.rating || 0);
  const [price, setPrice] = useState(product?.price || "");
  const [img, setImg] = useState(product?.img || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      action.edit({
        // index: prodId,
        id,
        name,
        description,
        rating,
        price,
        img,
      })
    );
    navigate("/");
  };
  return (
    <div className={styles.productForm}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            name="description"
            type="text"
            className="form-control"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            name="price"
            type="text"
            className="form-control"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Rating</label>
          <input
            name="rating"
            type="number  "
            className="form-control"
            placeholder="Enter Rating"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-group">
          <label>Image Link</label>
          <input
            name="image"
            type="text"
            className="form-control"
            placeholder="Enter Link"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Edit
        </button>
      </form>
    </div>
  );
};
export default EditProduct;
