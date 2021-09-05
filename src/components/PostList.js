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
import PropTypes from "prop-types";

const PostList = (props) => {
  const { message } = props;
  useGreeting(message, PostList);

  const { isLoadingPosts, errorLoadingPosts, posts } = useFetchPosts(URL);
  const { isLoadingComments, errorLoadingComments, comments } =
    useFetchComments(URL);

  let content =
    isLoadingPosts || isLoadingComments
      ? []
      : errorLoadingPosts || errorLoadingComments
      ? "Error loading data"
      : joinPostsAndComments(posts, comments);

  const [searchTerm, setSearchTerm] = useState("");
  const createSearchTerm = (term) => {
    setSearchTerm(term);
  };

  return (
    <ul className="postList">
      <SearchBar createSearchTerm={createSearchTerm} message={message} />
      {isLoadingPosts || isLoadingComments ? (
        <span className="loadingBar">loading posts and comments</span>
      ) : errorLoadingComments || errorLoadingPosts ? (
        <div className="specificPost">
          <h2 style={{ marginTop: "1rem" }}>
            Error loading posts and comments
          </h2>
        </div>
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

PostList.propTypes = {
  message: PropTypes.string.isRequired,
};

PostList.defaultProps = {
  message: "Hello from component:",
};

export default PostList;
