import { JobsType } from "@/types/jobsType";
import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  bookmarks: JobsType[];
};

const initialState: StateType = {
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addToBookmarks: (state, action) => {
      state.bookmarks.push(action.payload);
    },
  },
});

export const { addToBookmarks } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
