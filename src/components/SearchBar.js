import React from "react";
import { useGreeting } from "../hooks/useGreeting";

const SearchBar = ({ searchPosts, message }) => {
  useGreeting(message, SearchBar);
  return (
    <input
      type="text"
      placeholder="Search..."
      className="searchBar"
      onChange={(e) => searchPosts(e.target.value)}
    />
  );
};

export default SearchBar;
