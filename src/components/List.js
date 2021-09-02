import React from "react";
import URL from "../config/db";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const List = () => {
  const { isLoading, posts } = useFetch(URL);
  console.log(posts);
  return <div>{isLoading ? "loading..." : "data"}</div>;
};

export default List;
