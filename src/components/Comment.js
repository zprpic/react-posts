import React from "react";

const Comment = (props) => {
  const { comment } = props;
  return (
    <li>
      <p>{comment.name}</p>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
    </li>
  );
};

export default Comment;
