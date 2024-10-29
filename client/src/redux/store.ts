import { configureStore } from "@reduxjs/toolkit";
import FilterReducer from "./features/filters/filterSlice";
import { jobsApi } from "./services/jobsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    filter: FilterReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});

setupListeners(store.dispatch);

export { store };
export type RootState = ReturnType<typeof store.getState>;
