import React from "react";
import URL from "../config/db";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { useFetchComments } from "../hooks/useFetchComments";
import Post from "./Post";
import { joinPostsAndComments } from "../helpers/joinPostsAndComments";

const List = () => {
  const { isLoadingPosts, posts } = useFetchPosts(URL);
  const { isLoadingComments, comments } = useFetchComments(URL);

  console.log(this);

  let content =
    isLoadingPosts || isLoadingComments
      ? []
      : joinPostsAndComments(posts, comments);

  return (
    <ul>
      <h1>List</h1>
      {isLoadingPosts || isLoadingComments
        ? "loading posts and comments"
        : content.map((submission) => {
            return <Post submission={submission} key={submission.id} />;
          })}
    </ul>
  );
};

export default List;
