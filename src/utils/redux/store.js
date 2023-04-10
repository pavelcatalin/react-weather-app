import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/searchValue";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
