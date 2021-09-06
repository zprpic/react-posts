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
  comments: PropTypes.array.isRequired,
  message: PropTypes.string.isRequired,
};

CommentList.defaultProps = {
  comments: [],
  message: "Hello from component:",
};
export default CommentList;
