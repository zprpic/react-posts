import React from "react";
import { useGreeting } from "../hooks/useGreeting";

const Comment = (props) => {
  const { comment, message } = props;
  useGreeting(message, Comment);

  return (
    <li key={comment.id} className="comment">
      <p>
        <span className="posterInfo">Name:</span> {comment.name}
      </p>
      <p>
        <span className="posterInfo">Email:</span> {comment.email}
      </p>
      <p>
        <span className="posterInfo">Body:</span>
        {comment.body}
      </p>
    </li>
  );
};

export default Comment;
