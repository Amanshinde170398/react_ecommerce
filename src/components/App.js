import { Routes, Route } from "react-router-dom";
import {
  AddProduct,
  EditProduct,
  Navbar,
  Products,
  ProductDetail,
  CartList,
} from "./index";

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Products} />
        <Route exact path="/add-product" Component={AddProduct} />
        <Route exact path="/edit-product/:id" Component={EditProduct} />
        <Route exact path="/product-detail/:id" Component={ProductDetail} />
        <Route exact path="/product/carts" Component={CartList} />
      </Routes>
    </div>
  );
}

export default App;
