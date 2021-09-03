import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {
  const { comments } = props;
  const listOfComments = comments.map((comment) => {
    return <Comment comment={comment} />;
  });

  return <ul>{listOfComments}</ul>;
};

export default CommentList;
