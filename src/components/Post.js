import React from "react";
import CommentList from "./CommentList";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { message, greet, renderType, post, comments } = props;
  greet(message, Post);

  return (
    <div className="specificPost">
      <li className="post">
        <div className="postInfo">
          <h2>{post.title}</h2>
          <h4>By {post.userId}</h4>
          <br />
          <p>{post.body}</p>
          {renderType === "LIST" && (
            <Link to={`/post/${post.id}`}>Read more...</Link>
          )}
          {renderType === "SINGLE" && <Link to="/posts">Back to posts</Link>}
        </div>
        <h3 className="commentsHeader">COMMENTS:</h3>
        <CommentList comments={comments} message={message} greet={greet} />
      </li>
    </div>
  );
};

Post.propTypes = {
  message: PropTypes.string.isRequired,
  renderType: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
};
Post.defaultProps = {
  message: "Hello from component:",
  renderType: "",
  post: {},
  comments: [],
};

export default Post;
