import React from "react";
import PostList from "../components/PostList";

export const PostsPage = (props) => {
  const { message } = props;
  return (
    <div>
      <h1 className="title">Posts Page</h1>
      <PostList message={message} />
    </div>
  );
};
