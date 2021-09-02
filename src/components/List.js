import React from "react";
import URL from "../config/db";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { Link } from "react-router-dom";

const List = () => {
  const { isLoading, posts } = useFetchPosts(URL);
  console.log(posts);
  return (
    <div>
      <h1>List</h1>
      {isLoading ? "loading..." : "data"}
    </div>
  );
};

export default List;
