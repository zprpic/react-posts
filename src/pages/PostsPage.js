import React from "react";
import PostList from "../components/PostList";
import PropTypes from "prop-types";
import { APIRoutes } from "../config/APIRoutes";
import { useFetch } from "../hooks/useFetch";
import {
  extractAllPostsByKey,
  groupCommentsByPostID,
  renderType,
} from "../helpers";
import { Loader } from "../components/Loader";
import { ErrorNotification } from "../components/ErrorNotification";
import { errorMessageLoader } from "../errors/errorMessageLoader";

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

  const loading = loadingPosts || loadingComments;
  const hasError = errorLoadingPosts || errorLoadingComments;
  const hasData =
    !loading && !hasError && posts.length > 0 && comments.length > 0;
  const hasEmptyPosts = !loading && Object.keys(posts).length === 0;
  const hasEmptyComments = !loading && Object.keys(comments).length === 0;
  const hasEmptyData = hasEmptyPosts || hasEmptyComments;

  return (
    <div className="postsPage">
      <h1 className="title">Posts Page</h1>

      {loading && <Loader message={message} greet={greet} />}

      {!loading && hasError && (
        <ErrorNotification
          error={errorLoadingPosts && errorLoadingComments}
          message={message}
          greet={greet}
        />
      )}

      {!loading && hasData && (
        <PostList
          message={message}
          greet={greet}
          posts={extractAllPostsByKey(posts)}
          comments={groupCommentsByPostID(comments)}
          renderType={renderType.renderList()}
        />
      )}

      {!loading && hasEmptyData && (
        <>
          {hasEmptyPosts && hasEmptyComments && (
            <ErrorNotification
              error={errorMessageLoader.dataNotFound()}
              message={message}
              greet={greet}
            />
          )}

          {hasEmptyPosts && !hasEmptyComments && (
            <ErrorNotification
              error={errorMessageLoader.postsNotFound()}
              message={message}
              greet={greet}
            />
          )}

          {hasEmptyComments && !hasEmptyPosts && (
            <PostList
              message={message}
              greet={greet}
              posts={extractAllPostsByKey(posts)}
              comments={groupCommentsByPostID(comments)}
              renderType={renderType.renderList()}
            />
          )}
        </>
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
