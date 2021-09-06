import React from "react";
import CommentList from "./CommentList";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { message, greet } = props;
  greet(message, Post);

  let userId, id, title, body, comments, post;
  if (props.submission) {
    userId = props.submission.userId;
    id = props.submission.id;
    title = props.submission.title;
    body = props.submission.body;
    comments = props.submission.comments;
  }

  if (!props.submission) {
    post = props.post;
    comments = props.comments;
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
        {!Array.isArray(comments) || comments.length === 0 ? (
          <p style={{ marginLeft: "0.5rem" }}>{comments}</p>
        ) : (
          <CommentList comments={comments} message={message} greet={greet} />
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
