import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, addNewPostAsync } from "../../store/Slice/api.slice.js";

const AddPostPage = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ title, body }));
    dispatch(addNewPostAsync());
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h2>Ajouter un nouveau post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre du post"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description du post"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="4"
          cols="50"
        ></textarea>
        <button type="submit">Ajouter le post</button>
      </form>
    </div>
  );
};

export default AddPostPage;