import React from "react";
import PropTypes from "prop-types";

export const ErrorNotification = (props) => {
  const { message, greet, error } = props;
  greet(message, ErrorNotification);

  return <h4 className="errorMessage">{error.message}</h4>;
};

ErrorNotification.propTypes = {
  message: PropTypes.string.isRequired,
  error: PropTypes.object.isRequired,
};
ErrorNotification.defaultProps = {
  message: "Hello from component:",
  error: { message: "error" },
};
