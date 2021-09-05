import React from "react";
import PostList from "../components/PostList";
import PropTypes from "prop-types";

export const PostsPage = (props) => {
  const { message } = props;
  return (
    <div>
      <h1 className="title">Posts Page</h1>
      <PostList message={message} />
    </div>
  );
};

PostsPage.propTypes = {
  message: PropTypes.string.isRequired,
};

PostsPage.defaultProps = {
  message: "Hello from component:",
};
