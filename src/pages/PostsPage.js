import React from "react";
import PostList from "../components/PostList";
import PropTypes from "prop-types";
import URL from "../config/db";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { useFetchComments } from "../hooks/useFetchComments";

export const PostsPage = (props) => {
  const { message } = props;
  const { isLoadingPosts, errorLoadingPosts, posts } = useFetchPosts(URL);
  const { isLoadingComments, errorLoadingComments, comments } =
    useFetchComments(URL);

  return (
    <div className="postsPage">
      <h1 className="title">Posts Page</h1>
      {isLoadingPosts || isLoadingComments ? (
        "Loading posts and comments..."
      ) : errorLoadingPosts || errorLoadingComments ? (
        <p>Error loading posts and comments. Please try again later</p>
      ) : (
        <PostList message={message} posts={posts} comments={comments} />
      )}
    </div>
  );
};

PostsPage.propTypes = {
  message: PropTypes.string.isRequired,
};

PostsPage.defaultProps = {
  message: "Hello from component:",
};
