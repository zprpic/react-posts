import React from "react";
import { useGreeting } from "../hooks/useGreeting";
import PropTypes from "prop-types";

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

SearchBar.propTypes = {
  message: PropTypes.string.isRequired,
};

SearchBar.defaultProps = {
  message: "Hello from component:",
};

export default SearchBar;
