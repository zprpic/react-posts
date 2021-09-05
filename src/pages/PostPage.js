import React from "react";
import SpecificPost from "../components/SpecificPost";
import PropTypes from "prop-types";

export const PostPage = (props) => {
  const { message } = props;
  return (
    <div className="postPage">
      <h1 className="title">Post</h1>
      <SpecificPost message={message} />
    </div>
  );
};

PostPage.propTypes = {
  message: PropTypes.string.isRequired,
};

PostPage.defaultProps = {
  message: "Hello from component:",
};
