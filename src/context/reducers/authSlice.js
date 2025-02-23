import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null,
  userId: null,
  name: "nitish",
  email: null, 
  refreshToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
  },
});

export const { setRole, setUserId, setName, setEmail, setRefreshToken } = authSlice.actions;
export default authSlice.reducer;
