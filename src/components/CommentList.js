import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {
  const { comments } = props;
  return (
    <ul>
      <h3>Comments:</h3>
      {comments.map((comment) => {
        return <Comment comment={comment} key={comment.id} />;
      })}
    </ul>
  );
};

export default CommentList;
