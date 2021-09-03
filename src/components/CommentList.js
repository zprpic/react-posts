import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {
  const { comments } = props;
  console.log(comments);
  return (
    <ul>
      <h3>Comments:</h3>
      {comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </ul>
  );
};

export default CommentList;
