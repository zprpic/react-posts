import React from "react";

export const errorMessageLoader = {
  dataNotFound: function () {
    return {
      message: "Data not found... Please try again later.",
    };
  },
  postsNotFound: function () {
    return {
      message: "Posts not found... Please try again later.",
    };
  },
  postNotFound: function (id) {
    return {
      message: `Post with id: ${id} not found...`,
    };
  },
  commentsNotFound: function (id) {
    return {
      message: `Comments for post with id: ${id} not found...`,
    };
  },
};
