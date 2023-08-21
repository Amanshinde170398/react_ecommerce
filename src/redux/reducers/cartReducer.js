import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {
    products: [],
    count: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      // const prod = state.cart.products.filter((product) => {
      //   if (product.id == action.payload.id) return product;
      // })[0];
      // if (prod) return;
      // state.cart.products.push(action.payload);
      if (!state.cart.products.includes(action.payload)) {
        state.cart.products.push(action.payload);
      }
    },
    delete: (state, action) => {
      // state.cart.products = state.cart.products.filter((product) => {
      //   if (product.id != action.payload) {
      //     return product;
      //   }
      // });
      if (state.cart.products.includes(action.payload)) {
        // state.cart.products.splice(action.payload);
        state.cart.products = state.cart.products.filter((prod) => {
          if (prod != action.payload) {
            return prod;
          }
        });
      }
    },
    incrCount: (state, action) => {
      state.cart.count += 1;
    },
    decrCount: (state, action) => {
      state.cart.count -= 1;
    },
  },
});

export const cartReducers = cartSlice.reducer;
export const cartAction = cartSlice.actions;
export const cartSelectorCount = (state) => state.cartReducers.cart.count;
export const cartSelector = (state) => state.cartReducers.cart.products;
