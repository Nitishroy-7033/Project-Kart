import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    products:[],
    productLoading:false,
    productFetchError:null,
    trandingProducts :[],
    trandingProductLoading:false,
    blogPost:[],
    blogLoading:false,
  },
  reducers: {
    productFetchStart :(state)=>
    {
     state.productLoading=true;
    },
    productFetchSuccess :(state,action)=>
    {
      state.productLoading=false;
      state.products=action.payload;
    },
    productFetchFailure:(state,action)=>
    {
      state.productLoading=false;
      state.productFetchError=action.payload;
    }
  },
});

export const {productFetchStart,productFetchSuccess,productFetchFailure  } = homeSlice.actions;
export default homeSlice.reducer;
