import React from "react";
import Comment from "./Comment";
import PropTypes from "prop-types";

const CommentList = (props) => {
  const { comments, message, greet } = props;
  greet(message, CommentList);
  return (
    <ul className="commentList">
      {comments.map((comment) => {
        return (
          <Comment
            comment={comment}
            key={comment.id}
            message={message}
            greet={greet}
          />
        );
      })}
    </ul>
  );
};

CommentList.propTypes = {
  message: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
};

CommentList.defaultProps = {
  message: "Hello from component:",
  comments: [],
};
export default CommentList;
