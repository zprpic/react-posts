import React from "react";
import URL from "../config/db";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { useFetchComments } from "../hooks/useFetchComments";
import { useGreeting } from "../hooks/useGreeting";
import Post from "./Post";
import { joinPostsAndComments } from "../helpers/joinPostsAndComments";

const PostList = (props) => {
  const { isLoadingPosts, posts } = useFetchPosts(URL);
  const { isLoadingComments, comments } = useFetchComments(URL);

  const { message } = props;
  useGreeting(message, PostList);

  let content =
    isLoadingPosts || isLoadingComments
      ? []
      : joinPostsAndComments(posts, comments);

  return (
    <ul className="postList">
      {isLoadingPosts || isLoadingComments
        ? "loading posts and comments"
        : content.map((submission) => {
            return (
              <Post
                submission={submission}
                key={submission.id}
                message={message}
              />
            );
          })}
    </ul>
  );
};

export default PostList;
