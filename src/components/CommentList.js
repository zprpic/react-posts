import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {
  const { comments } = props;
  return (
    <ul>
      {comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </ul>
  );
};

export default CommentList;
