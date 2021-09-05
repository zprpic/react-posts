import React from "react";
import { useGreeting } from "../hooks/useGreeting";
import CommentList from "./CommentList";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { message } = props;
  useGreeting(message, Post);

  const { post } = props;
  let comments;
  if (!props.comments) {
    comments = props.submission.comments;
  }
  if (props.comments) {
    comments = props.comments;
  }
  let userId, id, title, body;
  if (props.submission) {
    userId = props.submission.userId;
    id = props.submission.id;
    title = props.submission.title;
    body = props.submission.body;
  }

  return (
    <div className="specificPost">
      <li className="post">
        <div className="postInfo">
          <h2>{title ? title : post.title}</h2>
          <h4>By {userId ? userId : post.userId}</h4>
          <br />
          <p>{body ? body : post.body}</p>
          {id ? <Link to={`/post/${id}`}>Read more...</Link> : null}
        </div>
        <h3 className="commentsHeader">COMMENTS:</h3>
        {!Array.isArray(comments) ? (
          <p style={{ marginLeft: "0.5rem" }}>
            No comments found for post with id: {post.id}
          </p>
        ) : (
          <CommentList comments={comments} message={message} />
        )}
      </li>
    </div>
  );
};

Post.propTypes = {
  message: PropTypes.string.isRequired,
};
Post.defaultProps = {
  message: "Hello from component:",
};

export default Post;
