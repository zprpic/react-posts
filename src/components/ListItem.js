import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ userId, id, body, title }) => {
  return (
    <div>
      <p>Name: {userId}</p>
      <Link to={`posts/${id}`}>TO POST</Link>
      <p>body: {body}</p>
      <p>title: {title}</p>
    </div>
  );
};

export default ListItem;
