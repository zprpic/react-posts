import React from "react";
import CommentList from "./CommentList";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const Post = (props) => {
  const { message, greet, post, comments } = props;
  greet(message, Post);

  const { id } = useParams(); //hacky solution for readmore link...

  return (
    <div className="specificPost">
      <li className="post">
        <div className="postInfo">
          <h2>{post.title}</h2>
          <h4>By {post.userId}</h4>
          <br />
          <p>{post.body}</p>
          {!id ? <Link to={`/post/${post.id}`}>Read more...</Link> : null}
        </div>
        <h3 className="commentsHeader">COMMENTS:</h3>
        <CommentList comments={comments} message={message} greet={greet} />
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
