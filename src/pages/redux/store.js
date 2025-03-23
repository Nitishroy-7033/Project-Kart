import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../pages/auth/redux/authSlice";
import homeReducer from "../../pages/home/redux/homeSlice";
import cartReducer from "../../pages/cartPage/redux/cartSlice";
import productDetailsReducer from "../../pages/productDetails/redux/productDetailsSlice";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer, // Ensure the cart reducer is correctly added
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;