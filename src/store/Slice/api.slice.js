import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fecthComments = createAsyncThunk(
  "comments/fecthComments",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    commentTitle: "",
    id: 101,
  },
  reducers: {
    deleteComment(state, action) {
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
    clickOnComment(state, action) {
      const commentID = action.payload;
      const commentToUpdate = state.comments.find(
        (comment) => comment.id === commentID
      );
      //Aller sur la page correspondant au comment
    },
    setCommentTitle(state, action) {
      state.commentTitle = action.payload;
    },
    addComment(state) {
      const newCom = {
        id: state.id++,
        title: state.commentTitle,
      };
      state.comments.push(newCom);
      state.commentTitle = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fecthComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export const { deleteComment, clickOnComment, setCommentTitle, addComment } =
  commentsSlice.actions;

export default commentsSlice.reducer;
