import React from "react";
import PropTypes from "prop-types";

const Comment = (props) => {
  const { comment, message, greet } = props;
  greet(message, Comment);

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

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
};

Comment.defaultProps = {
  comment: {},
  message: "Hello from component:",
};

export default Comment;
