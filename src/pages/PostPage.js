import React from "react";
import PropTypes from "prop-types";
import URL from "../config/db";
import { useParams } from "react-router-dom";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { useFetchComments } from "../hooks/useFetchComments";
import Post from "../components/Post";

export const PostPage = (props) => {
  const { message, greet } = props;
  const { id } = useParams();
  const { isLoadingPosts, errorLoadingPosts, posts } = useFetchPosts(URL, id);
  const { isLoadingComments, errorLoadingComments, comments } =
    useFetchComments(URL, id);

  let postFetchError = false;
  let commentsFetchError = false;
  if (Object.keys(posts).length === 0) {
    postFetchError = true;
  }
  if (Object.keys(comments).length === 0) {
    commentsFetchError = true;
  }
  return (
    <div className="postPage">
      <h1 className="title">Post</h1>
      {isLoadingPosts || isLoadingComments ? (
        "Loading post and comments..."
      ) : postFetchError ? (
        `No post with id: ${id} found.`
      ) : (
        <Post
          message={message}
          greet={greet}
          post={posts}
          comments={
            commentsFetchError
              ? `No comments found for post with id: ${id}`
              : comments
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
