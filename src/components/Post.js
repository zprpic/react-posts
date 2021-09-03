import React from "react";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";

const Post = (props) => {
  const { userId, id, title, body } = props.submission;
  const comments = props.submission.comments;
  return (
    <li>
      <p>Username: {userId}</p>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
      <Link to={`posts/${id}`}>Read more...</Link>
      <CommentList comments={comments} />
    </li>
  );
};

export default Post;
