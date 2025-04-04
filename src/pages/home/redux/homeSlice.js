import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    products:[],
    productLoading:false,
    productFetchError:null,
    trendingProducts :[],
    trendingProductLoading:false,
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
    },
    trendingFetchStart :(state)=>
    {
      state.trendingProductLoading=true;
    },
    trendingFetchSuccess :(state,action)=>
    {
      state.trendingProductLoading=false;
      state.trendingProducts=action.payload;
    },
    trendingFetchFailure:(state,action)=>
    {
      state.trendingProductLoading=false;
      state.productFetchError=action.payload;
    },
  },
});

export const {productFetchStart,productFetchSuccess,productFetchFailure,trendingFetchStart,trendingFetchSuccess ,trendingFetchFailure } = homeSlice.actions;
export default homeSlice.reducer;
