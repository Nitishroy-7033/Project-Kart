import { createSlice } from "@reduxjs/toolkit";

// Define the initial state as an object
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        console.log("Product already exists in the cart:", newItem.id);
      } else {
        state.cartItems.push(newItem);
        console.log("Product added to cart:", newItem);
      }
    },

    removeCartItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;