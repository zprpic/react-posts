import React from "react";
import URL from "../config/db";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { useFetchComments } from "../hooks/useFetchComments";
import { Link } from "react-router-dom";
import Post from "./Post";
import { joinPostsAndComments } from "../helpers/joinPostsAndComments";

const List = () => {
  const { isLoadingPosts, posts } = useFetchPosts(URL);
  const { isLoadingComments, comments } = useFetchComments(URL);

  let content = joinPostsAndComments(posts, comments);
  return (
    <ul>
      <h1>List</h1>
      {isLoadingPosts
        ? "loading posts"
        : content.map((submission) => {
            return <Post submission={submission} key={submission.id} />;
          })}
      {/* {isLoadingComments ? "loading comments..." : <CommentList />} */}
    </ul>
  );
};

export default List;
