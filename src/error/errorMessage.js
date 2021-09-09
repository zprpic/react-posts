import React from "react";

export const errorMessage = {
  postNotFound: function (id) {
    return "Post with id:" + id + "not found...";
  },
  commentsNotFound: function (id) {
    return "Comments for post with id:" + id + "not found...";
  },
};
