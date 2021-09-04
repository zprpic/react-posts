import React from "react";
import { useParams } from "react-router-dom";
import { useFetchPost } from "../hooks/useFetchPost";
import URL from "../config/db";

const SpecificPost = (props) => {
  const { id } = useParams();
  const { isLoadingPost, post } = useFetchPost(URL, id);
  const { userId, title, body } = post;
  return (
    <div>
      <h1>Post</h1>
      {isLoadingPost ? (
        "loading..."
      ) : (
        <div>
          <h4>Poster: {userId}</h4>
          <h2>Title: {title}</h2>
          <h3>Body: {body}</h3>
        </div>
      )}
    </div>
  );
};

export default SpecificPost;
