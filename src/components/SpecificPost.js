import React from "react";
import { useParams } from "react-router-dom";
import { useFetchPost } from "../hooks/useFetchPost";
import { useGreeting } from "../hooks/useGreeting";
import URL from "../config/db";

const SpecificPost = (props) => {
  const { id } = useParams();
  const { isLoadingPost, post } = useFetchPost(URL, id);
  const { userId, title, body } = post;
  const { message } = props;
  useGreeting(message, SpecificPost);
  return (
    <div className="specificPost">
      {isLoadingPost ? (
        "loading..."
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

export default SpecificPost;
