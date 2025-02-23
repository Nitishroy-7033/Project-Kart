import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeData: null,
  count: 0,
  name: "nitish",
  age: 23,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setHomeData: (state, action) => {
      state.homeData = action.payload;
    },
    incrementCount: (state) => {
      state.count += 1;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { setHomeData, incrementCount, setName, setAge } = homeSlice.actions;
export default homeSlice.reducer;
