import React from "react";
import URL from "../config/db";
import { useFetchPosts } from "../hooks/useFetchPosts";
import { useFetchComments } from "../hooks/useFetchComments";
import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import Comment from "./Comment";
import { joinPostsAndComments } from "./helpers/joinPostsAndComments";

const List = () => {
  const { isLoadingPosts, posts } = useFetchPosts(URL);
  const { isLoadingComments, comments } = useFetchComments(URL);

  let content = joinPostsAndComments(posts, comments);
  console.log(content);
  return (
    <div>
      <h1>List</h1>
      {isLoadingPosts
        ? "loading posts"
        : posts.map(({ userId, id, title, body }) => {
            return (
              <>
                <ListItem userId={userId} id={id} title={title} body={body} />
              </>
            );
          })}
      {isLoadingComments ? "loading comments..." : <Comment />}
    </div>
  );
};

export default List;
