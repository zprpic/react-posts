import { extractAllPostsByKey } from "../helpers/extractAllPostsByKey";

export const getPosts = async (url, id) => {
  let response, data, posts;
  if (id) {
    response = await fetch(`${url}/posts/${id}`);
    posts = await response.json();
  }
  if (!id) {
    response = await fetch(`${url}/posts`);
    data = await response.json();
    posts = await extractAllPostsByKey(data);
  }
  return posts;
};
