import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { likePost } from "../../store/Slice/api.slice.js";
import { useSelector, useDispatch } from "react-redux";
import User from "../../component/User/index.jsx";
import PostForm from "../../component/Form/index.jsx";
import { fetchComments } from "../../store/Slice/api.slice.js";
import { selectComments } from "../../store/selector/index.js";

const PostPage = () => {
  const { postId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { post } = location.state;

  const handleLike = () => {
    dispatch(likePost(post.id));
  };

  const comments = useSelector(selectComments);
  // console.log(comments);

  // console.log(comments[0].body);

  useEffect(() => {
    if (!comments[postId]) {
      dispatch(fetchComments(postId));
    }
  }, [dispatch, postId, comments]);

  return (
    <div>
      <li className="post">
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
      <div className="commentsContainer">
        <ul>
          {comments[postId] &&
            Array.isArray(comments[postId]) &&
            comments[postId].map((comment) => (
              <li key={comment.id} className="post" id="postCom">
                <div className="postHeader com">
                <User key={post.id} post={post}/>
                </div>
                <p>{comment.body}</p>
              </li>
            ))}
        </ul>
        <PostForm postId={postId} />
      </div>
    </div>
  );
};

export default PostPage;
