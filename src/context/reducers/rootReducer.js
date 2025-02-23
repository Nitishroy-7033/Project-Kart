import { combineReducers } from "redux";
import homeSlice from "./homeSlice";

const rootReducer = combineReducers({
  home: homeSlice,
});

export default rootReducer;
