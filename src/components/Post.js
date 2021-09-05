import React from "react";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";
import { useGreeting } from "../hooks/useGreeting";
import PropTypes from "prop-types";

const Post = (props) => {
  const { message } = props;
  useGreeting(message, Post);

  const { userId, id, title, body } = props.submission;
  const comments = props.submission.comments;

  return (
    <li className="post" key={id}>
      <div className="postInfo">
        <h2>{title}</h2>
        <h4>By {userId}</h4>
        <br />
        <p>{body}</p>
        <Link to={`post/${id}`} style={{ fontSize: "0.8rem" }}>
          Read more...
        </Link>
      </div>
      <h3 className="commentsHeader">COMMENTS:</h3>
      <CommentList comments={comments} message={message} />
    </li>
  );
};

Post.propTypes = {
  message: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
};

Post.defaultProps = {
  message: "Hello from component:",
  userId: "Unknown",
  id: "Unknown",
  title: "Unknown",
  body: "Unknown",
  comments: [],
};
export default Post;
