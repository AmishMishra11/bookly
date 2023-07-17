import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  myWishlist: [],
  myCart: [],
  quantity: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadAllProducts: (state, action) => {
      state.products = action.payload;
    },

    addToWishlist: (state, action) => {
      state.myWishlist = [...state.myWishlist, action.payload];
    },

    removeFromWishlist: (state, action) => {
      state.myWishlist = state.myWishlist.filter(
        (item) => item.id !== action.payload
      );
    },

    addToCart: (state, action) => {
      state.myCart = [...state.myCart, action.payload];
      state.quantity = state.quantity + 1;
    },

    increaseQuantityFromCart: (state, action) => {
      state.myCart = state.myCart.map((item) =>
        item.id === action.payload
          ? { ...item, Quantity: +item.Quantity + 1 }
          : item
      );
      state.quantity = state.quantity + 1;
    },

    decreaseQuantityFromCart: (state, action) => {
      state.myCart = state.myCart.map((item) =>
        item.id === action.payload
          ? { ...item, Quantity: +item.Quantity - 1 }
          : item
      );
      state.quantity = state.quantity - 1;
    },

    removeFromCart: (state, action) => {
      state.myCart = state.myCart.filter((item) => item.id !== action.payload);
      state.quantity = state.quantity - 1;
    },
  },
});

export const {
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
  increaseQuantityFromCart,
  decreaseQuantityFromCart,
  loadAllProducts,
} = productSlice.actions;

export default productSlice.reducer;
