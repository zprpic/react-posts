import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { searchPosts } from "./utils/searchPosts";
import { joinPostsAndComments } from "../helpers";
import Post from "./Post";
import SearchBar from "./SearchBar";

const PostList = (props) => {
  const { message, greet, renderType } = props;
  greet(message, PostList);

  const [searchTerm, setSearchTerm] = useState("");
  const createSearchTerm = (term) => {
    setSearchTerm(term);
  };

  const { posts, comments } = props;

  let content = joinPostsAndComments(posts, comments);

  return (
    <ul className="postList">
      <SearchBar
        createSearchTerm={createSearchTerm}
        message={message}
        greet={greet}
      />
      {searchPosts(content, searchTerm).map((submission) => {
        const { comments, ...post } = submission;
        return (
          <Post
            post={post}
            comments={comments}
            key={post.id}
            message={message}
            greet={greet}
            renderType={renderType}
          />
        );
      })}
    </ul>
  );
};

PostList.propTypes = {
  message: PropTypes.string.isRequired,
  renderType: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  comments: PropTypes.object.isRequired,
};

PostList.defaultProps = {
  message: "Hello from component:",
  renderType: "",
  posts: [],
  comments: {},
};

export default PostList;
