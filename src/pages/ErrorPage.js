import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div class="errorPage">
      <h1 className="title">Error page</h1>
      <Link to="/">
        <button class="btn">Back home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
