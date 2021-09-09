import React from "react";
import PropTypes from "prop-types";
import { APIRoutes } from "../config/APIRoutes";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Post from "../components/Post";

export const PostPage = (props) => {
  const { message, greet } = props;
  const { id } = useParams();
  const {
    loadingData: loadingPost,
    errorLoadingData: errorLoadingPost,
    data: post,
  } = useFetch(APIRoutes.getPost(id));
  const {
    loadingData: loadingComments,
    errorLoadingData: errorLoadingComments,
    data: comments,
  } = useFetch(APIRoutes.getCommentsForSpecificPost(id));

  return (
    <div className="postPage">
      <h1 className="title">Post</h1>
      {!loadingPost && !loadingComments ? (
        <Post message={message} greet={greet} post={post} comments={comments} />
      ) : (
        "Loading post and comments"
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
