import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    init: (state, action) => {
      state.products = action.payload;
    },
    add: (state, action) => {
      state.products.push(action.payload);
    },
    edit: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id == action.payload.id) {
          product = { ...action.payload };
        }
        return product;
      });
    },
    delete: (state, action) => {
      state.products = state.products.filter((product) => {
        if (product.id != action.payload) {
          return product;
        }
      });
    },
    sort: (state, action) => {
      state.products = state.products.sort((a, b) => {
        return a.price - b.price;
      });
    },
    unSort: (state, action) => {
      state.products = state.products.sort((a, b) => {
        return a.id - b.id;
      });
    },
    addToCart: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id == action.payload.id) {
          product.addToCart = true;
        }
        return product;
      });
    },
    removeFromCart: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id == action.payload.id) {
          product.addToCart = false;
        }
        return product;
      });
    },
  },
});

export const productReducer = productSlice.reducer;
export const action = productSlice.actions;
export const productSelector = (state) => state.productReducer.products;
