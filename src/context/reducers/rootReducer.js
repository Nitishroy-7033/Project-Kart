import { combineReducers } from "redux";
import homeSlice from "./homeSlice";
import authSlice from "./authSlice";

const rootReducer = combineReducers({
  home: homeSlice,
  auth: authSlice,
});

export default rootReducer;
