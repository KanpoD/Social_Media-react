import { configureStore } from "@reduxjs/toolkit";
import commentsReducer from "../store/Slice/api.slice";

export default configureStore({
  reducer: {
    comments: commentsReducer,
  },
});
