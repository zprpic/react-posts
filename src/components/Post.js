import React from "react";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";
import { useGreeting } from "../hooks/useGreeting";

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
        <Link to={`posts/${id}`} style={{ fontSize: "0.8rem" }}>
          Read more...
        </Link>
      </div>
      <h3 className="commentsHeader">COMMENTS:</h3>
      <CommentList comments={comments} message={message} />
    </li>
  );
};

export default Post;
