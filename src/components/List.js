import React from "react";
import URL from "../config/db";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { useFetchComments } from "../hooks/useFetchComments";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import Comment from "./Comment";

const List = () => {
  const { isLoadingPosts, posts } = useFetchPosts(URL);
  const { isLoadingComments, comments } = useFetchComments(URL);
  const posterIDArray = Object.keys(posts);

  /*   for (const userId of posterIDArray) {
    posts[userId].forEach((post) => {
      console.log(post);
    });
  } */
  console.log(posts);
  console.log(comments);
  return (
    <div>
      <h1>List</h1>
      {isLoadingPosts ? "loading posts" : <ListItem />}
      {isLoadingComments ? "loading comments..." : <Comment />}
    </div>
  );
};

export default List;
