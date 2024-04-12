import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../store/Slice/api.slice";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
});
