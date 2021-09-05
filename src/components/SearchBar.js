import React from "react";
import { useGreeting } from "../hooks/useGreeting";

const SearchBar = ({ createSearchTerm, message }) => {
  useGreeting(message, SearchBar);
  return (
    <input
      type="text"
      placeholder="Search..."
      className="searchBar"
      onChange={(e) => createSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
