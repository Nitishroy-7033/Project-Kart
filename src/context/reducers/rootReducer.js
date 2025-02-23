import { combineReducers } from "redux";
import homeSlice from "./homeSlice";
import authSlice from "./authSlice";
import appSettings from "./appSettings";

const rootReducer = combineReducers({
  home: homeSlice,
  auth: authSlice,
  appSettings: appSettings,
});

export default rootReducer;
