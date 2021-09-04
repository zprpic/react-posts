import React from "react";

const Comment = (props) => {
  const { comment } = props;

  return (
    <li key={comment.id}>
      <p>Name: {comment.name}</p>
      <p>Email: {comment.email}</p>
      <p>Body: {comment.body}</p>
    </li>
  );
};

export default Comment;
