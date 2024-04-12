import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const mapUserNames = (posts) => {
  const userNames = {
    1: "John",
    2: "Alice",
    3: "Lisa",
    4: "Michel",
    5: "Hervé",
  };

  return posts.map((post) => ({
    ...post,
    userName: userNames[post.userId] || "Jone Doe",
  }));
};

export const fecthPosts = createAsyncThunk("posts/fecthposts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = response.data;
  const NameTheID = mapUserNames(posts);
  return NameTheID;
});

export const fetchComments = createAsyncThunk(
  "posts/fetchComments",
  async (postId) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      return { postId, comments: response.data };
    } catch (error) {
      console.error("Error : ", error);
      throw error;
    }
  }
);

export const addNewPostAsync = createAsyncThunk(
  "posts/addNewPostAsync",
  async (newPostData) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPostData
      );
      console.log("Nouveau Post :", response.data);
      return response.data;
    } catch (error) {
      console.error("Error : ", error);
      throw error;
    }
  }
);

export const selectComments = (postId) => (state) => {
  return state.posts.comments[postId] || [];
};

export const selectUserById = (state, userId) =>
  state.posts.users.find((user) => user.id === userId);

export const PostsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    postTitle: "",
    postBody: "",
    postUser: [],
    comments: {},
    like: 0,
    id: 101,
  },
  reducers: {
    likePost(state, action) {
      const postID = action.payload;
      const postToUpdate = state.posts.find((post) => post.id === postID);
      if (postToUpdate) {
        postToUpdate.like = postToUpdate.like === 1 ? 0 : 1;
      }
    },

    clickOnPost(state, action) {
      const postID = action.payload;
    },
    setComments(state, action) {
      const { title } = action.payload;
      const newComment = {
        id: state.id++,
        title: title,
      };
      state.comments.push(newComment);
    },
    addPost(state, action) {
      const { title, body } = action.payload;
      const newPost = {
        id: state.id++,
        title: title,
        body: body,
      };
      state.posts.push(newPost);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fecthPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        const { postId, comments } = action.payload;
        state.comments = { ...state.comments, [postId]: comments };
        console.log(comments);
      });
  },
});

export const { likePost, clickOnPost, addPost, setComments } =
  PostsSlice.actions;

export default PostsSlice.reducer;
