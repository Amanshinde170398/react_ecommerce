import { productReducer } from "./reducers/productReducer";
import { cartReducers } from "./reducers/cartReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { productReducer, cartReducers },
});
