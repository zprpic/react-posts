import React from "react";
import URL from "../config/db";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { useFetchComments } from "../hooks/useFetchComments";
import { useGreeting } from "../hooks/useGreeting";
import Post from "./Post";
import { joinPostsAndComments } from "../helpers/joinPostsAndComments";
import { useState } from "react";
import SearchBar from "./SearchBar";

const PostList = (props) => {
  const { isLoadingPosts, posts } = useFetchPosts(URL);
  const { isLoadingComments, comments } = useFetchComments(URL);

  const { message } = props;
  useGreeting(message, PostList);

  const [searchTerm, setSearchTerm] = useState("");
  const searchPosts = (term) => {
    setSearchTerm(term);
  };

  let content =
    isLoadingPosts || isLoadingComments
      ? []
      : joinPostsAndComments(posts, comments);

  console.log(content);

  return (
    <ul className="postList">
      <SearchBar searchPosts={searchPosts} message={message} />
      {isLoadingPosts || isLoadingComments ? (
        <span className="loadingBar">loading posts and comments</span>
      ) : (
        content
          .filter((submission) => {
            if (
              submission.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase().trim()) ||
              submission.body
                .toLowerCase()
                .includes(searchTerm.toLowerCase().trim()) ||
              submission.userId.toString().includes(searchTerm.trim())
            ) {
              return submission;
            }
          })
          .map((submission) => {
            return (
              <Post
                submission={submission}
                key={submission.id}
                message={message}
              />
            );
          })
      )}
    </ul>
  );
};

export default PostList;
