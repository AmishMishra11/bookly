import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./Features/authSlice";
import productReducer from "./Features/productSlice";
import filterReducer from "./Features/filterSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    filter: filterReducer,
  },
});
