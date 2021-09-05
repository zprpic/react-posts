import React from "react";
import URL from "../config/db";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { useFetchComments } from "../hooks/useFetchComments";
import { useGreeting } from "../hooks/useGreeting";
import Post from "./Post";
import { joinPostsAndComments } from "../helpers/joinPostsAndComments";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { searchPosts } from "./utils/searchPosts";

const PostList = (props) => {
  const { isLoadingPosts, posts } = useFetchPosts(URL);
  const { isLoadingComments, comments } = useFetchComments(URL);

  const { message } = props;
  useGreeting(message, PostList);

  const [searchTerm, setSearchTerm] = useState("");

  const createSearchTerm = (term) => {
    setSearchTerm(term);
  };

  let content =
    isLoadingPosts || isLoadingComments
      ? []
      : joinPostsAndComments(posts, comments);

  return (
    <ul className="postList">
      <SearchBar createSearchTerm={createSearchTerm} message={message} />
      {isLoadingPosts || isLoadingComments ? (
        <span className="loadingBar">loading posts and comments</span>
      ) : (
        searchPosts(content, searchTerm).map((submission) => {
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
