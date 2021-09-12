import React from "react";

export const errorMessageLoader = {
  dataNotFound() {
    return {
      message: "Data not found... Please try again later.",
    };
  },
  postsNotFound() {
    return {
      message: "Posts not found... Please try again later.",
    };
  },
  postNotFound(id) {
    return {
      message: `Post with id: ${id} not found...`,
    };
  },
  commentsNotFound(id) {
    return {
      message: `Comments for post with id: ${id} not found...`,
    };
  },
};
