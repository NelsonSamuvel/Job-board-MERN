import { configureStore } from "@reduxjs/toolkit";
import { jobsApi } from "./services/jobsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

import FilterReducer from "./features/filters/filterSlice";
import BookmarksReducer from "./features/bookmarks/bookmarkSlice";

const store = configureStore({
  reducer: {
    filter: FilterReducer,
    bookmarks: BookmarksReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});

setupListeners(store.dispatch);

export { store };
export type RootState = ReturnType<typeof store.getState>;
