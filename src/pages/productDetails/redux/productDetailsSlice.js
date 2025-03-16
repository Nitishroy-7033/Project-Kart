import { createSlice } from "@reduxjs/toolkit";

const productDetails = createSlice({
  name: "productDetails",
  initialState: {
    productDetails:[],
    productLoading:false,
  },
  reducers: {
    productDetailsFetchStart :(state)=>
    {
     state.productLoading=true;
    },
    productDetailsFetchSuccess :(state,action)=>
    {
      state.productLoading=false;
      state.productDetails=action.payload;
    },
  },
});

export const {productDetailsFetchStart,productDetailsFetchSuccess  } = productDetails.actions;
export default productDetails.reducer;
