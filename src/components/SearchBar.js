import React from "react";

const SearchBar = ({ searchPosts }) => {
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
