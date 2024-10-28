import { configureStore } from "@reduxjs/toolkit";
import FilterReducer from "./features/filters/filterSlice";

const store = configureStore({
  reducer: {
    filter: FilterReducer,
  },
});

export { store };


export type RootState = ReturnType<typeof store.getState>;
