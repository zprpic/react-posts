import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const { message, greet } = props;
  greet(message, Navbar);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  message: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  message: "Hello from component:",
};

export default Navbar;
