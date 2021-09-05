import React from "react";
import { useParams } from "react-router-dom";
import { useFetchPost } from "../hooks/useFetchPost";
import { useFetchCommentsForSpecificPostForSpecificPost } from "../hooks/useFetchCommentsForSpecificPost";
import { useGreeting } from "../hooks/useGreeting";
import CommentList from "./CommentList";
import PropTypes from "prop-types";
import URL from "../config/db";

const SpecificPost = (props) => {
  const { message } = props;
  useGreeting(message, SpecificPost);

  const { id } = useParams();
  const { isLoadingPost, errorLoadingPost, post } = useFetchPost(URL, id);
  const { userId, title, body } = post;
  const {
    isLoadingCommentsForSpecificPost,
    errorLoadingCommentsForSpecificPost,
    CommentsForSpecificPost,
  } = useFetchCommentsForSpecificPostForSpecificPost(URL, id);

  let postFetchError = false;
  let commentsFetchError = false;
  if (Object.keys(post).length === 0) {
    postFetchError = true;
  }
  if (Object.keys(CommentsForSpecificPost).length === 0) {
    commentsFetchError = true;
  }

  let comments = isLoadingCommentsForSpecificPost
    ? []
    : CommentsForSpecificPost;

  console.log(CommentsForSpecificPost);

  return (
    <div className="specificPost">
      {isLoadingPost || isLoadingCommentsForSpecificPost ? (
        "loading post and comments..."
      ) : postFetchError ? (
        <h2>Post not found. No post with id: {id}</h2>
      ) : (
        <li className="post">
          <div className="postInfo">
            <h2>{title}</h2>
            <h4>By {userId}</h4>
            <br />
            <p>{body}</p>
          </div>
          <h3 className="commentsHeader">COMMENTS:</h3>
          {commentsFetchError ? (
            <p style={{ marginLeft: "0.5rem", marginBottom: "0.5rem" }}>
              No comments found for post with id: {id}
            </p>
          ) : (
            <CommentList comments={comments} message={message} />
          )}
        </li>
      )}
    </div>
  );
};

SpecificPost.propTypes = {
  message: PropTypes.string.isRequired,
};
SpecificPost.defaultProps = {
  message: "Hello from component:",
};

export default SpecificPost;
