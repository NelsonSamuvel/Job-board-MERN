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
      const { id } = action.payload;
      const foundBookmarkId = state.bookmarks.findIndex(
        (bookmark) => bookmark.id === id
      );
      if (foundBookmarkId >= 0) {
        state.bookmarks.splice(foundBookmarkId, 1);
      } else {
        state.bookmarks.push(action.payload);
      }
    },
  },
});

export const { addToBookmarks } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
