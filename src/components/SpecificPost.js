import React from "react";
import { useParams } from "react-router-dom";
import { useFetchPost } from "../hooks/useFetchPost";
import { useGreeting } from "../hooks/useGreeting";
import PropTypes from "prop-types";
import URL from "../config/db";

const SpecificPost = (props) => {
  const { message } = props;
  useGreeting(message, SpecificPost);
  const { id } = useParams();
  const { isLoadingPost, errorLoadingPost, post } = useFetchPost(URL, id);
  const { userId, title, body } = post;
  let error = false;
  if (Object.keys(post).length === 0) {
    error = true;
  }

  return (
    <div className="specificPost">
      {isLoadingPost ? (
        "loading..."
      ) : error ? (
        <h2>Post not found: no post with id: {id}</h2>
      ) : (
        <div className="thePost">
          <h2>{title}</h2>
          <h4>By {userId}</h4>
          <br />
          <p>{body}</p>
        </div>
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
