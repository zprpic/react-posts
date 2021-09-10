export const groupCommentsByPostID = (data) => {
  if (Object.keys(data).length === 0) {
    return {};
  }
  let groupedComments = data.reduce((postGrouped, comment) => {
    if (!postGrouped[comment.postId]) {
      postGrouped[comment.postId] = [];
    }

    postGrouped[comment.postId].push(comment);

    return postGrouped;
  }, {});
  return groupedComments;
};
