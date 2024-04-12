import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setComments } from "../../store/Slice/api.slice.js";

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setComments({ postId, contenu: comment }));
    setComment(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Ajouter un commentaire..."
        rows="4"
        cols="50"
      ></textarea>
      <br />
      <button type="submit">Ajouter le commentaire</button>
    </form>
  );
};

export default CommentForm;