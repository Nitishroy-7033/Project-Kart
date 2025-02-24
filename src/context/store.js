import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState) {
      return { auth: JSON.parse(serializedState) }; // Load only the auth slice
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.auth); // Store only auth slice
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(), // Load only auth slice into preloaded state
});

store.subscribe(() => {
  saveState(store.getState()); // Save only auth slice
});

export default store;
