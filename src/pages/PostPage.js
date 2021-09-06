import React from "react";
import PropTypes from "prop-types";
import URL from "../config/db";
import { useParams } from "react-router-dom";
import { useFetchPost } from "../hooks/useFetchPost";
import { useFetchCommentsForSpecificPostForSpecificPost } from "../hooks/useFetchCommentsForSpecificPost";
import Post from "../components/Post";

export const PostPage = (props) => {
  const { message, greet } = props;
  const { id } = useParams();
  const { isLoadingPost, errorLoadingPost, post } = useFetchPost(URL, id);
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
  return (
    <div className="postPage">
      <h1 className="title">Post</h1>
      {isLoadingPost || isLoadingCommentsForSpecificPost ? (
        "Loading post and comments..."
      ) : postFetchError ? (
        `No post with id: ${id} found.`
      ) : (
        <Post
          message={message}
          greet={greet}
          post={post}
          comments={
            commentsFetchError
              ? `No comments found for post with id: ${id}`
              : CommentsForSpecificPost
          }
        />
      )}
    </div>
  );
};

PostPage.propTypes = {
  message: PropTypes.string.isRequired,
};

PostPage.defaultProps = {
  message: "Hello from component:",
};
