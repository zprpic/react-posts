import React from "react";
import SpecificPost from "../components/SpecificPost";

export const PostPage = (props) => {
  const { message } = props;
  return (
    <div className="postPage">
      <h1 className="title">Post</h1>
      <SpecificPost message={message} />
    </div>
  );
};
