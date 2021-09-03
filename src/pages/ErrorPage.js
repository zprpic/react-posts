import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div>
      <h1>Error page</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default ErrorPage;
