import { useDispatch } from "react-redux";
import styles from "../styles/addProduct.module.css";
import { useState } from "react";
import { action } from "../redux/reducers/productReducer";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(action.add({ name, description, rating, price, img }));
    toast.success("Product added successfully", {
      duration: 4000,
      position: "top-center",
    });
    navigate("/");
  };
  return (
    <div className={styles.productForm}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="productName">Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="productName"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-group">
          <label for="productDescription">Description</label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="productDescription"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="productPrice">Price</label>
          <input
            name="price"
            type="text"
            className="form-control"
            id="productPrice"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="productRating">Rating</label>
          <input
            name="rating"
            type="number  "
            className="form-control"
            id="productRating"
            placeholder="Enter Rating"
            value={rating}
            onChange={(e) => {
              setRating(e.target.value);
            }}
          ></input>
        </div>
        <div className="form-group">
          <label for="productImg">Image Link</label>
          <input
            name="image"
            type="text"
            className="form-control"
            id="productLink"
            placeholder="Enter Link"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
