import React from "react";

export const Loader = (props) => {
  const { message, greet } = props;
  greet(message, Loader);
  return <div className="loader"></div>;
};
