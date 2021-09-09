export const groupCommentsByPostID = (data) => {
  let groupedComments = data.reduce((postGrouped, comment) => {
    if (!postGrouped[comment.postId]) {
      postGrouped[comment.postId] = [];
    }

    postGrouped[comment.postId].push(comment);

    return postGrouped;
  }, []);
  return groupedComments;
};
