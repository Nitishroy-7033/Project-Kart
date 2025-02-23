import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNotificationShow: true,
 
};

const appSettings = createSlice({
  name: "appSettings",
  initialState,
  reducers: {
    setIsNotificationShow: (state, action) => {
      state.isNotificationShow = action.payload;
    }
  },
});

export const { setIsNotificationShow  } = appSettings.actions;
export default appSettings.reducer;
