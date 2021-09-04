import React from "react";
import Comment from "./Comment";
import { useGreeting } from "../hooks/useGreeting";

const CommentList = (props) => {
  const { comments, message } = props;
  useGreeting(message, CommentList);
  return (
    <ul className="commentList">
      {comments.map((comment) => {
        return <Comment comment={comment} key={comment.id} message={message} />;
      })}
    </ul>
  );
};

export default CommentList;
