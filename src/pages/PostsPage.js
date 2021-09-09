import React from "react";
import PostList from "../components/PostList";
import PropTypes from "prop-types";
import { APIRoutes } from "../config/APIRoutes";
import { useFetch } from "../hooks/useFetch";
import { extractAllPostsByKey } from "../helpers/extractAllPostsByKey";
import { groupCommentsByPostID } from "../helpers/groupCommentsByPostID";
import { Loader } from "../components/Loader";

export const PostsPage = (props) => {
  const { message, greet } = props;

  const {
    loadingData: loadingPosts,
    errorLoadingData: errorLoadingPosts,
    data: posts,
  } = useFetch(APIRoutes.getPosts());

  const {
    loadingData: loadingComments,
    errorLoadingData: errorLoadingComments,
    data: comments,
  } = useFetch(APIRoutes.getComments());

  return (
    <div className="postsPage">
      <h1 className="title">Posts Page</h1>
      {!loadingPosts && !loadingComments ? (
        <PostList
          message={message}
          greet={greet}
          posts={extractAllPostsByKey(posts)}
          comments={groupCommentsByPostID(comments)}
        />
      ) : (
        <Loader message={message} greet={greet} />
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
