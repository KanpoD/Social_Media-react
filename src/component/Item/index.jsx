import { useDispatch } from "react-redux";
import {
    deleteComment,
    clickOnComment,
} from "../../store/Slice/api.slice.js";

const CommentItem = ({ comment }) => {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clickOnComment(comment.id));
  };

  const handleDelete = () => {
    dispatch(deleteComment(comment.id));
  };

  return (
    <li onClick={handleClick}>
      <h4>{comment.title}</h4>
      <p>{comment.body}</p>
      <button onClick={handleDelete}>
       X
      </button>
    </li>
  );
};

export default CommentItem;
