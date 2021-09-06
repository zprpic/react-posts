import { groupCommentsByPostID } from "../helpers/groupCommentsByPostID";

export const getComments = async (url, id) => {
  let response, data, comments;
  if (id) {
    response = await fetch(`${url}/posts/${id}/comments`);
    comments = await response.json();
  }
  if (!id) {
    response = await fetch(`${url}/comments`);
    data = await response.json();
    comments = await groupCommentsByPostID(data);
  }
  return comments;
};
