// store.js - Simplified version
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../pages/auth/redux/authSlice";
import homeReducer from "../../pages/home/redux/homeSlice";
import productDetailsReducer from "../../pages/productDetails/redux/productDetailsSlice" 
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    auth: authReducer,
    home: homeReducer,
    productDetails:productDetailsReducer
  },
  // You can remove this line as thunk is included by default
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;