import React from "react";
import Comment from "./Comment";
import { useGreeting } from "../hooks/useGreeting";
import PropTypes from "prop-types";

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

CommentList.propTypes = {
  comment: PropTypes.array.isRequired,
  message: PropTypes.string.isRequired,
};

CommentList.defaultProps = {
  comment: [],
  message: "Hello from component:",
};
export default CommentList;
