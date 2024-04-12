import React from "react";
import { useDispatch } from "react-redux";
import { likePost, clickOnPost } from "../../store/Slice/api.slice.js";

import User from "../User/index.jsx";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clickOnPost(post.id));
  };

  const handleLike = () => {
    dispatch(likePost(post.id));
  };

  return (
    <li className="post" onClick={handleClick}>
      <div className="postHeader">
        <User key={post.id} post={post} />
      </div>
      <div className="postContainer">
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <div className="likes">
          <span>Likes : {post.like ? 1 : 0}</span>
          <button onClick={handleLike}>
            <i className="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default PostItem;
