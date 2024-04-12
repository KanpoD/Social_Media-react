import React from "react";

const User = ({ post }) => {
  return (
    <div className="user">
      <span>
        <i className="fa-solid fa-user"></i>
      </span>
      <span>
        <p className="userName">{post.userName}</p>
      </span>
    </div>
  );
};

export default User;
