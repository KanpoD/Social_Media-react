import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthPosts } from "../../store/Slice/api.slice.js";
import PostItem from "../Item/index.jsx";
import { Link } from "react-router-dom";
// import Form from "../Form/index.jsx";

function postList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fecthPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>List coms</h2>
      <div>
        <ul>
          {posts.map((post) => (
            <Link key={post.id} to={`/posts/${post.id}`} state={{ post }}>
              <PostItem post={post} />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default postList;
