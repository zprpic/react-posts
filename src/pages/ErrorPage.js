import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h1 className="title">Error page</h1>
      <div>
        <p style={{ margin: "1rem" }}>Back to...</p>
      </div>
      <Link to="/" style={{ margin: "1rem", fontSize: "1.25rem" }}>
        Home Page
      </Link>
      <Link to="/posts" style={{ margin: "1rem", fontSize: "1.25rem" }}>
        Posts
      </Link>
    </div>
  );
};

export default ErrorPage;
