import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthComments } from "../../store/Slice/api.slice.js";
import CommentItem from "../Item/index.jsx";
// import Form from "../Form/index.jsx";

function CommentList() {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);

  useEffect(() => {
    dispatch(fecthComments());
  }, [dispatch]);

  return (
    <div>
      <h2>List coms</h2>
      {/* <Form /> */}
      <div>
        <ul>
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CommentList;
