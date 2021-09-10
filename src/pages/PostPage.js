import React from "react";
import PropTypes from "prop-types";
import { APIRoutes } from "../config/APIRoutes";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Post from "../components/Post";
import { Loader } from "../components/Loader";
import { ErrorNotification } from "../components/ErrorNotification";
import { errorMessageLoader } from "../errors/errorMessageLoader";
import { renderType } from "../helpers";

export const PostPage = (props) => {
  const { message, greet } = props;
  const { id } = useParams();

  const { loadingData: loadingPost, data: post } = useFetch(
    APIRoutes.getPost(id)
  );
  const { loadingData: loadingComments, data: comments } = useFetch(
    APIRoutes.getCommentsForSpecificPost(id)
  );

  const loading = loadingPost || loadingComments;
  let errorLoadingPost;
  if (!loading) {
    errorLoadingPost = Object.keys(post).length === 0;
  }

  return (
    <div className="postPage">
      <h1 className="title">Post</h1>

      {loading && <Loader message={message} greet={greet} />}

      {!loading && errorLoadingPost && (
        <ErrorNotification
          error={errorMessageLoader.postNotFound(id)}
          message={message}
          greet={greet}
        />
      )}

      {!loading && !errorLoadingPost && (
        <Post
          message={message}
          greet={greet}
          post={post}
          comments={comments}
          renderType={renderType.renderSingle()}
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
