import React from "react";
import { useGreeting } from "../hooks/useGreeting";

const Comment = (props) => {
  const { comment, message } = props;
  useGreeting(message, Comment);

  return (
    <li key={comment.id} className="comment">
      <p>
        <span class="posterInfo">Name:</span> {comment.name}
      </p>
      <p>
        <span class="posterInfo">Email:</span> {comment.email}
      </p>
      <p>
        <span class="posterInfo">Body:</span>
        {comment.body}
      </p>
    </li>
  );
};

export default Comment;
