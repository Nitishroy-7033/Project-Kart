import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    role: localStorage.getItem("role") || "guest",
    userName: localStorage.getItem("userName") || "",
    userId: localStorage.getItem("userId") || "",
    loading: false,
    error: null,
  },
  reducers: {
    setRole: (state, action) => {
      state.role = action.payload;
      localStorage.setItem("role", action.payload);
    },
    setLoding :(state,action)=>{
      state.loading = action.payload
    },
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = "guest";
      state.userId = "";
      state.userName = "";
      localStorage.clear(); // Clear stored data on logout
    },
  },
});

export const { setRole, loginStart,setLoding, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
