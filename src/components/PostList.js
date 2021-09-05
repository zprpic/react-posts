import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useGreeting } from "../hooks/useGreeting";
import { searchPosts } from "./utils/searchPosts";
import { joinPostsAndComments } from "../helpers/joinPostsAndComments";
import Post from "./Post";
import SearchBar from "./SearchBar";

const PostList = (props) => {
  const { message } = props;
  useGreeting(message, PostList);

  const [searchTerm, setSearchTerm] = useState("");
  const createSearchTerm = (term) => {
    setSearchTerm(term);
  };

  const { posts, comments } = props;

  let content = joinPostsAndComments(posts, comments);

  return (
    <ul className="postList">
      <SearchBar createSearchTerm={createSearchTerm} message={message} />
      {searchPosts(content, searchTerm).map((submission) => {
        return (
          <Post submission={submission} key={submission.id} message={message} />
        );
      })}
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
